import React, {useState,useContext} from "react";
import "./Home.css";
import { ThemeContext } from "./App";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
export function Home(){
    const {theme, setTheme} = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            age: "",
            city: ""
        });
    };
    return(
        <div>
            <div style={{backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white"}}>
            <h1>Home</h1>
            {/* import { Link } from "react-router-dom"; */}
            <Link to="/form">Form</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/user">User</Link>
            <form onSubmit={handleSubmit}>
                <CgProfile />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" 
                value={formData.name} onChange={handleInputChange} /><br />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" 
                value={formData.age} onChange={handleInputChange} /><br />
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" 
                value={formData.city} onChange={handleInputChange} /><br />
                <button type="submit">Submit</button>
            </form>
            </div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    )
}

export default function HomeB(){
    return(
        <div className="home-containerA">
            <h1>Home B</h1>
        </div>
    )
}



export function HomeA(props){
    return(
        <div>
            <img src="image.png" alt="BMW" />
            <h1>Home A</h1>
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
            <p>{props.user.city}</p>
        </div>
    )
}