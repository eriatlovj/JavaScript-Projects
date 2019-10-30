function validateForm() {
    var f = document.forms["submit_Form"]["firstName"].value;
    if (f == "") {
      alert("Required to submit name");
      return false;
    }