import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import UserContext from '../context/UserContext';

const Detail_Standup = () => {
    const location = useLocation();
    const { updatelocation } = useContext(UserContext);
    
    return (
        <>
            <div className="bg-black min-h-screen text-white py-32 px-auto flex justify-center">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 p-6 shadow-lg rounded-lg">
                    
                    {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src={location.state.image.src}
                            alt="Standup Event"
                            className="w-full rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <h1 className="text-5xl font-bold text-center md:text-left text-green-500">
                            {location.state.image.title}
                        </h1>

                        <h2 className="text-xl font-semibold text-gray-400">
                            Comedian: {location.state.image.comedian}
                        </h2>

                        <h3 className="text-lg text-gray-400">
                            Venue: {location.state.image.venue}, {updatelocation}
                        </h3>

                        <p className="text-lg text-green-400 font-medium">
                            Price: {location.state.image.price}
                        </p>

                        {/* About Section */}
                        <div className="text-gray-300 text-base leading-relaxed">
                            <p className="font-semibold text-white mb-2">About</p>
                            <p>{location.state.image.description}</p>
                        </div>

                        {/* Extra Details Section */}
                        <div className="mt-4 text-gray-300">
                            <p>
                                <strong>Duration:</strong> {location.state.image.duration}
                            </p>
                            <p>
                                <strong>Language:</strong> {location.state.image.language}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail_Standup;
