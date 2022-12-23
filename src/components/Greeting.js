import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  function handleClick() {
    // setNamw
  }

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div className='flex flex-col space-y-5 mt-8 w-full h-full items-center justify-center'>
      <div className="w-full h-full flex justify-center items-center space-x-3">
        <span className='text-lg my-auto'>Enter your name here:</span>
        <div class="border-blue-200 border-2 p-2 rounded-md">
          <input type="text" name="name" id="name" className="bg-transparent w-full h-full text-base focus:outline-none" value={name} onChange={handleChange} maxLength={15} />
        </div>
      </div>
      {/* <button className='w-28 h-10 bg-cyan-500 mx-4 mt-5 text-slate-100 font-bold rounded-sm transition-all hover:scale-95 hover:bg-slate-700 hover:rounded-md focus:ring-4 focus:ring-cyan-400' onClick={handleClick}>Click me!</button> */}
      <div className="main__greeting mx-4">
        {name !== '' ?
          <h3 className="greet__text text-lg">Hello <span className='font-serif text-xl font-bold'>{name}</span>, from {name === 'Tvisha' || name === 'Tvisha Jadhav' ? <span className='font-serif text-xl font-bold'>ANISH</span> : <span className='font-serif text-xl font-bold'>Me!</span>}</h3> : <h3>Enter your name first!</h3>
        }
      </div>
    </div>
  )
}

export default Greeting