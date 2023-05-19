import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

function JewelryAppoiment() {

    var Appointment = reactLocalStorage.getObject('Jewelry');
    const [code, setCode] = useState(Appointment[0])
    const [store, setStore] = useState(Appointment[1])
    const [phoneNo, setPhoneNo] = useState("")
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [submit, setSubmit] = useState(true);



    useEffect(() => {
        valid()
    }, [phoneNo, name, date, message])


    const valid = () => {
        if ((phoneNo !== "") && (name !== "") && (message !== "") && (date !== "")) {
            setSubmit(false)
        } else {
            setSubmit(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Appoiment = { code, store, phoneNo, name, date, message };
        try {
            const response = await axios.post("http://localhost:5000" + "/jeweAppoiment/addjeweAppoiment", Appoiment);
            console.log(response.data);
            Swal.fire({
                title: "Success!",
                text: "Appoiment Added",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })
            setTimeout(() => {
                window.location.href = "/JewelryList";
            }, 1000);
        } catch (error) {
            console.log(error.message);
            Swal.fire({
                title: "Error!",
                text: "Appoiment Not Added",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
            window.location.href = "/JewelryList";
        }
    };


    return (
        <div class="dashboard-main-wrapper" >

            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>


                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >
                        <center>
                            <div className='card' style={{ backgroundColor: "", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", width: "90%" }}>



                                <h3 style={{ marginTop: '40px', fontWeight: "bold" }}>Appoiment</h3>

                                <div class="row container-fluid" style={{ marginTop: '7%', marginBottom: '7%' }}>
                                    <form onSubmit={handleSubmit}>
                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Code" placeholder='' variant="outlined" style={{ width: "800px" }} value={code} />
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Store" placeholder='' variant="outlined" style={{ width: "800px" }} value={store} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Name" type="text" placeholder='' variant="outlined" style={{ width: "800px" }} value={name} onChange={(e) => {
                                                    setName(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="Phone Number" placeholder='011-055-0664' variant="outlined" type='number' style={{ width: "800px" }} value={phoneNo} inputProps={{ min: 0 }} onChange={(e) => {
                                                    setPhoneNo(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div className="col">
                                                <TextField className="form-control" id="outlined-basic" label="" type="date" placeholder='' variant="outlined" style={{ width: "800px" }} value={date} onChange={(e) => {
                                                    setDate(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div className="col">
                                                <label style={{ paddingRight: "700px" }}>Message</label>
                                                <p></p>
                                                <textarea className="form-control" id="outlined-basic" label="Description" placeholder='*****' variant="outlined" style={{ width: "800px" }} value={message} onChange={(e) => {
                                                    setMessage(e.target.value);
                                                }} />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div style={{ paddingLeft: "590px" }}>
                                            <button type="submit" class="btn btn-primary btn-block mb-5" style={{ width: "220px" }} disabled={submit}>Submit Appoiment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </center >
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JewelryAppoiment
