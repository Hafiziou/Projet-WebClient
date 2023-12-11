document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Extract form data
      const name = document.getElementById('registration-name').value;
      const email = document.getElementById('registration-email').value;
      const password = document.getElementById('registration-password').value;
      const course = document.getElementById('course-selection').value;

      // Create a text string with form data
      const formData = `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nCourse: ${course}\n\n`;

      // Create a data URI
      const dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(formData);

      // Create a link element
      const link = document.createElement('a');
      link.href = dataUri;
      link.download = 'registrationData.txt';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Show a popup message for successful registration
      alert('Registration successful');

      // Optionally, you can clear the form fields
      form.reset();
    });
});

function submitContactForm() {
    const form = document.getElementById('contactForm');

    // Extract form data
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // Create a text string with form data
    const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

    const dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(formData);

    // Create a link element
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = 'contactData.txt';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
    form.reset();
    // Display the form data in a popup message
    alert('Form submitted successfully!\n\n' );

    // Optionally, you can clear the form fields
    
}