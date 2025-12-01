const header = document.querySelector("header ul")




function init(){

const user = JSON.parse(sessionStorage.getItem("user"))


if(user){

header.innerHTML += `

<li> Usuário: ${user.name}</li>
<li> <button id ="logout">Sair</button></li>

`    


return
}


header.innerHTML += `

<li>
    <a href="./pages/login.html">Login</a>
</li>



`


}

 init()