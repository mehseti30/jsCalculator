const navIcon = document.querySelector(".nav-ico");
const menu = document.querySelector(".box-right");
const langBtn = document.querySelector(".box-right ul > li:last-child");
const langMenu = document.querySelector(".lang");



navIcon.addEventListener("click", function() {
    menu.classList.toggle("active");
});


langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    langMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target)) {
        langMenu.classList.remove("active");
    }
});





//Chat start
const closeBox=document.querySelector("#chat .close")
const chat=document.querySelector("#chat")
const miniBox=document.querySelector(".mini-chat")
const chatText=document.querySelector("#chat footer input")
const main=document.querySelector("#chat main")


closeBox.addEventListener("click",function(){
    chat.classList.add("d-none")
})

miniBox.addEventListener("click",function(){
    chat.classList.remove("d-none")
})

chatText.addEventListener("keyup",function(a){
    if(a.keyCode === 13){
        // console.log(a.target.value);
        if(chatText.value.trim()!==""){
            if( chatText.value[0].toUpperCase()==chatText.value[0]){
                addChat("support")
            }
            else{
                addChat("user")

            }

            }
            chatText.value=""
        
    }

})

function addChat(messageName){
    let dt=new Date()
    main.insertAdjacentHTML("beforeEnd",
        `
        <div class="message ${messageName}">
    ${chatText.value}
    <p class="time">${dt.getHours()}:${dt.getMinutes()}</p>
</div>`
        
        
    )

        main.scrollTop=main.scrollHeight
    
    
}

