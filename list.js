alert('楽しもうね！');
const form= document.querySelector('#listform');
const btn=document.querySelector('#btn1');
const input1=document.querySelector('#person');
const list=document.querySelector('#reallist1');
const btn2 =document.querySelector('#btn2');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let newLi1=document.createElement('li');
    const personName=input1.value;
    newLi1.innerText=personName;
    list.append(newLi1);

});
list.addEventListener('click',function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});
btn2.addEventListener("click", function(e){
    document.body.style.backgroundColor = "red";
});