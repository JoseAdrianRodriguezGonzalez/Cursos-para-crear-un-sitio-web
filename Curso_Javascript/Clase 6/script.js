
const number =document.getElementById('numbers');
const result=document.getElementById('result');



let num1=prompt('Introduzca el primer número');
let num2=prompt('Introduzca el segundo número');
let num3=prompt('introduzca el tercer numero');

if(num1>=num2 &&num1>=num3){
    if(num2>num3){
       number.textContent =`Los numeros introducidos son ${num1},${num2},${num3}`;
    }else{
        number.textContent =`Los numeros introducidos son ${num1},${num3},${num2}`;
    }
}
else if(num2>=num1&&num2>=num3){
    if(num3>num1){
        number.textContent=`Los numeros introducidos son ${num2},${num3},${num1}`;
    }
    else{
        number.textContent=`Los numeros introducidos son ${num2},${num1},${num3}`;
    }

}
else if(num3>=num2&&num3>=num1){
    if(num2>num1){
        number.textContent=`Los numeros introducidos son ${num3},${num2},${num1}`;
    }
    else{
        number.textContent=`Los numeros introducidos son ${num3},${num1},${num2}`;
    }
}
