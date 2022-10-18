const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click', (e)=>{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);    
        let sum=num1+num2;
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        El resultado es ${sum.toFixed(2)}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "60px");
      d.style.setProperty('color', "red")
    
})  