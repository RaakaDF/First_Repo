package main

import (
	"fmt"
	"net/http"
)

const port = ":8080"

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Salut les gars!")
}

func About(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Que puis-je faire pour vous ?")
}

func Content(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Vous allez bien ?")
}

func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	http.HandleFunc("/about/content", Content)
	fmt.Println("(http://localhost:8080) - Server started on port", port)
	http.ListenAndServe(port, nil)
}
