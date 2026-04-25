const bnts=document.querySelectorAll("button")

for (let btn of bnts){
    btn.addEventListener("click",()=>{
        console.log("button was clicked")
    })

}