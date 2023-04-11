const Rick = ({items}) => {
   return (
       <div>
           <img src={items.image}/>
           <h2>{items.id}</h2>
           <h2>Name is - {items.name}</h2>
           <h2>Status - {items.status}</h2>
           <h2>Species - {items.species}</h2>
           <h2>Type - {items.type}</h2>
           <h2>Gender - {items.gender}</h2>
       </div>

   )
}
export default Rick;