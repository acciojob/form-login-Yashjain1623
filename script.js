function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    // Create the output string with first and last names
    const output = `${firstName} ${lastName}`;

    // Show an alert with the formatted output
    alert(output);
}
