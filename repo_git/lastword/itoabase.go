package piscine

func ItoaBase(value, base int) string {
	if value == 0 {
		return "0"
	}

	digits := "0123456789ABCDEF"
	var result []byte
	isNegative := value < 0
	isMinInt := value == -9223372036854775808

	if isMinInt {
		value++
	}
	if isNegative {
		value = -value
	}

	for value > 0 {
		result = append(result, digits[value%base])
		value /= base
	}

	if isMinInt {
		// Adjust for the special case of minimum int64 value
		carry := 1
		for i := 0; i < len(result); i++ {
			digit := int(result[i]-'0') + carry
			if digit == base {
				result[i] = '0'
				carry = 1
			} else {
				result[i] = digits[digit]
				carry = 0
				break
			}
		}
		if carry > 0 {
			result = append(result, '1')
		}
	}

	if isNegative {
		result = append(result, '-')
	}

	// Reverse the result
	for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
		result[i], result[j] = result[j], result[i]
	}

	return string(result)
}
