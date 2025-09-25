import "./App.css";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";

function App() {
    const user = {
        name: "Alice",
        age: 25,
        bio: "Loves hiking and photography",
    };

    return (
        <UserContext.Provider value={user}>
            <div>
                <UserProfile />
            </div>
        </UserContext.Provider>
    );
}

export default App;
