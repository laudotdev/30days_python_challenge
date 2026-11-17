def convert_to_binary(text):
    result = "" # empty string append later

    for char in text:
        number = ord(char) # letter to number
        binary = bin(number)[2:] # number to binary
        binary = binary.zfill(8) # gawing 8bits
        result += binary + " " # append sa result ang nakuhang binary conversion
        
    return result
    
def convert_to_string(to_string):
    bin_res = ""

    to_string = to_string.replace(" ", "") # remove the space then split ng 8-8

    if len(to_string) % 8 != 0:
        return "not an 8 bits binary."
    for i in range(0, len(to_string), 8):
        chunk = to_string[i:i+8] # 8bits lang baliktad ng zfill(8)
        
        number = int(chunk, 2) # binary to number
        letter = chr(number) # number to letter
        bin_res += letter # append sa result ng nakuhang string conversion
    
    return bin_res