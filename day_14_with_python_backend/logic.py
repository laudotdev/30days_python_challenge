from cryptography.fernet import Fernet

# define key
key = Fernet.generate_key()

# cipher for generated_key
cipher = Fernet(key)
def encryption_text(encrypted_text):

    encrypted_text = cipher.encrypt(encrypted_text.encode()) # encode the encrypted_text
    
    return encrypted_text.decode() # return the decoded encrypted_text
    
def decryption_text(decrypted_text):
    decrypted_text = cipher.decrypt(decrypted_text.encode()) # define decrypted_text and encode

    return decrypted_text.decode() # return it with decode so no bytes will be printed