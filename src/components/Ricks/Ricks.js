import Rick from "../Rick/Rick";
function Ricks({ricks}) {
    return (
        <div>
            {
                ricks.map((value,index) => (<Rick items={value} key={index}/>))
            }
        </div>
    )
}
export default Ricks;