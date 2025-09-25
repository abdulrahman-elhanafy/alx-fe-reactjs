import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";

function App() {
    const user = { name: "Abdulrahman", age: 22, bio: "Frontend Dev" };

    return (
        <UserContext.Provider value={user}>
            <UserProfile />
        </UserContext.Provider>
    );
}

export default App;
