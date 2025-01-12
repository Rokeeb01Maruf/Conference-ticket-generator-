let fileData = document.querySelector('#files');
let submitBtn = document.querySelector('#button button')

let imageUrl = ''

let file = fileData.files[0];

if(file){
    imageUrl = URL.createObjectURL(file)
    localStorage.setItem('Pics', imageUrl)
    let preview = document.querySelector('#file img')
    preview.src = imageUrl
    preview.style.padding = 0;
}else {

}

submitBtn.addEventListener('click', (e)=>{
    if(fileData.files.length === 0){ 
        e.preventDefault()
        alert('You have not uploaded any image')
    }

    let fullName = document.querySelector('#name #text').value
    if (fullName == ''){
        e.preventDefault()
        alert('Pls enter your full name')
    }else{
        localStorage.setItem('Name', fullName)
    }

    let email = document.querySelector('#email #text').value
    if (email == ''){
        e.preventDefault()
        alert('Pls input your email address')
    }else{
        localStorage.setItem('email', email)
    }

    let gitHub = document.querySelector('#gitHub #text').value
    if (gitHub == ''){
        e.preventDefault()
        alert('Pls enter your gitHub')
    }else{
        localStorage.setItem('gitHub', gitHub)
    }
})

if (file){
    
}