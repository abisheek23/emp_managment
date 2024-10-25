import React ,{useState,useEffect}from 'react';
import axios from 'axios';

const DisplayEmp =()=>{
    const [Emp,setEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentEmp,setCurrentEmp]=useState({id:null,empid:null,name:'',address:'',position:'',salary:null,experiance:null,phone:null,email:''})
   
    
    useEffect(()=>{
        axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
        .then(response =>setEmp(response.data))
        .catch(error => console.log(error));
    },[]);

    const deleteEmp =(id)=>{
        axios.delete(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/`)
        .then(()=>{
            setEmp(Emp.filter(emp=> emp.id !==id));
        })
        .catch((error) => console.log(error));
    }

    const editEmp=(emp)=>{
        setEditing(true);
        setCurrentEmp(emp);
        
    };
    const updateEmp=(id,updateEmp)=>{
        setEditing(false);
        axios.put(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/`)
        .then(response=>{
            setEmp(Emp.map(emp=>(emp.id === id? response.data:emp)));
        })
        .catch(error=>console.log(error));
        
    };

    return(
        <div>
            <h2>Emp</h2>
            <table className='table mt-5  table-hover table-bordered'>
                <thead>
                    <tr>
                        <td>EmpId</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Position</td>
                        <td>Salary</td>
                        <td>Experiance</td>
                        <td>Ph No</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {Emp.map(empl =>(
                        <tr key={empl.id}>
                            <td>{empl.empid}</td>
                            <td>{empl.name}</td>
                            <td>{empl.address}</td>
                            <td>{empl.position}</td>
                            <td>{empl.salary}</td>
                            <td>{empl.experiance}</td>
                            <td>{empl.phone}</td>
                            <td>{empl.email}</td>
                            <td><button className='btn btn-danger' onClick={()=>editEmp(empl)}> Edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>deleteEmp(empl.id)}>delet</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ?(
                <EditempForm
                currentEmp={currentEmp}
                updateEmp={updateEmp}
                />
            ):null}
            

        </div>
    )
}
const EditempForm=({currentEmp,updateEmp})=>{
    const [emp,setEmp]=useState(currentEmp);

    const handleInputchange =(e)=>{
        const{name,value}=e.target;
        setEmp({...emp,[name]:value});

    };
    const handleSubmit =(e)=>{
        e.preventdefault();
        updateEmp(emp.id,emp);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Edit employee</h2>
            <div>
                <label >Name</label>
                <input type="text"
                name='name'
                value={emp.name} 
                onChange={handleInputchange} />
            </div>
            <div>
                <label >EmpID</label>
                <input type="number"
                empid='empid'
                value={emp.id} 
                onChange={handleInputchange} />
            </div>
            <div>
                <label >Address</label>
                <input type="text"
                address='address'
                value={emp.name} 
                onChange={handleInputchange} />
            </div>
            <button type='submit'>updateTask Task</button>
        </form>
    )
}
export default DisplayEmp 