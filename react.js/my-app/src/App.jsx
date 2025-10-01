import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className="flex justify-around items-center h-20 text-black font-bold border-b-2 border-black-300  bg-gray-200">

        <a href="#" className="clone hover:underline ">Home</a>
        <a href="#" className="clone hover:underline ">About</a>
        <a href="#" className="clone text-white hover:underline ">Spi video</a>
        <a href="#" className="clone hover:underline ">See my comics</a>
     
      <div className="absolute left-1/2 transform -translate-x-1/2"><img
          src="https://images4.alphacoders.com/617/617306.png"
          alt="Spiderman Logo"
          className=" w-1000 h-300 object-contain"
    
        />
      </div>
    </div>



      <div className="relative flex justify-center items-center bg-gray-200">
    
        <img 
          src="http://wallpapercave.com/wp/wc1729757.jpg" 
          alt="Spiderman Wallpaper" 
          className="w-full h-[700px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg text-black-200">Welcome to my comic world</h1>
          <h2 className="text-2xl drop-shadow-lg">Enjoy the spider comics</h2>
        </div>
      </div>


      <div className="w-full h-190 bg-gray-200 flex justify-center items-center">

       <img 
          src="https://images7.alphacoders.com/500/500804.jpg" 
          alt="Spiderman Comic" 
          className="w-full h-[px] object-cover absolute"
        />
      


        <marquee className="text-black text-9xl font-semibold" behavior="scroll" direction="right" scrollamount="20">
        <p className="text-black text-9xl font-semibold outline w-480 2px outline-red-500 p-7 bg-white/50">
          AMAZING SPIDERMAN COMICS
        </p>
        </marquee>
      </div>

    <div className="grid w-full min-h-screen top-20 grid-cols-3 gap-4 p-6 bg-gray-200">

  <div className="bg-gray-300 p-4">Comic 1</div>
  <div className="bg-gray-300 p-4">Comic 2</div>
  <div className="bg-gray-300 p-4">Comic 3</div>
  <div className="bg-gray-300 p-4">Comic 4</div>
  <div className="bg-gray-300 p-4">Comic 5</div>
  <div className="bg-gray-300 p-4">Comic 6</div>
  <div className="bg-gray-300 p-4">Comic 7</div>
  <div className="bg-gray-300 p-4">Comic 8</div>
  <div className="bg-gray-300 p-4">Comic 9</div>
</div>




    </div>
  )
}

export default App
