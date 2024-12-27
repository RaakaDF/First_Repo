package main 

import "fmt"

func Strrev(s string) string {
	X := []rune(s)
	for x,y := 0, len(X)-1; x<y; x,y = x+1 , y-1 {
		X[x], X[y] = X[y],X[x]
	}
	return string(X)

}

func StrRev(str string) {
	r := []rune(str)
	for index,_ := range r {
		fmt.Print(v)
		/*for x := 0; x <= len(r)-1; x++{
			fmt.Print(x)
		}*/
	}
	fmt.Print("\n")
}

func main() {
	a := Strrev("abcdef")
	fmt.Println(a)

	StrRev("dddd")
}