import React from 'react';


const Todo = ({value}) => {
    return (
        <div>
                {value.id} {value.title}
        </div>
    );
};

export {Todo};