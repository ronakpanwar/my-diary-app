import React, { useContext, useState, useEffect } from 'react'
import Notes from './Notes'
import Typewriter from 'react-typewriter-effect';


const Home = () => {

  const token = localStorage.getItem('token');


  return (
    <>
      <div className="bg-black p-4">
        <div className="container sticky  mx-auto flex justify-around items-center">
          <div className="text-white text-2xl font-bold">
            My-Diary
          </div>
          <div className="space-x-4">
            <a href="/sign-in"> <button className="bg-transparent text-[#48CFCB] font-bold border border-[#48CFCB] py-2 px-4 rounded  hover:text-[#229799]">
              Sign In
            </button></a>
            <a href="/sign-up"><button className="bg-[#48CFCB] font-bold text-black py-2 px-4 rounded hover:bg-[#229799] " >
              Sign Up
            </button></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center min-h-96 bg-[#F5F5F5]">
        <div className="flex flex-col items-center my-12 px-6 md:px-12 lg:px-20 py-12">
          <h1 className="flex justify-center items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-bold text-black p-2 text-center">
            <Typewriter
              text="Welcome to "
              cursorColor="black"
              textStyle={{
                fontWeight: 'bold',
                fontSize: '2rem', // Adjusted for responsiveness
              }}
              startDelay={100}
              typeSpeed={100}
              hideCursorAfterText={true}
            />
            <span className="text-[#48CFCB] text-4xl sm:text-5xl md:text-6xl">
              My-Diary
            </span>
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus commodi excepturi veritatis laborum incidunt illum voluptate eveniet reprehenderit placeat quidem! Deserunt suscipit in dicta placeat quaerat.
          </p>
        </div>
      </div>


 
      <footer class="bg-black text-white py-6">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 My-Diary. All rights reserved.</p>
          <ul class="flex justify-center space-x-6 mt-4">
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Terms of Service</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
          </ul>
          <div class="mt-4">
            <a href="https://www.facebook.com" class="mx-2 text-gray-400 hover:text-white" aria-label="Facebook">Facebook</a>
            <a href="https://www.twitter.com" class="mx-2 text-gray-400 hover:text-white" aria-label="Twitter">Twitter</a>
            <a href="https://www.instagram.com" class="mx-2 text-gray-400 hover:text-white" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </footer>


  {/* <Notes/> */ }


      {/* <Notes/> */}

    </>
  )
}

export default Home
