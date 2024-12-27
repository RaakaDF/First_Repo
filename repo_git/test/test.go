package main

import( "fmt"
          "os"
          "github.com/01-edu/z01"
)
func main() {
	Lastword()
	a := []int{55, 54, 1}
	fmt.Println(MAX(a))
}

func Lastword() {
	arg := os.Args[1]

	y := len(arg)-1

	for arg[y] != ' ' {
		y--
	}

	for i := y + 1; i <= len(arg)-1; i++ {
		z01.PrintRune(rune(arg[i]))
	}
}

func MAX(a []int) int {
	if len(a) == 0 {
		return 0
	}

	y := a[0]
	for i:= range a {
		if i > y {
			y = i
		}
	}
	return y
}