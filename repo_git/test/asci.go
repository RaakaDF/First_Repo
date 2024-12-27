package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func l() {
	// ici on vérifie s'il y a bien un seul argument passé
	Arg := os.Args[1:]
	if len(Arg) != 1 {
		return
	}
	//Cette partie vérifie si l'argument passé est une chaîne de caractères imprimables ASCII
	for _, r := range Arg[0] {
		if r < 32 || r > 126 {
			return
		}
	}

	// le contenu de stand.txt est lu et stocké dans "bytes"
	bytes, err := ioutil.ReadFile("stand.txt")
	//Si une erreur se produit lors de la lecture du fichier, elle est stockée dans err puis affichée.
	if err != nil {
		fmt.Println(err)
		return
	}
	lines := strings.Split(string(bytes), "\\n")
	/*le contenu du fichier est divisé en lignes individuelles grace à Split() et
	un slice de strings représentant chaque ligne du fichier est renvoyé.*/


	//Creating the art itself
	var arr []rune
	Newline := false
	for i, r := range Arg[0] {
		if Newline {
			Newline = false
			AffArt(arr, lines)
			arr = []rune{}
			continue
		}

		if r == 92 && len(Arg[0]) != i+1 {
			if Arg[0][i+1] == 110 {
				Newline = true
				continue
			}
		}
		arr = append(arr, r)
	}
	AffArt(arr, lines)
}

//Printing given rune array, based on lines art
func AffArt(arr []rune, lignes []string) {
	for ligne := 1; ligne <= 8; ligne++ {
		for _, r := range arr {
			if r == '\n' {
				fmt.Println()
				break
			}
			sauter := rune((int(r) - 32) * 9)
			fmt.Print(lignes[ligne+int(sauter)])
		}
		fmt.Println()
	}
}

/*func AffArt(arr []rune, lignes []string) {
	for ligne := 1; ligne <= 8; ligne++ {
		for _, r := range arr {
			if r == ' ' {
				fmt.Print("         ")
			} else {
				sauter := (r - 32) * 9
				if int(sauter) >= 0 && int(sauter) < len(lignes)-(ligne+1) {
					fmt.Print(lignes[ligne+int(sauter)])
				} else if r == '\n' {
					fmt.Println()
				}
			}
		}
		fmt.Println()
	}
}*/

/*func AffArt(arr []rune, lignes []string) {
	for ligne := 1; ligne <= 8; ligne++ {
		for _, r := range arr {
			sauter := (r - 32) * 9
			fmt.Print(lignes[ligne+int(sauter)])

			if r = "\n" {
				fmt.Println()
			}
		}
		fmt.Println()
	}
}*/
