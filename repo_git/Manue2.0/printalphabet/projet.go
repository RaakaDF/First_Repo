package main

import "fmt"

func TableNum() {
 restoRAMA := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}
     for i := 0; i < len(restoRAMA); i++ {
		if restoRAMA[i] == 13 {
			continue
	}
	fmt.Println("tableNum:")
	fmt.Println(restoRAMA[i])
}
fmt.Println(10)
}

func Peopleontable() {
	peopleNumbers := []int{ 
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
	fmt.Println('\n')

}

func PeopleName() {
	foodname := map[string]string{
		"Manuela" : "tchep",
		"Racine" : "garba",
		"Laya" : "alloco",
		"Mariam" : "placali",
		"MJ" : "foutou",
	}
	for a,b := range foodname {
		fmt.Println("on the table number 2",a, "ordered", b)
	}
	fmt.Println('\n')
}

func Pointer() {
	var num string
	num = "Manuela is beautiful"
	//fmt.Println(&num)
	m := &num
	fmt.Println(*m)
	fmt.Println('\n')
}

func main() {
 
	TableNum()
	Peopleontable()
	PeopleName() 
	Pointer()


}