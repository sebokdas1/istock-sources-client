import React from 'react';

const MakingAdmin = ({ user, index, refetch, setRMUser }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://istock-sources-server.onrender.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert(`Failed to make an admin`)
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert(`successfully made an admin`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs text-white">Make Admin</button>}</td>
            <td className='card-actions'>
                <label className='btn btn-xs bg-red-500 text-white' htmlFor="user-delete-modal"
                    onClick={() => setRMUser(user)}
                >remove</label>
            </td>
        </tr>
    );
};

export default MakingAdmin;