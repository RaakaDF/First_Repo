package main 


import( "github.com/01-edu/z01"
          "fmt"
)

func main() {
	checkit(-112)
	checkit(0)
	checkit(112)
	fmt.Println()
}

func checkit(v int) {
	c := '0'
	if v == 0 {
		z01.PrintRune(c)
		return
	}
	if v < 0 {
		z01.PrintRune('-')
		v = -v
	}
	for i := 1; i <= v%10; i++ {
		c++
	}
	for i := -1; i >= v%10; i-- {
		c++
	}
	if v/10 != 0 {
		checkit(v / 10)
	}
	z01.PrintRune(c)
	return
}
