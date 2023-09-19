import { useState } from "react"

export default function SampleTestForm(){
    const [getData, setGetData] = useState({
        image:'',
        email: '',
        password: '',
        fullname: ''
    })

    const handleChange = (e) => {
        e.preventDefaults
        const { name, value } = e.target;
        setGetData({
            ...getData,
            [name]:value
        })
    }
    
    console.log(getData);

    return(
        <>
        <form action="" className="border border-black m-9 p-5 text-center">
            <div className="py-2">
                <label htmlFor="image">Upload Image</label>
                <input type="file" name="image" id="image" onChange={handleChange}/>
            </div>
            <div className="py-2">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={handleChange}/>
            </div>
            <div className="py-2">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
            </div>
            <div className="py-2">
                <label htmlFor="fullname">Full Name: </label>
                <input type="text" name="fullname" id="fullname" onChange={handleChange}/>
            </div>
            <button type="submit" className="bg-gray-500">Submit</button>
        </form>
        </>
    )
}