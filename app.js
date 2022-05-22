const featuresAElement = document.querySelector(".features-nav");
const companyAElement = document.querySelector(".company-nav");
const featuresDropdownMenu = document.querySelector(".dropdown-features");
const companyDropdownMenu = document.querySelector(".dropdown-company");

featuresAElement.addEventListener("click", () => {
  if (featuresDropdownMenu.style.display === "none") {
    featuresDropdownMenu.style.height = "auto";
    featuresDropdownMenu.style.display = "inline-block";
  } else {
    featuresDropdownMenu.style.height = "0";
    featuresDropdownMenu.style.display = "none";
  }
});

companyAElement.addEventListener("click", () => {
  if (companyDropdownMenu.style.display === "none") {
    companyDropdownMenu.style.height = "auto";
    companyDropdownMenu.style.display = "inline-block";
  } else {
    companyDropdownMenu.style.height = "0";
    companyDropdownMenu.style.display = "none";
  }
});
