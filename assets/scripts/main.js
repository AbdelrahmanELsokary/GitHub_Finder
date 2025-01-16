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
let userInformation = document.getElementById("user_info");
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
        userData = `
        <div class="user">
        <img src="${user.avatar_url}">
        <h1>${user.login}</h1>
          <a href="${user.html_url}" target="_blank" style="display: block;" >Github Account</a>
          <span class="bio">${user.bio}</span>
          <div class="follow"><span>Followers: ${user.followers}</span>
          <span>Following: ${user.following}</span>
          </div>
          <h3>${user.location}</h3>
        </div>
          <ol id="repos_data" class="repos_data"></ol>
        `;
        fetch(`https://api.github.com/users/${inputUser.value}/repos`)
          .then((res) => res.json())
          .then((repostories) => {
            let displayRepos = "";
            for (let i = 0; i < repostories.length; i++) {
              displayRepos += `
              <li>
              <span>${repostories[i].name}</span>
                <br> 
                <a href="${repostories[i].homepage}" target="_blank">View Project</a> 
                <a href="${repostories[i].html_url}" target="_blank">View Code</a></li>
              `;
              document.getElementById("repos_data").innerHTML = displayRepos;
            }
          });
        userInformation.innerHTML = userData;
      });
  }
}
btnUser.onclick = () => {
  getData();
};
