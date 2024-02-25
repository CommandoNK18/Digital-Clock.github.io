
setInterval(()=>{
let hour=document.querySelector(".hours");
let minute=document.querySelector(".minutes");
let second=document.querySelector(".seconds");
let d=new Date();
hour.innerText=d.getHours();
if(hour>"12"){
  hour.innerText=(d.getHours()-12);
}
minute.innerText=d.getMinutes();
second.innerText=d.getSeconds();
},1000);
