var checkbox = document.getElementById("form-has-a-suggestion");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById("form-textarea-suggestion").style.visibility = "visible";
  } else {
    document.getElementById("form-textarea-suggestion").style.visibility = "hidden";
  }
});