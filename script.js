const rndm=document.querySelector('.rndm')
const rndm1=document.querySelector('.rndm1')
const rndm2=document.querySelector('.rndm2')
const para = document.createElement("h1");
const texxt=document.querySelector('.text')
const btn=document.querySelector('.bttn')
const btun=document.querySelector('#rfrs')

btn.addEventListener('click',()=>{
    rndm.value=Math.floor(Math.random()*10)
   
})
btn.addEventListener('click',()=>{
    rndm1.value=Math.floor(Math.random()*10)
   
})
btn.addEventListener('click',()=>{
    rndm2.value=Math.floor(Math.random()*10)
    
})

btn.addEventListener('click',()=>{
    //rndm2.value=Math.floor(Math.random()*10)
    
    if(rndm2.value==rndm1.value && rndm1.value==rndm.value){
        
        para.innerText = "Jackpot";
        texxt.appendChild(para);
        btn.disabled=true;
    }
    
    
})
btun.addEventListener('click',()=>{
    btn.disabled=false;
    para.innerHTML="";
})


