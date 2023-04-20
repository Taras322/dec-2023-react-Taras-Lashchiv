import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";

const Posts = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null)
    useEffect(() => {
        console.log('qwd');
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {
                    setPost(value)
            });

    },[postId]);
    return (
        <div>
            <div>
            {
                post !== null ? post.id:''
            }
            </div>
            <div>
                {
                    post !== null ? post.title:''
                }
            </div>
            <div>
                {
                    post !== null ? post.body:''
                }
            </div>
        </div>
    );
};


export default Posts;