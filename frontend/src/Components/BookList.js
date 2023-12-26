import React from 'react'
import Navbar from './Navbar'
import data from '../data'

function BookList() {
  console.log(data)
  return (
    <div>
        <Navbar/>
        <div id='bookContainer' className='mt-[5vh]'>
          {data.map((book)=>(
            <div className='ml-[5vw] mb-[30px]'>
            <div className='max-h-[500px] w-full' ><img className=' object-contain' src={book.image }/></div>
            <h2 className='font-bold'>{book.title}</h2>
            <div><h3>{book.author}</h3></div>
            <div><h4>{book.rating}</h4></div>
            </div>
          ))}

          <button className='fixed bottom-[10vh] right-[5vw] font-bold text-3xl rounded bg-[#49375C] text-white p-4'>Add Book</button>
        </div>
    </div>
  )
}

export default BookList