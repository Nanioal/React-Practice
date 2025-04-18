import Header from './Components/Header';
import Entry from './Components/Entry';
import data from './data';  


export default function App() {
  const traveldata = data.map((journal)=>{
    return (
      <Entry
        key = {journal.id}
        title = {journal.title}
        country = {journal.country}
        date = {journal.dates}
        description = {journal.text}
        imageUrl = {{src: journal.img.src, alt: journal.img.alt}}
        locationLink = {journal.googleMapsLink}
      /> 
    )

  })
  return(
    <>
    <Header
      title = "Travel Journal"
      TravelIcon = {{
        src: "https://th.bing.com/th/id/OIP.BQCx-fd1vwBZC9aHhQjoaQHaF7?w=231&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        alt: "globe picture"
      }}
      
    />

    <main>{traveldata}</main>
    </>
      
  )
}