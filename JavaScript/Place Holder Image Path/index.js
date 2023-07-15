const select=document.querySelector('select');
const inputAll=document.querySelectorAll('input');
let myimg=document.querySelector('img');
let tectArea=document.querySelector('textarea');

let urlObj={};

function removehash(str){
    return str.replace("#","");
}

function  imagePath(){
    
    urlObj.value=select.value;
    urlObj.text=inputAll[0].value;
    urlObj.bgClr=removehash(inputAll[1].value);
    urlObj.txtClr=removehash(inputAll[2].value);

    test=inputAll[0].value;
    urlPath='https://placehold.co/'+select.value+'/'+urlObj.bgClr+'/'+urlObj.txtClr+'/'+'?text='+test;
    myimg.src=urlPath;
    tectArea.value=urlPath;

}
select.addEventListener('change',imagePath);

inputAll[0].addEventListener('change',imagePath);
inputAll[1].addEventListener('change',imagePath);
inputAll[2].addEventListener('change',imagePath);
