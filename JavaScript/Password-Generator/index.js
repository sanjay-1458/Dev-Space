let slider=document.getElementById('range');
let sliderValue=document.getElementById('rangeValue');
let passBox=document.getElementById('passBox');
let lowerCase=document.getElementById('lowercase');
let upperCase=document.getElementById('uppercase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let button=document.getElementById('button');
let copyIcon=document.getElementById('copyIcon');




sliderValue.textContent=slider.value;
slider.addEventListener('input',()=>{
    sliderValue.textContent=slider.value;
})
let lowerCases="abcdefghijklmnopqrstuvwxyz";
let upperCases="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers_="0123456789";
let symbols_="@#$%^&*";
const generatePassword=()=>{
    let password="";
    let allChars="";

    allChars+=lowerCase.checked?lowerCases:"";
    allChars+=upperCase.checked?upperCases:"";
    allChars+=numbers.checked?numbers_:"";
    allChars+=symbols.checked?symbols_:"";

    for(let i=0;i<slider.value;++i){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    return allChars.length==0?"":password;
}
button.addEventListener('click',()=>{
    passBox.value=generatePassword();
});
copyIcon.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        
        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="Password Copied";
        },2000);
    }
});
