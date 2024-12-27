package piscine

func CamelToSnakeCase(s string) string {
	if s == "" {
		return ""
	}

	if !isValidCamelCase(s) {
		return s
	}

	result := make([]byte, 0, len(s)*2) // Pré-allouer de l'espace pour le pire cas
	for i := 0; i < len(s); i++ {
		if i > 0 && isUpper(s[i]) {
			result = append(result, '_')
		}
		result = append(result, toLower(s[i]))
	}

	return string(result)
}

func isValidCamelCase(s string) bool {
	if len(s) == 0 {
		return false
	}

	prevIsUpper := false
	for i := 0; i < len(s); i++ {
		if i == len(s)-1 && isUpper(s[i]) {
			return false
		}
		if !isLetter(s[i]) {
			return false
		}
		if isUpper(s[i]) {
			if prevIsUpper {
				return false
			}
			prevIsUpper = true
		} else {
			prevIsUpper = false
		}
	}
	return true
}

func isUpper(c byte) bool {
	return c >= 'A' && c <= 'Z'
}

func isLower(c byte) bool {
	return c >= 'a' && c <= 'z'
}

func isLetter(c byte) bool {
	return isUpper(c) || isLower(c)
}

func toLower(c byte) byte {
	if isUpper(c) {
		return c + 32
	}
	return c
}
