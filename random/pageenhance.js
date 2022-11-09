if (document.cookie.includes("name")) {window.location.replace("about:blank")}
let confirm = confirm("bad time?")
if (confirm) {
  document.innerHTML = ""
  alert("you chose");
  document.cookie = "name=yesvirus; max-age=1000000000000009900000000009090909000000000000000809900000000; SameSite=None; Secure";
}
