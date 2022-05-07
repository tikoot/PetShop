let login = document.querySelector('.header .login_form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   login.classList.remove('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
     
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}