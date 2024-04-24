const h2=document.querySelector('h2')
function tossbtn(index){
var x=Math.ceil(Math.random()*2)
console.log(x)
if(x === 1){
    console.log('you won toss')
    h2.innerHTML='you won toss'
}else{
    console.log('you loss toss');
    h2.innerHTML='you loss toss'
}
     console.log(index)
}