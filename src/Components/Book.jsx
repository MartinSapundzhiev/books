import React from "react";

const Book = () =>{
  return(
    <div className='max-w-[1400px] h-[630px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] pb-6 md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
          <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
             <h3 className="text-2xl font-bold">Top Books</h3>
             <p className="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sit ipsum vero in tempore placeat.</p>
          </div>
          <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <img  className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
    </div>
  )

}

export default Book;