import React, {useEffect, useState} from 'react';
import {Todo} from "../todos/todo/Todo";
import Album from "./album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value]);
            });

    }, []);
    return (
        <div>
            {
            albums.map(value => <Album value={value} key={value.id}/>)
            }
        </div>
    );
};

export default Albums;