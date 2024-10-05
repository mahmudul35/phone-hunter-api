const loadAllPhones = () => {
  document.getElementById("spinner").classList.add("hidden");
  console.log("3 seconf is gone");
};

const handleSearch = () => {
  document.getElementById("spinner").classList.remove("hidden");
  document.getElementById("spinner").classList.add("block");
  setTimeout(loadAllPhones, 3000);
};
