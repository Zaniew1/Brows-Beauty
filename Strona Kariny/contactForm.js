const button = document.getElementById('button');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'success'){

            alert("Wiadomość została wysłana");
            name.value = '';
            email.value = '';
            message.value = '';
        }
        else{
           alert('Ups. Coś poszło nie tak, spróbuj ponownie!!');
        }
    }
    xhr.send(JSON.stringify(formData));

})




















