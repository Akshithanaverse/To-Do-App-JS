let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function()
{
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    delbtn.addEventListener("click",function()
    {
        let par=delbtn.parentElement;
        par.remove();
        
    });
    item.appendChild(delbtn);
    inp.value="";
});
