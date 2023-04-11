import Simpson from "../simpson/Simpson";

function Simpsons({simpsons}) {
    return (
        <div>
            {
                simpsons.map((value, index) => (<Simpson items={value} key={index}/>))
            }
        </div>
    )
}
export default Simpsons;