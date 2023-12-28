let submit=document.getElementById("submit")
let name=document.getElementById("content1")
let age=document.getElementById("content2")
let result=JSON.parse(localStorage.getItem("ResultData"))||[]



function storeData(){
    let data={}
   data.name=name.value
   data.age=age.value
   result.push(data)
   localStorage.setItem("ResultData",JSON.stringify(result))
   console.log(result)
  }
  submit.addEventListener("click",function(e){
   e.preventDefault()
    storeData()
})
 
  let showData=document.getElementById("showData")
 
 
 
 



  showData.addEventListener("click",function(){
   
     let tbody=document.getElementById("tbody")
    
    // 
    // tbody.innerHTML=""
      let ResultData=JSON.parse(localStorage.getItem("ResultData"))
    
      ResultData.forEach((e) => {
        let tr=document.createElement("tr")
        let tr1=document.createElement("td")
        let tr2=document.createElement("td")
           tr1.textContent=e.name
           tr2.textContent=e.age
           tr.append(tr1,tr2)
           tbody.append(tr)
          
          
      });
     
     
     
     })

  








