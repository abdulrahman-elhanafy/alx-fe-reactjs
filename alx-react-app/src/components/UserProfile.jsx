function UserProfile(props) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                maxWidth: "300px",
                margin: "20px auto",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                color: "black",
            }}>
            <h2>{props.name}</h2>
            <p>
                <strong>Age:</strong> {props.age}
            </p>
            <p>{props.Bio}</p>
        </div>
    );
}

export default UserProfile;
