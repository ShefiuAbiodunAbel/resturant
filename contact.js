let passWords = document.querySelector('#passWord');
let checkPsw = document.querySelector('#checkPassword');
checkPsw.addEventListener('change' , function(){
    let getAttribut = passWords.getAttribute('type');
    if(getAttribut === 'password'){
        passWords.setAttribute('type' , 'text')
    }
    else{
        passWords.setAttribute('type' , 'password')
    }
});

// let enterPassW = document.querySelector('#password');
// let checkPassW = document.querySelector('#CheckPassword');
// checkPassW.addEventListener('change' , function(){
//     let getAttribute = enterPassW.getAttribute('type');
//     if(getAttribute === 'password'){
//         enterPassW.setAttribute('type', 'text')
//     }
//     else{
//         enterPassW.setAttribute('type', 'password')
//     }
// });
