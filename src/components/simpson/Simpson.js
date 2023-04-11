const Simpson = ({items})=> {
    return (
        <div>
            <div>
                <h2>{items.name} {items.surname}</h2>
                <h3>Age - {items.age}</h3>
                <img src={items.photo}/>
                <p>{items.info}</p>
            </div>
        </div>
    );
}
export default Simpson;
