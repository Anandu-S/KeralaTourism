
  let email=document.getElementById("email");
  let phone=document.getElementById("phone");
  let pwd=document.getElementById("pwd");
  let error=document.getElementById("error");
  let error2=document.getElementById("error2");
  let error3=document.getElementById("error3");

  function emailvalidate(){
    let regexp= /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})$/
    if(regexp.test(email.value)){
        error.innerHTML = "VALID";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML = "INVALID FORMAT";
        error.style.color="red";
        return false;
    }
  }

  function phonevalidate(){
    let regexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(regexp.test(phone.value)){
        error2.innerHTML = "VALID";
        error2.style.color="green";
        return true;
    }
    else{
        error2.innerHTML = "INVALID FORMAT";
        error2.style.color="red";
        return false;
    }
  }

  function pwdvalidate(){
    let regexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if(regexp.test(pwd.value)){
        error3.innerHTML = "VALID";
        error3.style.color="green";
        return true;
    }
    else{
        error3.innerHTML = "password must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        error3.style.color="red";
        return false;
    }
  }