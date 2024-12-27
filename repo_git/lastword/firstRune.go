package main

import "github.com/01-edu/z01"

func FRune(s string) rune {
	//y := len(s)-1

	for ind, i := range s {
		for ind == 0 {
			z01.PrintRune(i)
			break
		}
	}
	return rune(0)
}

func main() {
	FRune("hello!")
	FRune("salut!")
	FRune("ola!")
	z01.PrintRune('\n')

}
