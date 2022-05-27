const featuresAElement = document.querySelector(".features-nav");
const companyAElement = document.querySelector(".company-nav");
const featuresDropdownMenu = document.querySelector(".dropdown-features");
const companyDropdownMenu = document.querySelector(".dropdown-company");

function collapseMenu(item) {
  if (item.style.display === "none") {
    item.style.height = "auto";
    item.style.display = "inline-block";
  } else {
    item.style.height = "0";
    item.style.display = "none";
  }
}

featuresAElement.addEventListener("click", () => {
  collapseMenu(featuresDropdownMenu);
});

companyAElement.addEventListener("click", () => {
  collapseMenu(companyDropdownMenu);
});
