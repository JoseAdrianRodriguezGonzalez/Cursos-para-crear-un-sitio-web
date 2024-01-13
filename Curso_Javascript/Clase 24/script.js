/*
document.getElementById('id)- acceder a un elemento a través de su id
document.querySelector('selectorCss')-accede al primer elmeno que conicida con el selector CSS

document.querySelectorAll('selectorCss') - Accede a todos los elementois que coincidan con el selector CSSXS, devuelve un nodelist
*/
/*
const title =document.getElementById('title');
title.textContent = 'DOM - Accediendo a nodos';
*//*
const paragraph =document.querySelector('.paragraph');
const span =paragraph.querySelector("span");
*/

const paragraphs = document.querySelectorAll('.paragraph');
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));


paragraphs[0].style.color = 'red'

//p-aragraphsSpread.map(p=>p.style.color='green')

paragraphsArray.map(p=>p.style.color='blue')
console.log(paragraphs);
