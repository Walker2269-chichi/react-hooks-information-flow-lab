// App Component
import { useState } from "react";
import Header from "./Header"; // Import the Header component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* Pass toggleDarkMode as onDarkModeClick prop to Header */}
      <Header onDarkModeClick={toggleDarkMode} />
    </div>
  );
}

export default App;
