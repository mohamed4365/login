let lock = document.querySelector("[name= lock-closed-outline]");
let eye = document.querySelector(".eye");
let pass = document.querySelector(".pass");
pass.onkeyup = function () {
  if (pass.value === "") {
    lock.style.display = "block";
    eye.style.display = "none";
  } else {
    lock.style.display = "none";
    eye.style.display = "block";
  }
}
  eye.onclick = function () {
    if (pass.type === "password") {
      pass.type = "text";
      eye.name = "eye-off-outline";
    }else {
      pass.type = "password";
      eye.name = "eye-outline";
    }
  }
