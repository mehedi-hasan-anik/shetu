import React from 'react';

const AdvertiseItem = ({image}) => {
    return (
        <div >
            <a href="/"><img src={image} className="img-fluid" alt="" /></a>
        </div>
    );
};

export default AdvertiseItem;