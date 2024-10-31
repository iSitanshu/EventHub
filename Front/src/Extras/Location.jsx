import React, { useState } from 'react'
import {
    Mumbai,
    Banglore,
    Chennai,
    Pune,
    NewDelhi,
    Jaipur,
    Ahmedabad,
    Kolkata,
    Hyderabad
} from '../../public/Images/assets.js'

const Location = () => {
    const [visitstate, setVisitstate] = useState(false)

    const expandtoallcities = () => {
        setVisitstate(!visitstate)
    }
    return (
        <>
            <div className='bg-black'>
                <div className="bg-black flex justify-center items-center py-10">
                    {/* First Column */}
                    <div className="flex flex-col items-center mx-6">
                        <div className="flex flex-col items-center mb-6">
                            <img src={Mumbai} alt="Mumbai" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Mumbai</h1>
                        </div>
                        <div className="flex flex-col items-center mb-6">
                            <img src={NewDelhi} alt="New Delhi" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">New Delhi</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Chennai} alt="Chennai" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Chennai</h1>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-col items-center mx-6">
                        <div className="flex flex-col items-center mb-6">
                            <img src={Jaipur} alt="Jaipur" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Jaipur</h1>
                        </div>
                        <div className="flex flex-col items-center mb-6">
                            <img src={Kolkata} alt="Kolkata" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Kolkata</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Pune} alt="Pune" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Pune</h1>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="flex flex-col items-center mx-6">
                        <div className="flex flex-col items-center mb-6">
                            <img src={Hyderabad} alt="Hyderabad" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Hyderabad</h1>
                        </div>
                        <div className="flex flex-col items-center mb-6">
                            <img src={Ahmedabad} alt="Ahmedabad" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Ahmedabad</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Banglore} alt="Bengaluru" className="w-32 h-32 object-cover rounded-full" />
                            <h1 className="text-white text-xl mt-4">Bengaluru</h1>
                        </div>
                    </div>
                </div>
                <h1 className='text-white text-center text-lg my-2' style={{ cursor: 'pointer' }} onClick={expandtoallcities}>
                    Click & Select your city for more
                </h1>
                {visitstate && (<h1 style={{cursor: 'pointer'}} className='flex justify-center items-center gap-20'>
                    <ul className='text-white'>
                        <li>Ahmedabad</li>
                        <li>Bangalore</li>
                        <li>Chennai</li>
                        <li>Delhi</li>
                        <li>Hyderabad</li>
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Nashik</li>
                        <li>Pune</li>
                        <li>Jaipur</li>
                        <li>Surat</li>
                    </ul>
                    <ul className='text-white'>
                        <li>Lucknow</li>
                        <li>Dehradun</li>
                        <li>Kanpur</li>
                        <li>Bhopal</li>
                        <li>Surat</li>
                        <li>Nagpur</li>
                        <li>Visakhapatnam</li>
                        <li>Indore</li>
                        <li>Coimbatore</li>
                        <li>Patna</li>
                        <li>Vadodara</li>
                    </ul>
                    <ul className='text-white'>
                        <li>Agra</li>
                        <li>Madurai</li>
                        <li>Rajkot</li>
                        <li>Allahabad</li>
                        <li>Vijayawada</li>
                        <li>Guwahati</li>
                        <li>Chandigarh</li>
                        <li>Thane</li>
                        <li>Meerut</li>
                        <li>Faridabad</li>
                        <li>Jodhpur</li>
                    </ul>
                </h1>)}

            </div>
        </>
    )
}

export default Location