function ManageAccounts() {
    return (
        <div className="user-accounts">
            <h1>User Accounts</h1>
            <div className="users user-one">
                <p><strong>Name</strong>: Zongo Maqutu</p>
                <p><strong>Age</strong>: 31</p>
                <p><strong>Email</strong>: zzmaqutu@gmail.com</p>
                <p><strong>Application Status</strong>: <span className="incomplete">Incomplete</span></p>
            </div>
            <div className="users user-two">
                <p><strong>Name</strong>: Ayabulela Pinana</p>
                <p><strong>Age</strong>: 43</p>
                <p><strong>Email</strong>: apunana@gmail.com</p>
                <p><strong>Application Status</strong>: <span className="complete">Complete</span></p>
            </div>
            <div className="users user-three">
                <p><strong>Name</strong>: Zenande Mbane</p>
                <p><strong>Age</strong>: 50</p>
                <p><strong>Email</strong>: zmbane@gmail.com</p>
                <p><strong>Application Status</strong>: <span className="pending">Pending</span></p>
            </div>
        </div>
    )
}

export default ManageAccounts;