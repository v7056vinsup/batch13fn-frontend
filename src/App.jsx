import HomeB, {Home, HomeA} from "./Home";
import Admin from "./Admin";
import User from "./User";
import Callback from "./Callback";
import {useState, useEffect,createContext} from "react";
import Form from "./Form";
import {BrowserRouter, Routes, Route} from "react-router-dom";
export const ThemeContext = createContext();
function App(){
  //const [variableName, functionToChangeVariable] = useState(initialValue);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log("Component mounted or count changed");
  }, [count]);
  

  const brands = ["bmw","audi","Lexus","Bentli","Toyota"];

  const style ={
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white"
  }

  const handleAdmin = ()=>{
    setIsAdmin(!isAdmin);
  }

  const increment = () =>{
    setCount(count+1);
    console.log(count);
  }

  const handleClick = ()=>{
    alert("Button Clicked");
  }

    const decrement = () =>{
      if(count > 0){
        setCount(count-1);
      }
  }
  const user = {
    name: "John",
    age: 30,
    city: "cbe"
  }

  return(
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
        <div>
        {/* <Home />
        <HomeA user={user} /> */}
        {/* <HomeB /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
  )
}

export default App;
