document.addEventListener('DOMContentLoaded', ()=>{
   let pics = document.querySelector('.profile-pics')
   let dataFile = localStorage.getItem('Pics')
   let file = dataFile.replace('http', 'https')
   pics.src = file

   let Username = document.querySelector('.name')
   Username.textContent = localStorage.getItem('Name');
   let grad = document.querySelector('.grad')
   grad.textContent = localStorage.getItem('Name')

   let email = document.querySelector('.aside')
   email.textContent = localStorage.getItem('email')

   let gitHub = document.querySelector('.gitHub')
   gitHub.textContent = localStorage.getItem('gitHub')
})