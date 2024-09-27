const inptBox = document.getElementById("input-box"); // Get the input box element
const listContainer = document.getElementById("list-container"); // Get the list container element

function addTask() {
    if (inptBox.value === '') { // Check if the input box is empty
        alert("You must write something!"); // Alert the user if it's empty
    } else {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inptBox.value; // Set the text of the list item to the input value
        listContainer.appendChild(li); // Append the new list item to the list container
        
        let span = document.createElement("span"); // Create a new span element for the delete icon
        span.innerHTML = "\u00d7"; // Set the span content to "×"
        li.appendChild(span); // Append the span to the list item
    }
    inptBox.value = ""; // Clear the input box
    saveData(); // Save the current tasks to local storage
}

listContainer.addEventListener("click", function(e) { // Add click event listener to the list container
    if (e.target.tagName === "LI") { // Check if the clicked element is a list item
        e.target.classList.toggle("checked"); // Toggle the "checked" class for the list item
        saveData(); // Save the updated tasks to local storage
    } else if (e.target.tagName === "SPAN") { // Check if the clicked element is a span
        e.target.parentElement.remove(); // Remove the parent list item
        saveData(); // Save the updated tasks to local storage
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the list items to local storage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Load tasks from local storage
}

showTask(); // Call showTask to display existing tasks on page load
