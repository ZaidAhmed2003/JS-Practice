const firstName = document.getElementById("fname").textContent;
const lastName = document.getElementById("lname");
const contact = document.getElementById("contact");
const country = document.getElementById("country");
const submitBtn = document.getElementById("submitbtn");
const tbody = document.querySelector("tbody");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateTable();
});

function updateTable() {
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  tr.innerHTML = `
  <td>${firstName + " " + lastName}</td>
  <td>${contact}</td>
  <td>${country}</td>
  `;

  tr.appendChild(td);
  tbody.appendChild(tr);
}
