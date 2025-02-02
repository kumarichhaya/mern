function Card({record}) {

  
    return (
      <>
      <div className="col-4">
        <img src={record.largeImageURL} className="w-100 p-2" height={300}/>
        </div>
      </>
    )
  }
  export default Card;