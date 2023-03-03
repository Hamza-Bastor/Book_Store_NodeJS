import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBookById } from "../../services/books_service"

function BookDetail(){
    const [book,setBook]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        getBook()// eslint-disable-next-line
    }, [])
   async function getBook(){
        const result=await getBookById(id)
        setBook(result.data)

    }
    return <div className={"container"}>
        <div>
        <div className="container mt-3 py-2">
    <div className="row">
      <div className="col-md- col-lg-6 col-xl-4">
        <div className="card text-black">
          <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-digital-illustration-and-vector-clip-art-of-single-book-png-image_6096537.png"
            className="card-img-top" alt="Apple Computer"/>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{book.name}</h5>
              <p className="text-muted mb-4">{book.description}</p>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <span>ISBN</span><span>{book.isbn}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Author</span><span>{book.author}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Editor</span><span>{book.editor}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Publication Date</span><span>{book.publication_date}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span><b>Price</b></span><span><b>{book.price} DH</b></span>
            </div>
          </div>
        </div>
      </div>
    </div>      
    </div>
</div>
    </div>
}

export default BookDetail 