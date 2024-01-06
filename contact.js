function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }
  
    // You can add additional validation logic here, for example, email format validation.
  
    alert("Form submitted successfully!");
    document.getElementById('contactForm').reset();
  }