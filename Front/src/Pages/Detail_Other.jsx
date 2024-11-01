import React from 'react'
import { useLocation } from 'react-router'

const Detail_Other = () => {
    const location = useLocation()
    console.log(location);

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
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                        <h1 className="text-5xl font-bold text-center md:text-left text-green-500">
                            {location.state.image.title}
                        </h1>
                        <h2 className="text-xl font-semibold text-gray-400">
                            Genre: {location.state.image.genre}
                        </h2>
                        <h2 className="text-xl font-semibold text-gray-400">
                            Rating: {location.state.image.comedian}
                        </h2>
                        <h2 className="text-xl font-semibold text-green-500">
                            Price: {location.state.image.price}
                        </h2>
                        <div className="text-gray-300 text-base leading-relaxed">
                            <p className="font-semibold text-white mb-2">Description</p>
                            <p>{location.state.image.description}</p>
                        </div>

                        <div className="mt-4 text-gray-300">
                            <p>
                                <strong>Timings:</strong> {location.state.image.event}
                            </p>
                            <p>
                                <strong>Venue:</strong> {location.state.image.venue}
                            </p>
                            <p>
                                <strong>Age Suitability:</strong> {location.state.image.ageSuitability}
                            </p>
                            
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detail_Other