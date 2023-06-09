"use client"
import { useState } from 'react';

const Page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    exam: '',
    address: '',
    city: '',
    gender: '',
    dob: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // add Validation
    if(formData.name === ""|| formData.email === ""|| formData.address===""|| formData.gender === "" || formData.city === "" || formData.exam === "" || formData.phone === "" || formData.address === "") return;
    if(file === null) return;
    console.log(formData);
  }

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <div className="h-[21rem] w-full bg-[url('/images/home-bg.png')] bg-no-repeat bg-cover bg-center relative flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-[21rem] bg-black bg-opacity-40 absolute inset-0">
          <h3 className="text-white font-bold text-6xl mt-40 flex items-center justify-center">Registration</h3>
        </div>
      </div>

      <div className="m-auto">
        <div className="m-auto my-16 lg:w-[50%] md:w-[65%] w-[90%]">
          <h3 className="text-2xl text-rose-500 font-medium mb-5">Important Intructions :</h3>
          <ul className="list-disc list-inside text-sm flex flex-col gap-1">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, dolorem.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ab at perspiciatis suscipit!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, dolores.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit vero necessitatibus ducimus.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque  rerum sint temporibus ipsam officia!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
      </div>


      <div className="bg-[#010101] border-gray-800 lg:w-[34rem] md:w-[32rem] w-[90%] m-auto rounded-3xl shadow-2xl p-8">
        <div>
          <h3 className="text-2xl text-center text-rose-500 font-semibold mb-5">Registration Form</h3>
        </div>

        <div className="mt-10 m-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 m-auto w-fit">
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="name" className="text-white font-medium w-20">Name</label>
              <input required={true} onChange={handleChange} value={formData.name} placeholder="John Doe" type="text" name="name" id="name" className="bg-[#0a0a0a] border lg:w-[16rem] md:w-[15rem] w-[100%] border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="email" className="text-white font-medium w-20">Email</label>
              <input required={true} onChange={handleChange} value={formData.email} type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="bg-[#0a0a0a] lg:w-[16rem] md:w-[15rem] w-[100%] border border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="gender" className="text-white font-medium w-20">Gender</label>
              <select required={true} onChange={handleChange} value={formData.gender} name="gender" id="gender" className="bg-[#0a0a0a] border border-gray-800 lg:w-[16rem] md:w-[15rem] w-[100%] outline-none text-white p-2">
                <option>-Select-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="dob" className="text-white font-medium w-20">Date of Birth</label>
              <input required={true} onChange={handleChange} value={formData.dob} type="date" name="dob" id="dob" className="bg-[#0a0a0a] lg:w-[16rem] md:w-[15rem] w-[100%] border border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="phone" className="text-white font-medium w-20">Phone No.</label>
              <input required={true} onChange={handleChange} value={formData.phone} type="text" name="phone" id="phone" placeholder="9987654321" className="bg-[#0a0a0a] lg:w-[16rem] md:w-[15rem] w-[100%] border border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="address" className="text-white font-medium w-20">Address</label>
              <input required={true} onChange={handleChange} value={formData.address} type="text" name="address" id="address" placeholder="Patna, Bihar" className="bg-[#0a0a0a] lg:w-[16rem] md:w-[15rem] w-[100%] border border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="name" className="text-white font-medium w-20">City</label>
              <input required={true} onChange={handleChange} value={formData.city} placeholder="Patna" type="text" name="city" id="city" className="bg-[#0a0a0a] border lg:w-[16rem] md:w-[15rem] w-[100%] border-gray-800 outline-none text-white p-2" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="exam" className="text-white font-medium w-20">Exam</label>
              <select required={true} onChange={handleChange} value={formData.exam} name="exam" id="exam" className="bg-[#0a0a0a] border border-gray-800 lg:w-[16rem] md:w-[15rem] w-[100%] outline-none text-white p-2">
                <option>-Select-</option>
                <option value="JEE">JEE</option>
                <option value="NEET">NEET</option>
                <option value="BCECE">BCECE</option>
                <option value="CLAT">CLAT</option>
                <option value="ICAR">ICAR</option>
              </select>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-2 lg:w-fit md:w-fit w-auto">
              <label htmlFor="city" className="text-white font-medium w-20">Score Card</label>
              <input required={true} onChange={handleFile} type="file" name="scorecard" id="scorecard" className="bg-[#0a0a0a] border lg:w-[16rem] md:w-[15rem] w-[100%] border-gray-800 outline-none text-white p-2" />
            </div>

            <div className="m-auto my-5">
              <button type='submit' className="bg-white m-auto text-black hover:bg-gray-200 font-medium py-2 px-16 rounded-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page