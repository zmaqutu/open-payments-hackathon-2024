function AddUserForm() {
    const handleFormSubmit = async () => {
        try {
            // Send a request to the server to trigger the popup
            const response = await fetch('http://localhost:5000/trigger-popup', {
                method: 'GET', // Use GET if that's how your server is set up
            });

            if (response.ok) {
                // If the response is okay, the server should handle showing the popup
                console.log('Popup triggered successfully');
            } else {
                console.error('Failed to trigger popup');
            }
        } catch (error) {
            console.error('Error triggering popup:', error);
        }
    };

    return (
        <div>
            <form className="form">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" />
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" />
                <label htmlFor="id-number">Date of Birth:</label>
                <input type="date" id="id-number" />
                <label htmlFor="phone-number">Phone Number:</label>
                <input type="tel" id="phone-number" />
                <label htmlFor="loan-amount">Loan Amount:</label>
                <input type="number" id="loan-amount" min="0" max="10000" step="1" />
                <label htmlFor="repay-period">Repayment Period:</label>
                <input type="text" id="repay-period" />
                <label htmlFor="grace-period">Grace Period:</label>
                <input type="text" id="grace-period" />
                <button className="form-btn" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

// let buttonClick = document.querySelector(".form-btn");
// buttonClick.addEventListener("click", AddUserForm);

export default AddUserForm;


