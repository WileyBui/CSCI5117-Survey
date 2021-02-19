var checkbox = document.getElementById("display-database");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById("survey-database").style.display = "block";
  } else {
    document.getElementById("survey-database").style.display = "none";
  }
});