  // hamburger

  let ham = document.getElementById('hamburger');
  let expend=document.getElementById('expend');
  let expendul=document.getElementById('expul');
  function toggleopacity(){
      if(expend.style.opacity===1){
          expend.style.opacity=0;
      }

      else{
          expend.style.opacity=1;
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
       toggleopacity();
       togglevisibility();
  })
