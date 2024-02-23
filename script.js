let notesContainer = document.querySelector(".notes-container");
let btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


// function showNotes(){
//     notesContainer.innerHTML=localStorage.getItem("notes");
// }

// showNotes();
// function updateStorage(){
//     localStorage.setItem("notes",notesContainer.innerHTML);
// }

btn.addEventListener("click",function(){
    let parg = document.createElement("p");
    let im=document.createElement("img");
    parg.classList.add("input-box");
    parg.setAttribute("contenteditable","true");
    im.src="img/delete.png";
    parg.appendChild(im);
    notesContainer.appendChild(parg);
    im.onclick=function(){
        parg.style.display="none";
    }
    
})
// updateStorage();
