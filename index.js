let ham = document.getElementById('hamburger');
  let expend=document.getElementById('expend');
  let expendul=document.getElementById('expul');
 






  document.addEventListener('DOMContentLoaded', function() {
    var ham = document.getElementById('hamburger');
  
    function toggleopacity(){
        if(expend.style.opacity===1){
            expend.style.opacity=0;
        }
  
        else{
            expend.style.opacity=1;
        }
  
    }
  
  function toggleicon(){
  if(ham.classList.contains('open')){
      ham.classList.remove('open');
      ham.classList.add('cross');
  }
  
  else{
      ham.classList.remove('cross');
      ham.classList.add('open');
  }
  }
  
  
    function togglevisibility(){
        if(expend.style.visibility==='hidden'){
            expend.style.visibility='visible';
        }
  
        else{
            expend.style.visibility='hidden';
        }
    }
  
    ham.addEventListener('click', ()=>{
   
        togglevisibility();
        toggleopacity();
        toggleicon();
   })
   
  });