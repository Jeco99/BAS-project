import { useEffect, useState } from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";

export const loader = async () =>{
    const response = await fetch("http://localhost:3001/data");
    const appointmentData = await response.json();
    return appointmentData
}

// export const action = async({ request }) => {
//   const formData = await request.formData();

//   //update
//   if(request.method === "PUT"){
//     const userId = formData.get("user_id");
//     await 
//   }
// }



export default function AppointmentDataDisplay(){
  const userData = useLoaderData();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/data/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('Data inserted successfully');
        return location.href = "/root"
      } else {
        alert('Error inserting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  return (
    <>
      <h1 className="text-center p-6">User</h1>
      {userData.map( (data) => (
        <div key={data.user_id} className="p-2 border m-2">
          <li>{data.user_id}</li>
          <li>{data.first_name}</li>
          <li>{data.last_name}</li>
        </div>
      ))}

      <Form className="m-2" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name="first_name" id="first_name" value={formData.first_name}
          onChange={handleChange}
          required/> <br />
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" name="last_name" id="last_name" value={formData.last_name}
          onChange={handleChange}
          required/> <br />
        <button type="submit" className="border bg-500-gray p-3">Add</button>
      </Form>
    </>
  )
}