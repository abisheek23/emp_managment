import React ,{useState,useEffect}from 'react';
import axios from 'axios';

const AddEmp =()=>{
    const [name,setName]=useState('');
    const [empid,setId]=useState('');
    const [position,setPosition]=useState('');
    const [address,setAddress]=useState('');
    const [salary,setSalary]=useState('');
    const [experiance,setExperiance]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
    
        axios.post('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/',{empid,name,position,address,salary,experiance,phone,email})
        .then(response =>{
            console.log(response.data);
            setName('')
            setId('')
            setPosition('')
            setAddress('')
            setSalary('')
            setExperiance('')
            setPhone('')
            setEmail('')
        })
    .catch(error=>console.log(error));
    
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-info'>Add Employee</h2>
                <div>
                    <label className='text-dark'>Name</label>
                    <input type="text"
                    className='form-control'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>EmpId</label>
                    <input type="number"
                    className='form-control'
                    value={empid}
                    onChange={(e)=>setId(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>position</label>
                    <input type="text"
                    className='form-control'
                    value={position}
                    onChange={(e)=>setPosition(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>Address</label>
                    <input type="text"
                    className='form-control'
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>Salary</label>
                    <input type="number"
                    className='form-control'
                    value={salary}
                    onChange={(e)=>setSalary(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>Experiance</label>
                    <input type="number"
                    className='form-control'
                    value={experiance}
                    onChange={(e)=>setExperiance(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>PhonNO</label>
                    <input type="number"
                    className='form-control'
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-dark'>Email Id</label>
                    <input type="email"
                    className='form-control'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-warning '>Add </button>
                
            </form>
        </div>
       
    )
}
export default AddEmp 