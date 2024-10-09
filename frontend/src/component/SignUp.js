import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();
    const signUpData = {
        name: '',
        email: '',
        password: ''
    };

    const [data, setData] = useState(signUpData);
    const [loading, setLoading] = useState(false)

    const handleBack = () => {
        navigate('/');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://my-diary-app-api.vercel.app/api/user/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            setLoading(true)
            const json = await response.json();
            //   console.log(json);

            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authToken);
                navigate('/notes');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during signUp:', error);
        } finally {
            setLoading(false)
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <span className='bg-white py-2 px-3 rounded-full hover:bg-[#48CFCB] cursor-pointer' onClick={handleBack}><i class="fa-solid fa-arrow-left"></i></span>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-[#48CFCB]">Sign up for an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 rounded-md shadow-sm -space-y-px">
                        <div className=''>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={data.name}
                                onChange={handleChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#48CFCB] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#48CFCB] focus:border-[#48CFCB] focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={data.email}
                                onChange={handleChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#48CFCB] placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#48CFCB] focus:border-[#48CFCB] focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={data.password}
                                onChange={handleChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#48CFCB] placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#48CFCB] focus:border-[#48CFCB] focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#48CFCB] hover:bg-[#48CFCB] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#48CFCB]"
                        >
                            {
                                loading ? (
                                    <div className="flex justify-center ">
                                        <div className="animate-spin bg-[#48CFCB]  rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
                                    </div>
                                ) : (
                                    <h1>
                                        Sign Up</h1>
                                )
                            }
                        </button>
                    </div>
                    <a href="/sign-in" className="underline text-[#48CFCB] hover:text-white my-4">
                        Login Account
                    </a>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
