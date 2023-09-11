import React from "react";

const Offers = () =>{
  return(
     <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
          <div className=" grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
             <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
             <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
             <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80" alt="" />
             <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <h3 className="font-bold text-5xl md:text-6xl">Best sellar</h3>
            <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident!</p>
            <p className="pb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe esse quam in facere doloremque assumenda delectus excepturi. Nostrum, impedit tempore!</p>
          <div>
            <button className="border-black mr-4 hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-500">Learn More</button>
            <button className="bg-black text-white border-black hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300 hover:text-black">Order</button>
          </div>
          </div>
     </div>
  )
}

export default Offers;