import './RandomTask.css';
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import TaskModel from "./TaskModel";
import './RandomTask.css';

function RandomTask() {
    const [generate, setgenerate] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const [showFlag, setShowFlag] = useState(false);

    const handelshow = () => {
        setShowFlag(true);
    };

    const handelclose = () => {
        setShowFlag(false);
        setgenerate("");
    };

    const handelSelectedValue = (event) => {
        const selectedOption = event.target.value;
        const formDiv = document.getElementById('form');
        let image = '';
        if (selectedOption !== "none") {
            image = require(`./${selectedOption}.jpg`);
        }
        formDiv.style.backgroundImage = selectedOption !== "none" ? `url(${image})` : "none";
        formDiv.style.backgroundPosition = 'center';
        formDiv.style.backgroundSize = 'cover';
        formDiv.style.backgroundRepeat = 'no-repeat';
        setSelectedValue(selectedOption);
    };

    const genTask = (e) => {
        e.preventDefault();
        if (selectedValue === "none") {
            setgenerate("Please select a type");
        } else {
            generateRandom(selectedValue);
        }
    };

    const generateRandom = (type) => {
        const serverURL = `${process.env.REACT_APP_serverURL}/randomTask/${type}`;
        axios.get(serverURL)
            .then(response => {
                console.log(response.data);
                setgenerate(response.data.activity);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <div  id='form'>
            <Form onSubmit={genTask} className='randomForm'>
                <div className='dropdown-container'>
                    <select onChange={handelSelectedValue} aria-label="Default select example" className='select'>
                        <option value="none">Please select a type</option>
                        <option value="music">music</option>
                        <option value="education">education</option>
                        <option value="social">social</option>
                        <option value="recreational">recreational</option>
                        <option value="charity">charity</option>
                    </select>
                    <div className="button-container">
                        <Button className="button btn-generate" type="submit" onClick={handelshow}>Submit</Button>
                    </div>
                </div>
            </Form>
            </div>

            <TaskModel showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} generate={generate} selectedValue={selectedValue} />
        </>
    );
}

export default RandomTask;