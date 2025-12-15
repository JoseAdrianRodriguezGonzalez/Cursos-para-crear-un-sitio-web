/*protocolo http
https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto
*/
/*
https://developer.mozilla.org/es/docs/Web/HTTP/Status
*/
const button =document.getElementById('button');
button.addEventListener('click',()=>{
    /*COdigo para poder usa AJAX en versiones de internet explorer anteriores de 11 o navegador muy antiguo */
    let xhr;
    if(window.XMLHttpRequest){
       xhr = new XMLHttpRequest();    
    }
    else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    
    xhr.addEventListener('load',(data)=>{
       const dataJSON=JSON.parse(data.target.response);
       const list=document.getElementById('list');
       for (const info of dataJSON) {
            const listitem=document.createElement('LI');
            listitem.textContent=`${info.id}-${info.name}`;
            list.appendChild(listitem);
       }
    });

    xhr.send();
});