import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.156:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})