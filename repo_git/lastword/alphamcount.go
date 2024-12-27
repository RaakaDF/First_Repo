package main

import( 
      "github.com/01-edu/z01"
)
func Paramcount(s string) int {
	n := 0

	for idx,v := range s {
		if v != 'a'-'z' && v != 'A'-'Z' {
			z01.PrintRune('\n')
		} else {
			idx++
			n = idx
		}
	}
	return n
}

/*func main() {
	a := Paramcount("hello 25 manue")
	fmt.Println(a)
}*/