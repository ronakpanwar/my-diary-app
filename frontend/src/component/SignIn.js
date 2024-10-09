import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();


  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });


  const [showPassword, setShowPassword] = useState(false);

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
    
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://my-diary-app-api.vercel.app/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setLoading(true);
      const json = await response.json();

      if (json.success) {
        // Save auth token and navigate to home
        localStorage.setItem('token', json.authToken);
        navigate('/notes');
      } else {
        alert(json.errors);
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 ">
      <div className="max-w-md w-full space-y-8">
        <span className='bg-white py-2 px-3 rounded-full hover:bg-[#48CFCB] cursor-pointer' onClick={handleBack}><i class="fa-solid fa-arrow-left"></i></span>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#48CFCB]">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="my-5">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#48CFCB] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#48CFCB] focus:border-[#48CFCB] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={data.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#48CFCB] placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#48CFCB] focus:border-[#48CFCB] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-[#48CFCB] hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#48CFCB] hover:bg-[#229799] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#48CFCB]"
            >
              {
                loading ? (
                  <div className="flex justify-center ">
                    <div className="animate-spin bg-[#229799]  rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
                  </div>
                ) : (
                  <h1>
                    Sign in</h1>
                )
              }
            </button>
          </div>

        </form>
        <a href="/sign-up" className=" underline text-[#48CFCB] hover:text-white ">
          Create Account
        </a>
      </div>
    </div>
  );
}

export default SignIn;
