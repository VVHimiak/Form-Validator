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

//Create function checkRequired
function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${input.dataset.name} must contains minimum ${min} characters`[0].toUpperCase() + `${input.dataset.name} must contains minimum ${min} letters`.slice(1));
  } else if(input.value.length > max){
    showError(input, `${input.dataset.name} must contains maximum ${max} characters`[0].toUpperCase() + `${input.dataset.name} must contains maximum ${max} letters`.slice(1));
  } else{
    showSuccess(input)
  }
}

function checkPassword(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match');
  }
}

//EventListeners
UIform.addEventListener('submit', function(e){
  
checkRequiredFields([UIuserNameInput, UIuserEmailInput,UIuserPasswordInput,UIuserPasswordCheckInput]);
checkLength(UIuserNameInput, 3, 15);
checkLength(UIuserPasswordInput, 6, 20);
checkPassword(UIuserPasswordInput, UIuserPasswordCheckInput);

  e.preventDefault();
})
