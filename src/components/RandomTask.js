import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import TaskModel from "./TaskModel";
import './RandomTask.css'




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



    const handelSelectedValue = (e) => {
        const selectedOption = e.target.value;
        let image = '';
        image = require(`./${selectedOption}.jpg`);
        document.body.style.backgroundImage = `url(${image})`;

        document.body.style.backgroundPosition = 'center'
        const value = e.target.value;

        setSelectedValue(value);

    }

    const genTask = (e) => {
        if (selectedValue === "") {
            e.preventDefault()
            setgenerate("please select type")
        } else {
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
            <Form onSubmit={genTask}>
<<<<<<< HEAD
                <div className='dropdown-container'>

                    <Form.Select onChange={handelSelectedValue} aria-label="Default select example" className='select'>
                        <option value="none" >Please select type</option>
                        <option value="music"  >music</option>
                        <option value="education">education</option>
                        <option value="social">social</option>
                        <option value="recreational">recreational</option>
                        <option value="charity">charity</option>
                    </Form.Select>
                    <div className="button-container">
                        <Button className="button" type="submit" onClick={() => { handelshow(generate) }}>Submit</Button>
                    </div>
                </div>

            </Form>

            <TaskModel showFlag={showFlag} handelshow={handelshow} handelclose={handelclose} generate={generate} selectedValue={selectedValue} />
=======
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
            
>>>>>>> 9b1ec0a8873d2530dc1d892d037ba203740dab84
        </>
    )


}

export default RandomTask