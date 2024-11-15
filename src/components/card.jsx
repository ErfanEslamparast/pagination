const Card = ({name,mobile,skills,email,imageUrl})=>{
    return (
        <>
        <div className="card rounded-4 shadow-lg">
            <div className="card-body text-center">

        <img className="rounded-circle mt-2 " src={imageUrl} width='130px'/>
        <h4 className="fs-4 my-3">{name}</h4>
        <p className="fw-bold text-muted my-4">{skills}</p>
        <p className="text-muted my-4">{email}</p>
        <p className="fs-4 fw-bold">{mobile}</p>
          
            </div>
        </div>
        
        </>
    )
}
export default Card;