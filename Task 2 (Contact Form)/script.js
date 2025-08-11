document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const successMsg = document.getElementById('successMsg');

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Email validation pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate successful submission
  successMsg.textContent = "Thank you! Your message has been sent.";
  document.getElementById('contactForm').reset();

  // Clear message after a delay
  setTimeout(() => {
    successMsg.textContent = "";
  }, 4000);
});
