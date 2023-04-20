import React from 'react';
import {useNavigate} from "react-router-dom";


const Comment = ({value}) => {
    const navigate = useNavigate()

    return (
        <div>

            {value.id} {value.name}
            <button onClick={()=>{
                navigate(value.postId.toString())
            }
            }>post of comment</button>

        </div>
    );
};

export default Comment;