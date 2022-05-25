import React from 'react';

const ManageOrder = ({ order }) => {
    const deleteOrder = () => {
        alert("Sorry Order Can't Delete")
    }
    return (
        <tr>
            <td>{order?.name.slice(0, 20)}</td>
            <td>{order?.user}</td>
            <td>{order?.orderQuantity}</td>
            <td>{order?.price}</td>
            <td><button onClick={deleteOrder} className='btn btn-xs bg-red-500 text-white'>Delete</button></td>
        </tr>
    );
};

export default ManageOrder;