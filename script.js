const apiEP = "https://randomuser.me/api?results=6";

let userList = [];

// slide to go to app screen
const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 70) {
    label.textContent = "";
    dispAppScreen();
  } else {
    label.textContent = "Slide To Unlock";
  }
});

const dispAppScreen = () => {
    //hide home screen
    document.querySelector(".homeScreen").remove();
  
    // show app screen
    document.querySelector(".appScreen").style.display = "block";
  };
  
  const dispContactScreen = () => {
    //hide app screen
    document.querySelector(".appScreen").remove();
  
    // show contact list screen
    document.querySelector(".contactListScreen").style.display = "block";
  
    fetchUsers(apiEP);
  };

  const fetchUsers = async (url) => {
    //fetch the user
    // promise method

    //async await
    const response = await fetch(url);
    const data = await response.json();
    userList = data.results;
  
    //   hide the spinner
    document.querySelector(".showSpinner").style.display = "none";
    // show the user
    displayContactlist(userList);
  };