package main

//import "fmt"

//func main() {
	/*students := []string{"Manuela","racine","laya","mariam","mya"}

	for idx := 0; idx < len(students) ; idx++ {
		if students[idx] == "mariam" {
			continue
		}
		fmt.Println("i love you", students[idx])
	}

	package main*/

import( "os"
         "github.com/01-edu/z01"
)

func main() {
	if len(os.Args) != 2 {
		return
	}

	if len(os.Args) == 2 {
		for _,x := range []rune(os.Args[1]) {
			if x >= 'a' && x <= 'z' {
				if x >= 'n' {
					x = x - 13
				} else {
					x = x + 13
				}
			}
			if x >= 'A' && x <= 'Z' {
				if x >= 'M' {
					x = x - 12
				} else {
					x = x + 14
				}
			} 
			z01.PrintRune(x)
		}
		
	}
	z01.PrintRune('\n')
//}
}