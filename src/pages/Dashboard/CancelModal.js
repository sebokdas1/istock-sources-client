import React, { useState } from "react";

const CancelModal = ({ order, setOrder }) => {
  const { _id, name } = order;
  const [confirm, setConfirm] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_serverLink}/order/${_id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="cancel-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="cancel-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg ">
            you want to cancel your order{" "}
            <span className="text-green-500">{name.slice(0, 20)}</span> type{" "}
            <small className="text-red-500">cancel</small> to confirm
          </h3>

          <form
            onSubmit={handleCancel}
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
              disabled={confirm !== "cancel"}
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

export default CancelModal;
