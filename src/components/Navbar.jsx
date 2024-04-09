import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-12">
        
        <div className='logo font-bold text-white text-2xl'>
          <span className='text-purple-800'> &lt;</span>

          <span>Pass</span><span className='text-purple-500'>Manager/&gt;
          </span>


        </div>
        <button className='text-white bg-purple-800 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className='invert w-9 p-1' src="icons/github.svg" alt="github" />
          <span className='font-bold px-2'> GitHub</span>
        </button>
        </div>
    </nav>
  )
}

export default Navbar