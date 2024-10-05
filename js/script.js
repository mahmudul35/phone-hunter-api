const handleSearch = () => {
  document.getElementById("search").classList.add("hidden");
};

const loadAllData = () => {
  setTimeout(() => {
    handleSearch();
  }, 3000);
};
