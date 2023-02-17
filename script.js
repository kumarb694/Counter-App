function increment()
{
    let incre=document.getElementById('num');
    let n1=Number(incre.innerHTML);
    // console.log(n1+1);
    incre.innerHTML=n1+1;
}
function decrement()
{
    let decre=document.getElementById('num');
    let n2=Number(decre.innerHTML);
    // console.log(n2-1);
    decre.innerHTML=n2-1;
}
function reset()
{
    let zero=document.getElementById('num');
    let n3=0;
    zero.innerHTML=n3;
}
let v1=document.getElementById('ib');
v1.addEventListener('click', increment);
let v2=document.getElementById('db');
v2.addEventListener('click', decrement);
let v3=document.getElementById('rb');
v3.addEventListener('click', reset);
