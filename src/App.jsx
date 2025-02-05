import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx";
import Students from "./Students.jsx"
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Atila" />
    </>
  );
}


export default App
