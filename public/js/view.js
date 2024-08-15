fetch("http://127.0.0.1:8000/api_emp_details").then(data=>data.json()
).then((r)=>{ 
    let tbody = document.getElementById("employee-table-body")
    // console.log(r[0].length)
    let topic = ["name","email","phone","joinDate","dob","salary","address","branch"]
    let topicInc = 0;
    console.log(topic.length)
    console.log(r);
    for(i=0;i<=r.length-1;i++)
    {
        let tr = document.createElement("tr");
        tr.id = r[i]["name"];
        for(j=0;j<topic.length;j++)
        {   let topicdec = topic[j];
            
            let td = document.createElement("td");
            td.className = r[i]["branch"];
            td.innerHTML = r[i][topicdec];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    
    
   

})