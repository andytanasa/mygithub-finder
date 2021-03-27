// init github

const github = new Github();
const ui = new Ui();

//search input
const searchUser = document.querySelector("#searchUser");

searchUser.addEventListener("keyup", function (e) {
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github
      .getUser(userText)
      .then((data) => {
        console.log(data);
        if (data.profile.message === "Not Found") {
          //Show alert that the user is not found
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          //show the profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    //clear the profile
    ui.clearProfile();
  }
});
