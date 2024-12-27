package main

import "fmt"

func Printnbr(n int) {
	fmt.Print(n)
	//fmt.Print("\n")
}

func main() {
	Printnbr(-123)
    Printnbr(0)
	Printnbr(123)
	fmt.Print("\n")
}