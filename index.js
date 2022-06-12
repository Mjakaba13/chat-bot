let sector = document.getElementById("sector");
let searchInput = document.getElementById("sear");
let messageInput = document.getElementById("message-input");
// let messageValue = messageInput.value;
let sendButton = document.getElementById("send");
let textbody = document.getElementById("textbody");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  textbody.innerHTML += `
  <p id="value">${document.getElementById("message-input").value}</p>
  `;
  if (document.getElementById("message-input").value.includes("Hi")) {
    textbody.innerHTML += `
      <p id="reply">Hi Madam, Welcome back.</p>
      `;
  }
  document.getElementById("message-input").value = null;
});
