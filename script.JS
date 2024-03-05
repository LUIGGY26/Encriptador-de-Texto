
// Función para encriptar una palabra 

function encrypt(word, shift) 
{
    return word
      .split('')
      .map(char => 
        {
           const charCode = char.charCodeAt(0);
           if (char >= 'a' && char <= 'z')
           {
             return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else if (char >= 'A' && char <= 'Z') 
                   {
                       return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
                   } else 
                        {
                         return char;
                        }
        })
    .join('');

}
  
  // Función para desencriptar una palabra
  
function decrypt(word, shift) 
{
   return encrypt(word, 26 - shift); // Palabra inversa
}
  
  
const palabraEncriptada = encrypt(palabraOriginal, desplazamiento);
console.log(`Palabra encriptada: ${palabraEncriptada}`);
  
const palabraDesencriptada = decrypt(palabraEncriptada, desplazamiento);
console.log(`Palabra desencriptada: ${palabraDesencriptada}`);
  