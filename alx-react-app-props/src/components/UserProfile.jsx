import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
    const user = useContext(UserContext);

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
            <h2>{user.name}</h2>
            <p>
                <strong>Age:</strong> {user.age}
            </p>
            <p>
                <strong>Bio:</strong> {user.bio}
            </p>
        </div>
    );
}

export default UserProfile;
