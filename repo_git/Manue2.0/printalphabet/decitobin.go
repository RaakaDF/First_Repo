package main 

import "strconv"

func main() {
	biny := "10"

	var deci int

	var res int = deci % 2

	for deci > 0 {
		biny = strconv.Itoa(res) + biny

		deci = deci / 2
	}

	return biny
}