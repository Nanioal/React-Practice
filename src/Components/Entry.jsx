export default function Entry(props) {
    return (
         
            <article className="entry-container">
                <div className="Img-container">
                    <img className="Img" src={props.imageUrl.src} alt={props.imageUrl.alt} />
                </div>
            <div className="info-container">
                <img className="location-icon" src="src\assets\marker.png" alt="Marker Icon" />
               <span className="country">{props.country}</span> < br/>
               <a href = {props.locationLink} className="location-link">View on Google Maps</a>
                <h1 className="title">{props.title}</h1>
                <p className="Japan-Date">{props.date}</p>
                <p className="description">{props.description}</p>
                </div>
            </article>
    
    );
}