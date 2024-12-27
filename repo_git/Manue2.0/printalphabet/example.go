package main

import "fmt"

func main() {
	peopleNumbers := map[int]int{ 
		1 : 5,
		2 : 4,
		3 : 0,
		4 : 3,
		5 : 6,
		6 : 5,
		7 : 5,
		8 : 9,
		9 : 1,
		10 : 5,
		11 : 8,
		12 : 6,
		13 : 5,
		14 : 6, 
		15 : 2,
		16 : 0,
		17 : 6,
		18 : 8,
		19 : 0,
		20 : 0,
	}
	for key, value := range peopleNumbers {
	fmt.Println("tableNum:",key, "peopleontables are:", value)
	}
}