package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	// Set index.html as template
	file, error := template.ParseFiles("./templates/home.html")

	if error != nil {
		log.Fatal(error)
	}

	// Render template
	if error := file.Execute(w, file); error != nil {
		log.Fatal(error)
	}
}

func main() {

	http.HandleFunc("/", HomeHandler)

	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/fs/", http.StripPrefix("/fs/", fs))

	fmt.Println("Cliquez sur le lien http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
