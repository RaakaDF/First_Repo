package main

import "fmt"

func main() {
	x := map[string]bool{
		"i'm a girl": true,
	    "i'm found of Apia": true,
	}

	for i,j := range x {
		fmt.Println("indx:",i, "value",j)
	}
}