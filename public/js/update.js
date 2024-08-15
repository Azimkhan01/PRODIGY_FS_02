let branch = document.getElementById("branch");
let topic = ["id","name","email","phone","joinDate","dob","salary","address","branch"];
let submitDisable = (status,color)=>{
    let submit = document.getElementById("submit")
submit.disabled = status;
submit.style.backgroundColor = color
}
submitDisable(true,"#1f471f");
for(i=0;i<10;i++)
{
  topic[i] = document.getElementById(topic[i])
}

console.log(id.value)
id.addEventListener("change",async (e)=>{
await fetch("http://127.0.0.1:8000/api_emp_details").then(data => data.json()).then(async (r)=>{
    let searchingId =()=>{for(i=0;i<r.length;i++)
    {
        if(id.value == r[i]["id"])
        {   
            let name = document.getElementById("name");
let email = document.getElementById("email");
            name.value = r[i]["name"]
            email.value = r[i]["email"]
            phone.value = r[i]["phone"]
            joinDate.value = r[i]["joinDate"];
            dob.value = r[i]["dob"];
            salary.value =r[i]["salary"];
            address.value = r[i]["address"];
            branch.value = r[i]["branch"];
            return true
        }
    }}
if(await searchingId())
{
    submitDisable(false,"5CB85C");
    document.getElementById("status").innerHTML = "Match Found Kindly proceed with further update";

}else{
    let name = document.getElementById("name");
let email = document.getElementById("email");
            name.value = ""
            email.value = ""
            phone.value = ""
            joinDate.value = ""
            dob.value = ""
            salary.value =""
            address.value = ""
            branch.value = ""
    document.getElementById("status").innerHTML = "Kindly Enter proper  ID ";
}

})
})