function AddUserForm() {
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
                <button className="form-btn">Submit</button>
            </form>
        </div>
    )
}

// let buttonClick = document.querySelector(".form-btn");
// buttonClick.addEventListener("click", AddUserForm);

export default AddUserForm;


