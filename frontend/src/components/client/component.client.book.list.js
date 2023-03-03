import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../../services/books_service";
function BookListClient(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
        getBooks()
     }, [])
     async function getBooks(){
        const result=await getAllBooks()
        setBooks(result.data)
    }
    return (
        <>
                <h1>Our Books</h1>
        {books.map((elem,index)=>{
            return <div key={index}>
                
  <div className="container mt-3 py-2">
    <div className="row">
      <div className="col-md- col-lg-6 col-xl-4">
        <div className="card text-black">
          <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-digital-illustration-and-vector-clip-art-of-single-book-png-image_6096537.png"
            className="card-img-top" alt="Apple Computer" />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{elem.name}</h5>
              <p className="text-muted mb-4">{elem.description}</p>
            </div>
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span><b>Price</b></span><span><b>{elem.price} DH</b></span>
            </div>
            <div className="d-flex justify-content-between">
                <span></span><span><Link to={`/books/${elem._id}`}><button className="btn btn-primary mt-2">Detail</button></Link></span>
              </div>
          </div>
        </div>
      </div>
  
    </div>
</div>

    
            </div>
        })}
        </>
    )
}

export default BookListClient