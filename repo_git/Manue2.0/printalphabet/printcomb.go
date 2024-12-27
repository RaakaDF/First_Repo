package main

import "fmt"

func Printcomb() {

	for i := 0 ; i <= 9 ; i++ {
		for j := i + 1; j <= 9; j++ {
			for k := j + 1; k <= 9; k++ {
				//if a < b && b < c {
				fmt.Print(i)
				fmt.Print(j)
				fmt.Print(k)
				fmt.Print(",")
				fmt.Print(" ")
				//}else if (a == b && b == c) || (a < b && b < c) {
				//	break
				//}
				
			} 
		}
	}
	fmt.Print("\n")
}
