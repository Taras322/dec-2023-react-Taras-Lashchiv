const Rick = ({info}) => {
   return (
       <div>
           <img src={info.image} alt=''/>
           <h2>{info.id}</h2>
           <h2>Name is - {info.name}</h2>
           <h2>Status - {info.status}</h2>
           <h2>Species - {info.species}</h2>
           <h2>Type - {info.type}</h2>
           <h2>Gender - {info.gender}</h2>
       </div>

   )
}
export default Rick;