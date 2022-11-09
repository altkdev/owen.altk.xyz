$(document).ready(function() {
  if (document.cookie.includes("yesvirus")) {
    window.location.replace("about:blank")
  }else{
    if (confirm("bad time?")) {
      document.innerHTML = ""
      alert("you chose");
      document.cookie = "yesvirus=true; max-age=1000000000000009900000000009090909000000000000000809900000000; SameSite=None; Secure";
    }
  }
});
