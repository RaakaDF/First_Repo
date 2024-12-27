package main

import "fmt"    

func PrintStr(s string) {
	f := "salut! comment tu vas?"
	fmt.Println(f)

	a := []byte(s)
	a[0] = 'A'
	b := string(a)
	fmt.Println(b)

}

func main() {
	PrintStr("hello world")
}