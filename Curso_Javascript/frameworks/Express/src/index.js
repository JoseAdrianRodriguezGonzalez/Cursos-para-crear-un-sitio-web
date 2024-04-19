/*import express from 'express'
import fs from fs
const app= express()
app.get('/',(req,res)=>{
    res.send('<h1>Bienvendio</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>Bienvendio aaaa</h1>')
})
app.listen(3000)
console.log('server on port',3000)
*//*
import http from 'http'
import fs from 'fs'
const server=http.createServer((req,res)=>{
    const read =fs.createReadStream('Express/static/index.html')
    read.pipe(res)
})
server.listen(3000)
console.log(`Server on port ${3000}`)
*/
const express=require('express')
const path=require('path')
const app=express()
/*
//Pide recursos
app.get('/products',(req,res)=>{
    res.send('lista de productos')
})
//pide y envia datos a guardar
app.post('/products',(req,res)=>{
    res.send('lista de productos creando..')
})
//coloca un dato nuevo a actualizar
app.put('/products',(req,res)=>{
    res.send('lista de productos colocando...')
})
//elimina
app.delete('/products',(req,res)=>{
    res.send('lista de productos eliminando')
})
//similar a put
app.patch('/products',(req,res)=>{
    res.send('lista de productos actualizando')
})
*//*
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/archivo',(req,res)=>{
    res.sendFile(path.resolve('./src/al.txt'),root=__dirname)
})
app.get('/user',(req,res)=>{
    res.json({
        "name":"Jose",
        "lastname":"rodriguez",
        age:40,
        points:[1,2,3],
        pushadress:{
            "city":"New York",
            "street":"some srteet 123"
        }
    })
})
app.get('/isAlive',(req,res)=>{
    res.sendStatus(204)
})
/*
app.get('/',(req,res)=>{
  //  res.sendFile(path.resolve('Express/./static/index.html'),root=__dirname)
    res.send('hello world')
})
app.get('/about',(req,res)=>{
    //  res.sendFile(path.resolve('Express/./static/index.html'),root=__dirname)
      res.send('about')
  })
  app.get('/weather',(req,res)=>{
    //  res.sendFile(path.resolve('Express/./static/index.html'),root=__dirname)
      res.send('The current weather is Nice')
  })
  app.get('/',(req,res)=>{
    //  res.sendFile(path.resolve('Express/./static/index.html'),root=__dirname)
      res.send('hello world')
  })
  //Las peticiones tienen la siguiente estructura
  /*
/about  endpoint
json header
{}json body*//*
  app.use((req,res)=>{
    res.status(404).send('No existe esa página')
  })*//*sirve para extraer un tipo de archivos o mpás bien, leer archivos de este estilo
  app.use(express.text())
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))//Datos extraídos de un formulario
  app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('Nuevo usuario creado ')
  })*//* request.params
  app.get('/hello/:name',(req,res)=>{//dato dinamico con :name en forma de params
    console.log(req.params.name)//Coloca el nombre del parametro
    res.send(`Hello ${req.params.name}`)//Coloca este nombre en pantalla
  })
  app.get('/add/:x/:y',(req,res)=>{//Usa dos parametros para ssumarlos de forma entera
    const {x,y}=req.params//se extrae el objeto
    const result=parseInt(x)+parseInt(y)//Se suman los dos valores ya convertidos a entero
    res.send( `Result ${result}`)//Se muestra een pantalla
  })
  app.get('/users/:username/photo',(req,res)=>{
    
    if(req.params.username==="jose"){
        return res.sendFile(path.resolve('./src/al.txt'),root=__dirname)
    }
  })//request queries
  app.get('/search',(req,res)=>{
    //queries ?user=algo
    console.log(req.query);//Saca la lista de busqueda
    if(req.query.q ==='javascript books'){
      res.send('lista de libros de javascript')
    }else{
      res.send('pagina normal')
    }
  })
  //El metódo all utiliza todos los meotdos http
  app.all('/info',(req,res)=>{
    res.send("send info")
  })*/
  //  Middleware
  //loggers son funcion que registran la informacion al servidor 
 app.use((req,res,next)=>{
  console.log("Pasó por aquí");
  next()//Va a continuar con la siguiente ruta
 })//Tiene que utilizar express la funcion middleware
  app.get('/dashboard')
  app.get('/profile',(req,res)=>{
    res.send("Profile page")
  })
  //middleware 2

  //Si se crea otra ruta, también pasara por esta función 
app.listen(3000)//Se cloca en el servidor en el pueto 3000
console.log(`Òn port ${3000}`)//Se imprime en consola esto