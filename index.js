function change(){
  var btn = document.getElementById("button1");
  var btn1 = document.getElementById("peoplealsobtn4");

                if (btn.value == "follow") {
                    btn.value = "following";
                    btn.innerHTML = "☑️ Following";
                }
                else {
                    btn.value = "follow";
                    btn.innerHTML = "➕ Follow";
                }
                if (btn1.value == "follow") {
                    btn1.value = "following";
                    btn1.innerHTML = "☑️ Following";
                }
                else {
                    btn1.value = "follow";
                    btn1.innerHTML = "➕ Follow";
                }
}

function change1(){
  var btn = document.getElementById("peoplealsobtn1");

                if (btn.value == "follow") {
                    btn.value = "following";
                    btn.innerHTML = "☑️ Following";
                }
                else {
                    btn.value = "follow";
                    btn.innerHTML = "➕ Follow";
                }
}
function change2(){
  var btn = document.getElementById("peoplealsobtn2");

                if (btn.value == "follow") {
                    btn.value = "following";
                    btn.innerHTML = "☑️ Following";
                }
                else {
                    btn.value = "follow";
                    btn.innerHTML = "➕ Follow";
                }
}
function change3(){
  var btn = document.getElementById("peoplealsobtn3");

                if (btn.value == "follow") {
                    btn.value = "following";
                    btn.innerHTML = "☑️ Following";
                }
                else {
                    btn.value = "follow";
                    btn.innerHTML = "➕ Follow";
                }
}
function change4(){
  var btn = document.getElementById("peoplealsobtn4");

                if (btn.value == "follow") {
                    btn.value = "following";
                    btn.innerHTML = "☑️ Following";
                }
                else {
                    btn.value = "follow";
                    btn.innerHTML = "➕ Follow";
                }
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "...see more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "...see less";
    moreText.style.display = "inline";
  }
}
function connect(){
  var btn = document.getElementById("profileBtn");

                if (btn.value == "connect") {
                    btn.value = "requested";
                    btn.innerHTML = "☑️ Requested";
                }
                else {
                    btn.value = "connect";
                    btn.innerHTML = "➕ Connect";
                }
}
function connect1(){
  var btn = document.getElementById("profileBtn1");

                if (btn.value == "connect") {
                    btn.value = "requested";
                    btn.innerHTML = "☑️ Requested";
                }
                else {
                    btn.value = "connect";
                    btn.innerHTML = "➕ Connect";
                }
}
