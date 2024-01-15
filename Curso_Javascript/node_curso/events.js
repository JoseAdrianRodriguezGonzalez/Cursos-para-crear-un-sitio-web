const EventEmitter=require('events')
const customEmitter=new EventEmitter()
//Primero se debe escuchar el evento y luego se emite
customEmitter.on('response',(data,secondData)=>{
    console.log("recibido")
    console.log(data)
    console.log(data,secondData)
})
customEmitter.emit('response','hello world',[1,2,3])
