import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-4 cols-gap-4'>
            {
                parts.slice(0, 6).map(part => <Part
                    key={part._id}
                    part={part}
                ></Part>)
            }
        </div>
    );
};

export default Parts;