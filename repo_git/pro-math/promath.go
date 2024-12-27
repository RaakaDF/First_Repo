package main

import (
	"fmt"
	"math"
)

func main() {
	/*k := 0
	var sum float64

	for i := k; i <= 9; i++ {
		sum += float64(1 / (10 ^ i))
		fmt.Println(10 ^ 0)
	}
	fmt.Println(sum)*/
	
	nValues := []float64{0, 1, 2, 4, 5, 6, 7, 8, 9}

	for _, n := range nValues {
		result := 1 / math.Pow(10, n)
		fmt.Printf("1/(10^%.0f) = %f\n", n, result)
	}
	
}
