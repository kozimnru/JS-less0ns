let input=document.querySelector(".input");
let btnev=document.querySelector(".btn");
let result=document.querySelector(".result");
let form=document.querySelector(".form");

form.addEventListener('submit',event =>{
event.preventDefault();
if (input.value%3===0){
    result.textContent="FIZZ"
}else{
    if (input.value%5===0){
        result.textContent="BUZZ"
    }else{
        if (input.value%15===0){
            result.textContent="FIZZBUZZ"
        }else {
            result.textContent="Siz noto'g'ri son kiritdingiz!!!"
        }
    }
}

})