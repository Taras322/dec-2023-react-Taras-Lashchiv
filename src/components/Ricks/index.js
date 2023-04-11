import Rick from "../Rick";
import {ricksData} from "../../helpers/constants";

const Ricks = () => {
    return (
        <div>
            {
                ricksData.map((rick,index) => (<Rick info={rick} key={index}/>))
            }
        </div>
    )
}
export default Ricks;