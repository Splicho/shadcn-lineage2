document.addEventListener("DOMContentLoaded", function () {
    const socializeLink = document.getElementById("socialize-link");
    const dropdown = document.getElementById("navDropdown");
  
    if (socializeLink && dropdown) {
      socializeLink.addEventListener("mouseover", function () {
        dropdown.classList.add("show");
      });
  
      socializeLink.addEventListener("mouseout", function () {
        dropdown.classList.remove("show");
      });
    } else {
      console.error("Socialize link or dropdown not found.");
    }
  });
  