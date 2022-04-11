
let form = document.querySelector('#form')
let text = document.querySelector("#mensaje")

form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    if(text.value.length === 0) {
        alert('Aún no me has escrito lo que necesitas');
        text.focus();
        return;
    }
    let string = "";
    for(let i = 0; i< text.value.length; i++){
        let char = text.value[i];
        if(char === " "){
            char = "%20";
        }
        string = string + char;
    } 

    window.location = "https://api.whatsapp.com/send?phone=593981673685&text="+string;
})

