function getAndSetLetterValues() {
  const nameInput = document.getElementById("nameInput").value;
  const messageInput = document.getElementById("messageInput").value;

  document.querySelector("span#name").innerText = nameInput;
  document.querySelector("span#response").innerText = messageInput;
}

onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetLetterValues();
    document.querySelector("div#message").removeAttribute("class");
    document.querySelector("div#letter").removeAttribute("class");
  };
};