let formulario = document.querySelector('form');
let fibraIngresada = document.getElementById('fibra');
let numeroFibra, buffer, fibra, resultadoFibra;
let b = document.querySelector('#b');
let f = document.querySelector('#f');

let banderaFibra= -1;
let arrayFibras = ['Azul', 'Naranja', 'Verde', 'Marrón', 'Gris', 'Blanco', 'Rojo', 'Negro', 'Amarillo', 'Violeta', 'Rosa', 'Celeste', 'Azul-lineaNegra', 'Naranja-lineaNegra', 'Verde-lineaNegra', 'Marrón-lineaNegra', 'Gris-lineaNegra', 'Blanco-lineaNegra', 'Rojo-lineaNegra', 'Negro-lineaAmarilla', 'Amarillo-lineaNegra', 'Violeta-lineaNegra', 'Rosa-lineaNegra', 'Celeste-lineaNegra'];

const totalFibra = 12;

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    f.innerText=" ";
    numeroFibra = fibraIngresada.value;

if (numeroFibra > 0 && numeroFibra < 289) {
        
    
    if(numeroFibra % totalFibra == 0){
        //Esto es porque si da sin resto está en el límite de pasar a la siguiente tanda de colores
        resultadoBuffer = (numeroFibra / totalFibra) - 1;  
        
    }else{
        
        resultadoBuffer = Math.floor(numeroFibra / totalFibra);
    }
    console.log('tu buffer es: ' + arrayFibras[resultadoBuffer]);
    
    let colorFibraMetodo1 = (numeroFibra - totalFibra * resultadoBuffer)+ banderaFibra;
    console.log('tu fibra es: ' + arrayFibras[colorFibraMetodo1]);
    
    b.innerText = `El buffer es: ${arrayFibras[resultadoBuffer]}`
    f.innerText = `La fibra es: ${arrayFibras[colorFibraMetodo1]}`

}else{

    b.innerText= 'El número ingresado tiene que estar entre 1 y 288';

}
    
})