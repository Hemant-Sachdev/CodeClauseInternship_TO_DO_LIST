const inpBox = document.getElementById("input_box");
const licontainer = document.getElementById("listid");

function addnewtask(){
    if (inpBox.value === ''){
        alert("Task section cannot be empty")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;
        licontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10060";
        li.appendChild(span);
    }
    inpBox.value = '';
    savingtask();
}

licontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savingtask();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savingtask();
    }
}
,false);

function savingtask(){
    localStorage.setItem("data1", licontainer.innerHTML);
}

function displaytask(){
    licontainer.innerHTML = localStorage.getItem("data1");
}

displaytask();