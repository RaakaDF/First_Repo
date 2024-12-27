package main

/*import (
	"os"

	"github.com/01-edu/z01"
)*/

/*func main() {
	if len(os.Args) <= 3 {
		s1 := os.Args[1]
		s2 := os.Args[2]
		wdmatch(s1, s2)
	} else {
		fmt.Println()
	}
}

func wdmatch(s1, s2 string) {
	index := -1
	countMatch := 0
	for i := 0; i < len(s1); i++ {
		if len(s1) != countMatch {
			for j := 0; j < len(s2); j++ {
				if s1[i] == s2[j] && j > index {
					index = j
					countMatch++
					break
				}
			}
		}
	}
	if countMatch == len(s1) {
		fmt.Println(s1)
	} else {
		fmt.Println()
	}

}*/

/*func main() {
	if len(os.Args) == 3 {

		first := os.Args[1]
		second := os.Args[2]

		var result string

		for _, v := range first {
			for i, j := range second {
				if v == j {
					result += string(v)
					second = second[i+1:]
					break
				}
			}
			if result == first {
				for _, v := range result {
					z01.PrintRune(v)
				}
				z01.PrintRune('\n')
			}
		}
	}
}*/

/*func main() {
	if len(os.Args) == 3 {

		arg1 := os.Args[1]
		arg2 := os.Args[2]

		var result string

		for _, value := range arg1 {
			for i, v := range arg2 {
				if value == v {
					result += string(value)
					arg2 = arg2[i+1:]
					break
				}
			}
			if result == arg1 {
				for _, v := range result {
					z01.PrintRune(v)
				}
				z01.PrintRune('\n')
			}
		}
	}
}
*/