import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const OrderModal = ({ part, refetch, setParts }) => {
  const { _id, name, quantity, price } = part;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [newQuantity, setNewQuantity] = useState(100);

  const handleOrder = (e) => {
    e.preventDefault();

    const address = e.target.address.value;
    const order = {
      orderId: _id,
      name,
      price: price * newQuantity,
      orderQuantity: newQuantity,
      address,
      user: user.email,
      userName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch(`${process.env.REACT_APP_serverLink}/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/dashboard/my-order");
        }
        refetch();
        setParts(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 justify-items-center mt-3 gap-4"
          >
            <input
              type="text"
              name="name"
              disabled
              placeholder={user?.displayName || ""}
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              type="email"
              name="email"
              disabled
              placeholder={user?.email || ""}
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <input
              onChange={(e) => setNewQuantity(e.target.value)}
              type="number"
              name="Oquantity"
              min="100"
              max="500"
              placeholder="Order quantity, minimum 100"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Your Address..."
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />

            <input
              disabled={!newQuantity || newQuantity > quantity}
              type="submit"
              value="order"
              className="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
