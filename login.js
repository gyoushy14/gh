// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

class login{
  constructor(fname,lname,email,country,city){
    this.fname=fname
    this.lname=lname
    this.email=email
    this.country=country
    this.city=city
  }
}

document.getElementById("submit_btn").addEventListener("click",(e)=>{
  user=new login(document.getElementById("validationCustom01").value , document.getElementById("validationCustom02").value , document.getElementById("validationCustomUsername").value , document.getElementById("validationCustom03").value ,  document.getElementById("validationCustom04").value)
  arr=[]
  arr.push(user);
  localStorage.users = JSON.stringify(arr);
  // e.preventDefault()
})