package main

import "fmt"

func main() {

	for i := 0 ; i <= 9; i++ {
		for j := 0; j <= 9; j++ {
			for k := 0; k <= 9; k++ {
				for z := k+1; z <= 9; z++ {
				fmt.Print(i)
				fmt.Print(j)
				fmt.Print(" ")
				fmt.Print(k)
				fmt.Print(z)
				fmt.Print(",") 
				fmt.Print(" ")


					
				}
			}
		}
	}
	fmt.Print("\n")
}