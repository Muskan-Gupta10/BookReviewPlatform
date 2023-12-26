import React,{useState} from 'react'

const AddReview = () => {


  const [data, setData] = useState({
    username:"",
    rating:"",
    comment:''
  })
  const handleInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setData({...data,[name]:value})//[name] means we are sending dynamic i/p of name eg. username:value rating:value etc
  }

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(data)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name"> Username : </label>
            <input name="username" value={data.username} onChange={handleInput} className="border border-black" type="text" id="name" placeholder='username' required/>
            </div>
            <div>
            <label htmlFor="rating"> Rating : </label>
            <input name="rating" value={data.rating}  onChange={handleInput} className="border border-black w-[15vw]" type="number" max={5} min={1} id="rating" placeholder='give rating out of 5' required/>
            </div>
            <div>
            <label htmlFor="comment"> Comments : </label>
            <input name="comment" value={data.comments} onChange={handleInput}  className="border border-black w-[10vw]"  type="text" id="comment" placeholder='add comments' required/>
            </div>
            <div>
            <button className="border border-black"  type="submit">Post Review</button>
            </div>
        </form>
    </div>
  )
}

export default AddReview