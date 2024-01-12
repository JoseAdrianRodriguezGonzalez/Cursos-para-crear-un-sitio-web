const endpoint='http://api.geonames.org/countryInfoJSON?username=lepopardo&style=full'
fetch(endpoint)
/**
 *         .then((respuesta)=>{
           const promesa =respuesta.json();
           promesa
            .then((datos)=>{
                console.log(datos)
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
 */
//async await
const obtenerDatos=async()=>{
   const respuesta= await fetch(endpoint);
   const datos=await respuesta.json();
   console.log(datos)
}
obtenerDatos();