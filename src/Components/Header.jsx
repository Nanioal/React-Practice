export default function Header(props){
    return(
        <nav className="header">
            <img className="logo" src={props.TravelIcon.src} alt = {props.TravelIcon.alt} />
            <span>{props.title}</span>
        </nav>
    )
}