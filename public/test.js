

    var socket =io();
    const name = prompt('Enter the name');


    document.getElementById('welcome').innerHTML="Hello " + name;
    document.getElementById('welcome').style.display= "block";
    const rightside = document.getElementById('mainuser');
    const leftside = document.getElementById('outsideuser');
    console.log(rightside);

    socket.emit('chatname', name);

    socket.on('joined-user', (name)=>
    {
        alert(`${name} Joined the chat`);
    })

    var input = document.getElementById('input');
    var form = document.getElementById('form');
    var chats = document.getElementById('chats');
    




    form.addEventListener('submit', (e)=>
    {
        e.preventDefault();
        
        const value = input.value;
        console.log(value);
        var element1 = document.createElement('div');
        
        element1.innerHTML= value;
        // document.element1.appendChild('rightside');
        
        rightside.appendChild(element1);
        rightside.style.display="block";
        leftside.style.display="block";

        socket.emit('chatmessage', value);
        input.value='';
    })

    socket.on('chatting', (message)=>
    {
        var element = document.createElement('div');
         element.textContent = message;
         leftside.appendChild(element);
    })

     

    

    
