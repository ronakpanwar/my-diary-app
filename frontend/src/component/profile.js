import React, { useState, useEffect, useContext } from 'react';
import noteContext from '../context/noteContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const UserProfile = () => {
    const navigate = useNavigate();
    const context = useContext(noteContext);
    const [user, setUser] = useState({
        name: '',
        email: '',

        // Add other fields as needed based on your API response
    });

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/sign-in');
    }

    const [loading, setLoading] = useState(false);


    const { notes, getNote } = context;

    useEffect(() => {
        // Function to fetch user profile data from API
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('https://my-diary-app-api.vercel.app/api/user/getuser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
                    }
                });
                setLoading(true)
                if (!response.ok) {
                    throw new Error('Failed to fetch user profile');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchUserProfile();
        getNote();
    }, []);

    return (
         <>
         <Navbar/>
        <div className="container mx-auto p-4">
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {
                    loading ? (
                        <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                    ) : (
                        <>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}'s Profile</h2>
                                <p className="text-gray-600 mb-4">{user.email}</p>
                                <p className="text-gray-700">{user.bio}</p>
                                {/* Additional fields can be added here */}
                            </div>

                            <div className="mt-4 px-4 pb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Notes Statistics</h3>
                                <p className="text-gray-700 mb-2">Total Notes Created: {notes.length}</p>

                                {notes.length > 0 ? (
                                    <ul className="divide-y divide-gray-200">
                                        {notes.map((note, index) => (
                                            <li key={index} className="py-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1">
                                                        <p className="text-gray-700">Note {index + 1}</p>
                                                        <p className="text-gray-600">{new Date(note.date).toLocaleString()}</p>
                                                    </div>
                                                    {/* Add edit/delete icons or actions here if needed */}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700">No notes have been created yet.</p>
                                )}
                            </div>
                        </>
                    )
                }
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}'s Profile</h2>
                    <p className="text-gray-600 mb-4">{user.email}</p>
                    <p className="text-gray-700">{user.bio}</p>
                    {/* Additional fields can be added here */}
                </div>

                <div className="mt-4 px-4 pb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Notes Statistics</h3>
                    <p className="text-gray-700 mb-2">Total Notes Created: {notes.length}</p>

                    {notes.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {notes.map((note, index) => (
                                <li key={index} className="py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="text-gray-700">Note {index + 1}</p>
                                            <p className="text-gray-600">{new Date(note.date).toLocaleString()}</p>
                                        </div>
                                        {/* Add edit/delete icons or actions here if needed */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No notes have been created yet.</p>
                    )}
                </div>
            </div>
        </div>
</>

    )
};

export default UserProfile;
