const BookModel= require('../../schemas/BookDetailsSchema')

const addBook = async(req,res)=>{
    try {
        const data=req.body
        //console.log(data)
        
        // const bookCreate= await BookModel.create({title,author,image})
        const newBook = new BookModel({...data});
        await newBook.save();
        res.status(200).json({message:"book added", data})

    } catch (error) {
        //console.error('Error adding book:', error);
        res.status(404).json({ error: 'Internal server error' });
    }
}
const getBooklist= async (req,res)=>{
    try {
        const BookList=await BookModel.find()
        res.status(200).json({message:"book List", BookList})
    } catch (error) {
        res.status(404).send("page not found")
    }
}
module.exports={addBook,getBooklist}