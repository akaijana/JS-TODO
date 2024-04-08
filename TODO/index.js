const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


const btn = document.querySelector("button");


const addTask = () => {

    btn.addEventListener("click", (e) => {
        if (inputBox.value === "") {
            alert("Please enter a task");
        }
        else {
            let li = document.createElement("li"); // create an <li> element
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li); // append the new <li> at the end of <ul>
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"
            li.appendChild(span); // append the <span> to the <li>
            inputBox.value = "";
        }
        saveData();

    });
}
addTask();


listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});



/* save data to the browser's localStorage */
const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}


/* load data from the localStorage */
const loadData = () => {
    let data = localStorage.getItem("data");
    listContainer.innerHTML = data;
}
loadData();









