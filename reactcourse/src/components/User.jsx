function User({id, name, username}) {
    return (
        <div style={ {border: "1px solid red", margin: "8px"} }>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>ID: {id}</div>
        </div>
    )
}
export default User;