import React from 'react'

const MyPens = () => {
  return (
    <div>

      <div className='text-gray-500 py-2'>
        SORT BY <select className='bg-black-700'>
          <option selected>Relevance & Popularity</option>
          <option>Newset First</option>
        </select> &nbsp; &nbsp;

        SEARCH DEPTH <select className='bg-black-700'>
          <option selected>Everything</option>
          <option>Title & Description</option>
          <option>Code Only</option>  &nbsp; &nbsp;

          INCLUDE FORKS? 

        </select>
      </div>


      <div className='bg-gray-800 text-center w-[90%] mx-auto mt-6 mb-32 py-2'>
        Enter a search term above.

      </div>    </div>
  )
}

export default MyPens
