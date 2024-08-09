import React, { useEffect, useState } from 'react'
import { TabLaundry } from './Header'
import { Table } from 'react-bootstrap';

function MyBook() {
        const [data, setData] = useState([]);

        useEffect(   () => {
            getList();
    },
    
    [])
        console.warn("Results", data)
    
        async function delBook (id) {
            let result = await fetch("http://localhost:8000/api/delete/" +id, {
                method:"DELETE"
            });
            result= await result.json
            getList();
        }
        async function getList () {
            let result = await fetch ("http://localhost:8000/api/bookList");
            result = await result.json();
            setData(result)
        }
       
   
  return (
    <div className='text-center'>
        <TabLaundry/>
        <h1>My Booking appointments</h1>

        <Table >
            <tr className='gap-10'>
                <td className='border gap-2'>Id</td>
                <td className='border '>Name</td>
                <td>Email</td>
                <td>Age</td>
                <td>Phone</td>
                <td>Time</td>
                <td>Description</td>
                <td>Operations</td>
              
            </tr>
            {
                data.map((item)=>
                <tr className='gap-10'>
                <td className='border '>{item.id}</td>
                <td className='border '>{item.name}</td>
                <td className='border '>{item.email}</td>
                <td className='border '>{item.age}</td>
                <td className='border '>{item.phone}</td>
                <td className='border '>{item.time}</td>
                <td className='border '>{item.description}</td>
                <td ><span onClick={()=> delBook(item.id)} className='border bg-red-400 rounded p-1'> Cancel</span></td>
            </tr>
                )
            }
        </Table>
       <div>
     
       </div>


    </div>
  )
}

export default MyBook