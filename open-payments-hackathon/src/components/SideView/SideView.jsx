function SideView(props) {
    function handleAddUser(){
        props.setShowForm(true)
        props.setShowManageAccounts(false)
    }

    function handleManageAccount(){
        props.setShowManageAccounts(true)
        props.setShowForm(false)
    }
    return (
        <div className="side-view">
            <div className="side-flex">
            <button className="side-btn">Overview</button>
            <button className="side-btn" onClick={handleAddUser}>Add User</button>
            <button className="side-btn" onClick={handleManageAccount}>Manage Accounts</button>
            </div>
            <p className="sponsored">Powered by <a href="#">Interledger</a></p>
        </div>
    )
}

export default SideView;