const EventEmitter = require('events');
const Logger = require('./Logger');
const logger = new Logger();

logger.on('messagelogged', (args) =>
{
    console.log('Listiner Called  ', args);
})

logger.log('message')