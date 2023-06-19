const submitButton = document.getElementById("submit");
const noRecordsSpan = document.getElementById("no-records-found");
const bodyDiv = document.getElementById("body");

setInterval(function () {
  const currentDate = new Date();
  const datePart = String(currentDate);
  let part = datePart.slice(0, 25);
  document.getElementById("datetime").innerHTML = part;
  currentDate.innerText =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
}, 1000);
submitButton.addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  if (name) {
    const todoDiv = document.createElement("div");
    const labelTag = document.createElement("p");

    todoDiv.classList.add("st");

    // This will hide the content by using none
    noRecordsSpan.style.display = "none";
    document.getElementById("nameInput").style.color = "#f7e2df";

    labelTag.innerHTML = name; // Used to set HTML for the label of TODO
    todoDiv.append(labelTag);
    bodyDiv.append(todoDiv);

    // Create the button wrapper
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn2");
    deleteButton.innerHTML = `
      <svg
        id="submit3"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        radius=20000%
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-trash"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    `;

    // Create the check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("btn");
    checkButton.innerHTML = `
      <svg
        id="submit4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-check"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    // Append the buttons to the button wrapper in the desired order
    buttonWrapper.appendChild(checkButton);
    buttonWrapper.appendChild(deleteButton);

    // Append the button wrapper to the todoDiv
    todoDiv.appendChild(buttonWrapper);

    // Add event listener to the delete button
    deleteButton.addEventListener("click", function () {
      // Perform delete operation here
      // For example, remove the todoDiv from the DOM
      todoDiv.remove();
      checkNoRecords();
    });

    // Add event listener to the check button
    checkButton.addEventListener("click", function () {
      // Add or remove the 'strikethrough' class to the labelTag
      labelTag.classList.toggle("strikethrough");
    });

    checkNoRecords();
  } else {
    alert("Oops! Please enter a task.");
  }
});

function checkNoRecords() {
  const todoDivs = document.querySelectorAll(".st");
  if (todoDivs.length === 0) {
    noRecordsSpan.style.display = "block";
  } else {
    noRecordsSpan.style.display = "none";
  }
}
