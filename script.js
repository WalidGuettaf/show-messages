const messages=document.querySelector("#comments")
const url="https://cors-anywhere.herokuapp.com/https://theccomments.onrender.com"
function getMessages(){
    axios.get(`${url}/comments`)
    .then((res)=>{
        const comments=res.data
        for(const message of comments){
            messages.innerHTML+=`
            <div class="comment-card">
            <div class="info"><i class="fa-solid fa-user"></i> First Name : <span class="user">${message.first_name}</span></div>
            <div class="info"><i class="fa-solid fa-user"></i> Family Name : <span class="user">${message.family_name}</span></div>
            <div class="info"><i class="fa-solid fa-envelope"></i> Email : <span class="user">${message.email}</span></div>
            <div class="info"><i class="fa-solid fa-message"></i> Message : <span class="message">${message.message}</span></div>
        </div>
            `
        }
    })
}
getMessages()