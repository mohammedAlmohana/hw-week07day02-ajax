let baseURL="https://api.imgflip.com/get_memes"
let res= {}
function memes(){
    axios.get(baseURL).then(function(result){
     res = result.data
     console.log(res)
     res.data.memes.forEach(element => {
         document.getElementById("div1").innerHTML += `
         <div> ${element.name}</div> <img src= ${element.url} hight= ${element.hight} width= ${element.width}> `
         
     })
             
            })
}


