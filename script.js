const submitForm = document.querySelector(".myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
const name = document.querySelector("#name");
const email = document.querySelector("#email");
function submitForm() {
  document.querySelector(".myForm").Submit;
if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } 
else {
// perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(`This form has a name of ${name.value} and email of ${email.value}`
    );
    name.value = "";
    email.value = "";
  }
}
})
//email validation
function validation(){
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  if( name ==='' || email ===''){
  alert("Please fill all fields...!!!!!!");
  console.log(false);
  }
  else if(!(email).match(emailReg)){
  alert("Invalid Email...!!!!!!");
  console.log(false);
  }
  else{
  alert("This form has been successfully submitted!");
  }
}
