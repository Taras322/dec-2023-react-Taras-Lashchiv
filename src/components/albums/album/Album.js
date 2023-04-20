import React from 'react';

const Album = ({value}) => {
    return (
        <div>
            {value.id} {value.title}
        </div>
    );
};

export default Album;