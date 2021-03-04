//Define UI vars
const UIform = document.getElementById('form');
const UIuserNameInput = document.getElementById('username');
const UIuserEmailInput = document.getElementById('useremail');
const UIuserPasswordInput = document.getElementById('userpassword');
const UIuserPasswordCheckInput = document.getElementById('userpasswordcheck');

//ShowInputErrorMessage
function showError(input, message){
input.parentElement.className = ('form-control error');
input.nextElementSibling.innerText = message;
}
//ShowInputSuccesStatus
function showSuccess(input){
  input.parentElement.className = ('form-control success');
}
//validate email
function isValidEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequiredFields(inputArr){
  inputArr.forEach(element => {
    if(element.value.trim() === ''){
      showError(element, `${element.dataset.name} is required`[0].toUpperCase() + `${element.dataset.name} is required`.slice(1))
    }else{
      showSuccess(element);
    }
  });
}


//EventListeners
UIform.addEventListener('submit', function(e){
  //user name validation
  // if(UIuserNameInput.value === ''){
  //   showError(UIuserNameInput, 'UserName is required');
  // }else{
  //  showSuccess(UIuserNameInput)
  // }
  // //user email validation
  // if(!isValidEmail(UIuserEmailInput.value)){
  //   showError(UIuserEmailInput, 'UserEmail is required');
  // }else{
  //  showSuccess(UIuserEmailInput)
  // }
  // //user password validation
  // if(UIuserPasswordInput.value === ''){
  //   showError(UIuserPasswordInput, 'UserPassword is required');
  // }else{
  //  showSuccess(UIuserPasswordInput)
  // }
  // //user password check validation
  // if(UIuserPasswordCheckInput.value === ''){
  //   showError(UIuserPasswordCheckInput, 'UserPassword check is required');
  // }else{
  //  showSuccess(UIuserPasswordCheckInput)
  // }
checkRequiredFields([UIuserNameInput, UIuserEmailInput,UIuserPasswordInput,UIuserPasswordCheckInput]);

  e.preventDefault();
})
