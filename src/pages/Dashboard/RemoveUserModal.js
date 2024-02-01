import React, { useState } from "react";

const RemoveUserModal = ({ rmUser, setRMUser }) => {
  const { email } = rmUser;
  const [confirm, setConfirm] = useState("");

  const handleUserRemove = (e) => {
    e.preventDefault();
    const url = `https://istock-sources-server.onrender.com/user/admin/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setRMUser(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="user-delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="user-delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg ">
            please type <small className="text-red-500">remove</small> to delete{" "}
            <span className="text-green-500">{email}</span>
          </h3>

          <form
            onSubmit={handleUserRemove}
            className="grid grid-cols-1 justify-items-center mt-3 gap-4"
          >
            <input
              onChange={(e) => setConfirm(e.target.value)}
              type="text"
              name="Cconfirm"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />

            <input
              disabled={confirm !== "remove"}
              type="submit"
              value="drop"
              className="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemoveUserModal;
