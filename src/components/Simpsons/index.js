import Simpson from "../Simpson";
import {simpsons} from "../../helpers/constants";

const Simpsons = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) => (<Simpson info={simpson} key={index}/>))
            }
        </div>
    )
}
export default Simpsons;