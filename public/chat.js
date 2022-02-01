// conenction
let socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function() {
  socket.emit('chat:message', {
    message: message.value,
    username: username.value
  });
});

message.addEventListener('keypress', function () {
  socket.emit('chat:typing', username.value);
});

socket.on('chat:message', function(data) {
  actions.innerHTML = '';
  output.innerHTML += `<div class="message"> 
    <strong>${data.username}</strong>: <p> ${data.message}
  </p>`
});

socket.on('chat:typing', function(data) {
  actions.innerHTML =  `<p><em>${data} is writing a message...</em></p>`
});
