import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile
                name="Abdulrahman"
                age={20}
                bio="A passionate learner exploring React with ALX 🚀"
            />
            <Footer />
        </div>
    );
}

export default App;
