package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

// Configuration de la base de données MySQL
const (
	dbDriver = "mysql"
	dbSource = "root:Digi-025@tcp(localhost:8080/resources"
)

func main() {
	http.HandleFunc("/", formHandler)
	log.Println("Serveur démarré sur http://localhost:8080")

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func formHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		err := r.ParseForm()
		if err != nil {
			log.Println("Erreur lors de l'analyse du formulaire:", err)
			return
		}

		email := r.Form.Get("email")
		resources := r.Form["resource[]"]
		date := r.Form.Get("date")
		acquisitionTime := r.Form.Get("acquisitionTime")
		usageType := r.Form.Get("usageType")
		additionalNotes := r.Form.Get("additionalNotes")
		people := r.Form.Get("people")

		// Insérer la réservation dans la base de données
		err = insertReservation(email, resources, date, acquisitionTime, usageType, additionalNotes, people)
		if err != nil {
			log.Println("Erreur lors de l'insertion de la réservation:", err)
			return
		}

		/*fmt.Println("Adresse e-mail :", email)
		fmt.Println("Ressources demandées :", resources)
		fmt.Println("Date :", date)
		fmt.Println("Heure d'acquisition :", acquisitionTime)
		fmt.Println("Type d'utilisation :", usageType)
		fmt.Println("Raison de la demande :", additionalNotes)
		fmt.Println("Nombre de personnes :", people)*/
		

		http.Redirect(w, r, "/next.html", http.StatusSeeOther)
	} else {
		http.ServeFile(w, r, "index.html")
	}
}

func insertReservation(email string, resources []string, date string, acquisitionTime string, usageType string, additionalNotes string, people string) error {
	db, err := sql.Open(dbDriver, dbSource)
	if err != nil {
		return err
	}
	defer db.Close()

	stmt, err := db.Prepare("INSERT INTO reservations (email, resources, date, acquisition_time, usage_type, additional_notes, people) VALUES (?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(email, resourcesToString(resources), date, acquisitionTime, usageType, additionalNotes, people)
	if err != nil {
		return err
	}

	return nil
}

func resourcesToString(resources []string) string {
	// Concaténer les ressources en une seule chaîne
	// (par exemple, "Ressource 1, Ressource 2, Ressource 3")
	result := ""
	for i, resource := range resources {
		if i > 0 {
			result += ", "
		}
		result += resource
	}
	return result
}
