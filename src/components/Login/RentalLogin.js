import { useState } from "react";
import img1 from '../../assets/login1.jpg'
import { useNavigate } from "react-router-dom";
export default function RentalLogin({setLogged}){
    const [formData,setFormData]=useState({RentaleEmail:"",RentalPswrd:""});
    // const [showpass,setShopass]=useState(false);
    const navigate=useNavigate();
    // function submitHandler(event){
    //     event.preventDefault();
    //     console.log(formData)
    //     setLogged(true);
    //     navigate('/bookingpage')
        
    // }

    const  submitHandler=async(event)=>{
        event.preventDefault();
        console.log(formData)
        navigate('/bookingpage')
        setLogged(true);
        // setUser('Renatl');

        try {
            // console.log('Form Data:', formData);
            const response = await fetch('http://172.20.10.2:4000/api/v1/auth/login/tenant', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (response.ok) {
            } else {
              console.error('Submission failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        
    }



    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    return(
        <div className="">
            
            <div className="flex flex-row w-8/12 outline-dotted mt-10 p-5 rounded bg-slate-400 bg-opacity-10 mx-auto my-auto">
            <div className="w-6/12">
            <div>
            <h1 className="font-bold text-3xl m-10">Welcome Back :)</h1>
            <p className="text-xl">Seamlessly logged in and found the ideal parking spot, transforming the hassle of parking into a stress-free experience</p>
            </div>
            <div className="outline w-96  my-auto mt-10 mb-10 p-5 ">
            
            <form onSubmit={submitHandler}>
                <label className=''>
                    <p className="">Email<sup>*</sup></p>
                    <input  className="outline w-64 mt-5 mb-5 text-left" type="email" name="RentaleEmail" required value={formData.RentaleEmail} onChange={changeHandler} placeholder="Enter Email"></input>
                </label>
                <label>
                    <p>Password<sup>*</sup></p>
                    <input className="outline w-64  mt-5" type="password" name="RentalPswrd" required value={formData.RentalPswrd} onChange={changeHandler} placeholder="Enter Password"></input>
                </label>
                <div className="mt-12 outline w-32 bg-blue-600 h-10 text-center rounded-md  mx-auto my-auto hover:bg-[rgb(58,81,187)] hover:shadow-[rgb(31,32,97)_3px_3px_5px_3px]">
                <button className="font-bold p-1">Login</button>
                </div>
            </form>
        </div>
            </div>
        <div className="ml-10 mix-blend-multiply">
            <img src={img1}/>
        </div>
        </div>
        </div>
    )
}
