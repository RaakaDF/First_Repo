package main

import "fmt"

func main(){

	x := []string{"always stronger than everything",",","very happy "}
	x[1] = "..."
	//b := ""
	/*m := x[0]
	n := x[2]

	m,n = n,m*/
	/*m = b
	
	b = n
	n = m
	m = b*/
	fmt.Println(x)


	j := append(x, "found of a pretty boy")
	fmt.Println(j)
	
	xx := make(map[int]string)
	xx[1] = "allo"
	xx[2] = "bonjour"
	fmt.Println(xx)

	i := []int{655, 696, 985, 45,5458,2444}
	fmt.Println(i)

	var k []int
	k = i[1:5]
	fmt.Println(k)

}