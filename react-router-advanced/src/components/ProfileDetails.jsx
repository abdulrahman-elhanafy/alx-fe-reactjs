import { useParams } from "react-router-dom";

export default function ProfileDetails() {
    const { username } = useParams();
    return (
        <div>
            <h3>Profile Details</h3>
            {username ? (
                <p>Dynamic user: {username}</p>
            ) : (
                <p>This is your profile details section.</p>
            )}
        </div>
    );
}
