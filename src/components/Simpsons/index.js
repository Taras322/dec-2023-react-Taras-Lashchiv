import Simpson from "../Simpson";
import {simpsonsData} from "../../helpers/constants";

const Simpsons = () => {
    return (
        <div>
            {
                simpsonsData.map((simpson, index) => (<Simpson info={simpson} key={index}/>))
            }
        </div>
    )
}
export default Simpsons;