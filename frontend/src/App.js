// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
 
function App() {
    const [data, setdata] = useState({
        class_name: "",
        confidence_score: ""
    });
 
    useEffect(() => {
        fetch("/predict").then((res) =>
            res.json().then((data) => {
                setdata({
                    class_name: data.class_name,
                    confidence_score: data.confidence_score
                });
            })
        );
    }, []);
 
    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                <p>{data.name}</p>
                <p>{data.age}</p>
 
            </header>
        </div>
    );
}
 
export default App;