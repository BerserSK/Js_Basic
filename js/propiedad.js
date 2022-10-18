const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click', (e)=>{
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      El resultado es ${div.toFixed(2)}</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "60px");
})