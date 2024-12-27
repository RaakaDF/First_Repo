package main

import( "github.com/01-edu/z01"
         "fmt"  
)

func main() {
	s1 := "ZYXWVUTSRQPONMLKJIHGFEDCBA"
	s2 := "zyxwvutsrqponmlkjihgfedcba"

	str1 := []rune(s1)
	str2 := []rune(s2)

	for i := 0; i <= 25; i++ {
		if i % 2 != 0 {
			z01.PrintRune(str2[i])
			//z01.PrintRune('\n')
		} else {
			z01.PrintRune(str1[i])
			//z01.PrintRune('\n')
		}
	} 
	z01.PrintRune('\n')


	a := Strlen("abcdef")
	fmt.Println(a)

	b := Strrev("abcdef")
	fmt.Println(b)
}

func Strlen(s string) int {
	count := 0
	for range s {
		count++
	}
	return count
}

func Strrev(s string) string {
	X := []rune(s)
	for x,y := 0, len(X)-1; x<y; x,y = x+1 , y-1 {
		X[x], X[y] = X[y],X[x]
	}
	return string(X)

}