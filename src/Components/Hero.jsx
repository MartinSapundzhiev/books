import React from "react";

const Hero = () => {
  

  return (
    <div className="w-full h-screen"> 
     <img className="top-0 left-0 w-full h-screen object-cover" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
       <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
              <p>All Books</p>
              <h1 className="font-bold text-5xl md:7xl drop-shadow-2xl">Library</h1>
              <p className="maw-w-[600px] drop-shadow-2xl py-2 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero soluta eos perferendis consequuntur blanditiis laudantium ratione neque sequi aspernatur dolorum?</p>
              <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-500">Subscription</button>
            </div>
        </div>
     </div>
     );
}

export default Hero;