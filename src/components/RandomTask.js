import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import TaskModel from "./TaskModel";
import './randomtask.css';




function RandomTask() {

    const [generate, setgenerate] = useState("");
    const [selectedValue, setSelectedValue] = useState("");


    const [showFlag, setShowFlag] = useState(false)



    const handelshow = () => {
        setShowFlag(true)
    }

    const handelclose = () => {

        setShowFlag(false)
        setgenerate(null)

    }




        
        const handelSelectedValue = (event) => {
            const selectedOption = event.target.value;
            const formDiv = document.getElementById('form');
            let image = '';
            image = require(`./${selectedOption}.jpg`);
            formDiv.style.backgroundImage = `url(${image})`;
            const value = event.target.value;
            setSelectedValue(value);
        }



    const genTask = (e) => {
        if(selectedValue ===""){
            e.preventDefault()
            setgenerate("please select type")
        }else{
            e.preventDefault()
          
            generateRandom(selectedValue)
        }
        
          
    
    }

    const generateRandom = (type) => {
        
           console.log(selectedValue)
            const serverURL = `http://localhost:3000/randomTask/${type}`

            axios.get(serverURL)
                .then(response => {

                    console.log(response.data)
                    setgenerate(response.data.activity)
                })
                .catch(error => {
                    console.log(error)
                })
    }



    return (
        <>

            <Form onSubmit={genTask} id="form" style={{height:"80vh !important"}}>
                <Form.Select onChange={handelSelectedValue}  className="fs-3"style={{ maxWidth: "50%",
                margin:" 0 auto",
                marginTop: "30px",
                borderRadius: "50px",
    backgroundColor: "azure"}}>
                    <option value="none" >Please select type</option>
                    <option value="music"  >music</option>
                    <option value="education">education</option>
                    <option value="social">social</option>
                    <option value="recreational">recreational</option>
                    <option value="charity">charity</option>
                </Form.Select>
                <Button type="submit" onClick={() => { handelshow(generate) }}>submit</Button>
            </Form>

            <TaskModel showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} generate={generate}  selectedValue={selectedValue} />

        </>
    )


}

export default RandomTask