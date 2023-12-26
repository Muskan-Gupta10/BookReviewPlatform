import React from 'react'

const AddBook = () => {
    const handleSubmit=()=>{

    }
  return (
    <div>
        <form onSubmit={handleSubmit()}>
            <div>
            <label for="title"> Title : </label>
            <input className="border border-black" type="text" id="title" placeholder='Title' required/>
            </div>
            <div>
            <label for="author"> Author : </label>
            <input className="border border-black" type="text" id="author" placeholder='Author' required/>
            </div>
            <div>
            <label for="image"> Cover Image : </label>
            <input className="border border-black"  type="text" id="image" placeholder='Image URL' required/>
            </div>
            <div>
            <button className="border border-black"  type="submit">Add Book</button>
            </div>
        </form>
    </div>
  )
}

export default AddBook