const path = require('path');
//console.log(path.parse(__filename))
/* 
const os = require('os');
console.log(`Total Memory ${os.totalmem()}`);
console.log(`Free Memory ${os.freemem()}`);
 */
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('MessageLoaded', (args)=>
{
    console.log('Message Loaded',args)
})

emitter.emit('MessageLoaded',{id:1 , url:"http://localhost"})