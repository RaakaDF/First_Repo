package main

import( "github.com/01-edu/z01"
         "os"
		 "strconv"
)

func main() {
	
	if len(os.Args) > 1 {
		x := os.Args[1:]
		count := len(x)
		for _, i := range strconv.Itoa(count) {
			z01.PrintRune(i)
		}
		/*count := 0

		for i := range x {
			count++
			i += i
		}
		z01.PrintRune(rune('0' + count))
		z01.PrintRune('\n')*/

	} else {
		z01.PrintRune('0')
		z01.PrintRune('\n')
	}

	
}