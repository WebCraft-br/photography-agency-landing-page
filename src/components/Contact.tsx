import React from "react";

export default function Contact() {
    return (
        <div className="Contact px-6 py-8">
            <p className="text-lg mb-4">Contact Us</p>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-4 font-sans">
                    <div>
                        <h2 className="text-5xl text-gray-400">
                            Let's <span className="text-white font-semibold">discuss</span> your
                        </h2>
                    </div>
                    <div className="text-5xl text-gray-400 flex items-center">
                        vision
                        <span className="ml-4 text-2xl font-mono text-black bg-white rounded-full px-5 py-3">LET'S TALK</span>
                        <button className="w-16 h-16 mr-2 inline-flex items-center px-4 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="ml-2 h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M17 7l-10 10M17 7H6.5M17 7v10"
                                />
                            </svg>
                        </button>
                        <span className="ml-4 text-white font-semibold">with us</span>
                    </div>
                </div>
                <div className="text-right space-y-0 text-sm mt-6">
                    <p>456 Oak Avenue,</p>
                    <p>Cityville, MA 56789,</p>
                    <p>United States</p>
                    <p>+1 (555) 123-4567</p>
                    <p>creacy@hello.com</p>
                </div>
            </div>
        </div>
    );
}
