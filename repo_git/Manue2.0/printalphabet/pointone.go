package main

import "fmt"

func PointOne(n *int) {
	*n = 1
}

func Pointer(nb *int) *int {
	*nb = *nb + 1

	return nb
	
}

func main() {
	n := 0
	PointOne(&n)
	fmt.Println(n)


	nb := 2
	Pointer(&nb)
	fmt.Println(nb)

}