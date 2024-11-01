import React, { useContext, useState } from 'react';
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
} from '../../../public/Images/assets.js'
import UserContext from '../../context/UserContext.js';

const Location = ({ setDisplayLocationTab }) => {
    const [visitstate, setVisitstate] = useState(false);
    const [location, setLocation] = useState(null)

    //adding value to the context API
    const { setUpdateLocation } = useContext(UserContext)
    const { setCheckfordisplayLocation } = useContext(UserContext)

    const expandtoallcities = () => {
        setVisitstate(!visitstate);
    };

    const handleLocationClick = (city) => {
        setLocation(city);
        setVisitstate(false);
        setUpdateLocation(city)
        setDisplayLocationTab(false)
    };

    return (
        <>
            <div className='bg-gray-500 fixed z-10 inset-0 bg-opacity-75'>
                <div className='fixed z-10 bg-black h-auto rounded-2xl p-5 w-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-2xl text-white text-center'>Select your Location </h1>
                    <div className="bg-black flex justify-center items-center">
                        {/* First Column */}
                        <div className="flex flex-col items-center mx-6">
                            <div className="flex flex-col items-center mb-6">
                                <img src={Mumbai} alt="Mumbai" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Mumbai')} />
                                <h1 className="text-white text-xl mt-4">Mumbai</h1>
                            </div>
                            <div className="flex flex-col items-center mb-6">
                                <img src={NewDelhi} alt="New Delhi" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('New Delhi')} />
                                <h1 className="text-white text-xl mt-4">New Delhi</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={Chennai} alt="Chennai" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Chennai')} />
                                <h1 className="text-white text-xl mt-4">Chennai</h1>
                            </div>
                        </div>
                        {/* Second Column */}
                        <div className="flex flex-col items-center mx-6">
                            <div className="flex flex-col items-center mb-6">
                                <img src={Jaipur} alt="Jaipur" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Jaipur')} />
                                <h1 className="text-white text-xl mt-4">Jaipur</h1>
                            </div>
                            <div className="flex flex-col items-center mb-6">
                                <img src={Kolkata} alt="Kolkata" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Kolkata')} />
                                <h1 className="text-white text-xl mt-4">Kolkata</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={Pune} alt="Pune" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Pune')} />
                                <h1 className="text-white text-xl mt-4">Pune</h1>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="flex flex-col items-center mx-6">
                            <div className="flex flex-col items-center mb-6">
                                <img src={Hyderabad} alt="Hyderabad" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Hyderabad')} />
                                <h1 className="text-white text-xl mt-4">Hyderabad</h1>
                            </div>
                            <div className="flex flex-col items-center mb-6">
                                <img src={Ahmedabad} alt="Ahmedabad" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Ahmedabad')} />
                                <h1 className="text-white text-xl mt-4">Ahmedabad</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={Banglore} alt="Bengaluru" className="w-32 h-32 object-cover rounded-full" onClick={() => handleLocationClick('Bengalour')} />
                                <h1 className="text-white text-xl mt-4">Bengaluru</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-white text-center text-lg my-2' style={{ cursor: 'pointer' }} onClick={expandtoallcities}>
                        Click for more
                    </h1>
                    {visitstate && (<h1 style={{ cursor: 'pointer' }} className='flex justify-center items-center gap-20'>
                        <ul className='text-white'>
                            <li onClick={() => handleLocationClick('Ahmedabad')}>Ahmedabad</li>
                            <li onClick={() => handleLocationClick('Bangalore')}>Bangalore</li>
                            <li onClick={() => handleLocationClick('Chennai')}>Chennai</li>
                            <li onClick={() => handleLocationClick('Delhi')}>Delhi</li>
                            <li onClick={() => handleLocationClick('Hyderabad')}>Hyderabad</li>
                            <li onClick={() => handleLocationClick('Kolkata')}>Kolkata</li>
                        </ul>
                        <ul className='text-white'>
                            <li onClick={() => handleLocationClick('Lucknow')}>Lucknow</li>
                            <li onClick={() => handleLocationClick('Dehradun')}>Dehradun</li>
                            <li onClick={() => handleLocationClick('Kanpur')}>Kanpur</li>
                            <li onClick={() => handleLocationClick('Bhopal')}>Bhopal</li>
                            <li onClick={() => handleLocationClick('Surat')}>Surat</li>
                            <li onClick={() => handleLocationClick('Nagpur')}>Nagpur</li>
                        </ul>
                        <ul className='text-white'>
                            <li onClick={() => handleLocationClick('Agra')}>Agra</li>
                            <li onClick={() => handleLocationClick('Madurai')}>Madurai</li>
                            <li onClick={() => handleLocationClick('Rajkot')}>Rajkot</li>
                            <li onClick={() => handleLocationClick('Allahabad')}>Allahabad</li>
                            <li onClick={() => handleLocationClick('Vijayawada')}>Vijayawada</li>
                            <li onClick={() => handleLocationClick('Guwahati')}>Guwahati</li>

                        </ul>
                        <ul className='text-white'>
                            <li onClick={() => handleLocationClick('Surat')}>Surat</li>
                            <li onClick={() => handleLocationClick('Pune')}>Pune</li>
                            <li onClick={() => handleLocationClick('Coimbatore')}>Coimbatore</li>
                            <li onClick={() => handleLocationClick('Patna')}>Patna</li>
                            <li onClick={() => handleLocationClick('Vadodara')}>Vadodara</li>
                            <li onClick={() => handleLocationClick('Meerut')}>Meerut</li>

                        </ul>
                        <ul className='text-white'>
                            <li onClick={() => handleLocationClick('Faridabad')}>Faridabad</li>
                            <li onClick={() => handleLocationClick('Chandigarh')}>Chandigarh</li>
                            <li onClick={() => handleLocationClick('Thane')}>Thane</li>
                            <li onClick={() => handleLocationClick('Jodhpur')}>Jodhpur</li>
                            <li onClick={() => handleLocationClick('Visakhapatnam')}>Visakhapatnam</li>
                            <li onClick={() => handleLocationClick('Indore')}>Indore</li>
                        </ul>
                    </h1>)}
                </div>
            </div>
        </>
    )
}

export default Location