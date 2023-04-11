import Rick from "../Rick";
import {ricks} from "../../helpers/constants";

const Ricks = () => {
    return (
        <div>
            {
                ricks.map((value,index) => (<Rick items={value} key={index}/>))
            }
        </div>
    )
}
export default Ricks;