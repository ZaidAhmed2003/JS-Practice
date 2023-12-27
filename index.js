const submitBtn = document.getElementById("submitbtn");
const tbody = document.querySelector("tbody");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getValue();
});

function getValue() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const contact = document.getElementById("contact").value;
  const country = document.getElementById("country").value;

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
