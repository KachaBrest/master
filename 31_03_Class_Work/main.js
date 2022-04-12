const message = {
    time: new Date(),
    text: '',
    author: '',
}



const input = document.getElementById('myinput');
input.onclick = function(e){
    e.preventDefault();
    message.text = document.getElementById('validationTextarea').value;
    message.author = document.getElementById('validationAuthor').value;
    console.log(message);
    fetch('http://192.168.0.200:3000/messages',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message),
    })
    .then(response => console.log(response));
    
    fetch('http://192.168.0.200:3000/messages')
    .then(response => response.json())
    .then((data) => {
        for (let i = 0; i <= 10; i++) {
            let li = document.createElement('li');
            console.log(data[i].author);
            li.textContent = data[i].author;
            ul.append(li);
        }
        
    })
};

setInterval(()=>{
    fetch('http://192.168.0.200:3000/messages')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })
}, 1000)



