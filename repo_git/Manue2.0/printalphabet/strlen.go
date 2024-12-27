package main

import "fmt"

/*func one(n int) {
	fmt.Println(n)
}*/

func Strlen(s string) int {
	count := 0
	for range s {
		count++
	} 
	return count
}	



func main() {
	a := Strlen("hello world!")
	fmt.Println(a)
	

	//one(2)
}