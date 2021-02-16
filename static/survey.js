var checkbox = document.getElementById("form-has-a-suggestion");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.getElementById("form-textarea-suggestion").style.visibility = "visible";
  } else {
    console.log("Checkbox is not checked..");
    document.getElementById("form-textarea-suggestion").style.visibility = "hidden";
  }
});