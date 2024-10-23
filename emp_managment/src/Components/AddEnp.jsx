import React ,{useState,useEffect}from 'react';
import axios from 'axios';

const AddEmp =()=>{
    const [Emp,setEnp]=useState([]);
   
    
    useEffect(()=>{
        axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
        .then(response =>setEnp(response.data))
        .catch(error => console.log(error));
    },[]);

    return(
        <div>
            <h2>Emp</h2>
            <table>
                <tbody>
                    {Emp.map(empl =>(
                        <tr key={empl.id}>
                            <td>{empl.empid}</td>
                            <td>{empl.name}</td>
                            <td>{}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

        </div>
    )
}
export default AddEmp 