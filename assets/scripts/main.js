let them = document.getElementById("them");
them.onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    them.src = "assets/icons/dark.webp";
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    them.src = "assets/icons/light.webp";
  }
};

let btnUser = document.getElementById("btn_user");
let inputUser = document.getElementById("input_user");

function getData() {
  let userData = "";
  if (inputUser.value === "") {
    inputUser.style.border = "1px solid red";
    btnUser.style.backgroundColor = "red";
    document.getElementById("span").innerHTML = "Enter a Valid Username";
    span.style.color = "red";
  } else {
    fetch(`https://api.github.com/users/${inputUser.value}`)
      .then((res) => res.json())
      .then((user) => {
        document.getElementById("span").style.display = "none";
        console.log(user.name);
        userData = `
        <div class="user">
        <img src="${user.avatar_url}">
        <h1>${user.login}</h1>
        </div>`;
        document.getElementById("user_info").innerHTML = userData;
      });
  }
}
btnUser.onclick = () => {
  getData();
};
