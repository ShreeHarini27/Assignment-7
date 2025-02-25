function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const message = document.getElementById('message').value;

    // Validation (already handled by 'required' attributes)
    if (!name || !email || !department || !message) {
        alert("Please fill all fields.");
        return false;
    }

    // Display result in a table format
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Submitted Details</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Message</th>
            </tr>
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${department}</td>
                <td>${message}</td>
            </tr>
        </table>
    `;
    
    return true; // Form submitted successfully
}