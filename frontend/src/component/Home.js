import React, { useContext, useState, useEffect } from 'react'
import Notes from './Notes'
import Typewriter from 'react-typewriter-effect';


const Home = () => {

  const token = localStorage.getItem('token');


  return (
    <>
     <div className="bg-black p-4">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sticky">
    <div className="text-white text-2xl font-bold mb-4 sm:mb-0">
      My-Diary
    </div>
    <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
      <a href="/sign-in">
        <button className="bg-transparent text-[#48CFCB] font-bold border border-[#48CFCB] py-2 px-4 rounded hover:text-[#229799] w-full sm:w-auto">
          Sign In
        </button>
      </a>
      <a href="/sign-up">
        <button className="bg-[#48CFCB] font-bold text-black py-2 px-4 rounded hover:bg-[#229799] w-full sm:w-auto">
          Sign Up
        </button>
      </a>
    </div>
  </div>
</div>

<div className="flex justify-center min-h-96 bg-[#F5F5F5]">
  <div className="flex flex-col items-center my-8 px-6 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12">
    <h1 className="flex justify-center items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
      <Typewriter
        text="Welcome to "
        cursorColor="black"
        textStyle={{
          fontWeight: 'bold',
          fontSize: '2rem',
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

<footer className="bg-black text-white py-6">
  <div className="container mx-auto text-center px-4">
    <p className="text-sm sm:text-base">&copy; 2024 My-Diary. All rights reserved.</p>
    <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-sm sm:text-base">
      <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline">Terms of Service</a></li>
      <li><a href="#" className="hover:underline">Contact Us</a></li>
    </ul>
    <div className="flex justify-center mt-4 space-x-4">
      <a href="https://www.facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">Facebook</a>
      <a href="https://www.twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">Twitter</a>
      <a href="https://www.instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">Instagram</a>
    </div>
  </div>
</footer>


  {/* <Notes/> */ }

    </>
  )
}

export default Home
