import React, {useEffect, useState} from 'react';
import Comment from "./comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value]);
            })
    },[])

    return (
        <div>
            {
                comments.map(value => <Comment value={value} key={value.id}/>)
            }
            <h4>comments posts</h4>
            <Outlet/>
        </div>
    );
};

export default Comments;