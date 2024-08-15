let id = document.getElementById("id")
let searchbtn = document.getElementById("search")
searchbtn.disabled = true
// searchbtn.style.backgroundColor = '#002b80'
let submit = document.getElementById("submit")
submit.disabled = true
submit.style.backgroundColor = '#990000'
document.getElementById("id").addEventListener("change",(e)=>{
if(id.value != '')
{
    searchbtn.disabled = false
    // searchbtn.style.backgroundColor = 'rgb(50, 50, 187)' 
}
})


searchbtn.addEventListener("click",async()=>{
    
    await fetch("http://127.0.0.1:8000/api_emp_details").then(data => data.json()).then((r)=>{
        console.log(r.length)
      for(i=0;i<r.length;i++)
      {  
        if(r[i]["id"] == id.value)
        {
            
            let status=document.getElementById("status")
            status.innerHTML = "Alert Data is Uncoverable !"
            submit.disabled = false
submit.style.backgroundColor = '#ff6666'
            
        }
        console.log(r[i]["id"])
      }
    })
});