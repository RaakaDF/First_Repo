package main

import(
          "fmt"
)
func IfElse(n int) {
	
	if n > 0 {
		z01.PrintRune('V')
		z01.PrintRune('\n')
		return 
	} else if n == 0 {
		fmt.Println("0 is not a number required")
	} else{
		z01.PrintRune('F')
		z01.PrintRune('\n')
		return 
	}

}*/

func main() {
    IfElse(-5)
	IfElse(0)
	IfElse(5)

	var Username string
    fmt.Print("Entrez votre username: ")
    fmt.Scanln(&Username)
    
    switch Username {
        case "Raaka":
            fmt.Println(" Tu m'audite.")
        case "lpoudiou":
            fmt.Println("Tu es bien mon auditrice.")
        case "ggnapa":
            fmt.Println("Tu m'audite demain miss.")
		case "anguetta":
			fmt.Println("t'es l'une de mes auditrices.")	
		case "mtraore":
			fmt.Println("mtraore est mon auditrice.")	
        default:
            fmt.Println("Vous n'etes pas mon auditrice.")
    }
}