import "./App.css";
import UserContext from "./UserContext";
import UserDetails from "./components/UserDetails";

function App() {
    const user = {
        name: "Alice",
        age: 25,
        bio: "Loves hiking and photography",
    };

    return (
        <UserContext.Provider value={user}>
            <div>
                <UserDetails />
            </div>
        </UserContext.Provider>
    );
}

export default App;
