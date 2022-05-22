import React from 'react';

const OrderModal = ({ part }) => {
    const { _id, name, quantity, price } = part;
    // const [user] = useAuthState(auth);
    // const formatedDate = format(date, 'PP');

    // const handleBooking = e => {
    //     e.preventDefault();
    //     const slot = e.target.slot.value;
    //     const booking = {
    //         treatmentId: _id,
    //         treatment: name,
    //         date: formatedDate,
    //         slot,
    //         price,
    //         patient: user.email,
    //         patientName: user.displayName,
    //         phone: e.target.phone.value
    //     }

    //     fetch('https://doctors-portal-hero.herokuapp.com/booking', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 toast(`Appointment is set, ${formatedDate} at ${slot}`)
    //             }
    //             else {
    //                 toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
    //             }
    //             refetch();
    //             setTreatment(null);
    //         });

    // }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form className='grid grid-cols-1 justify-items-center mt-3 gap-4'>
                        <input type="text" disabled className="input input-bordered input-primary w-full max-w-xs" />

                        {/* <input type="text" name='name' disabled placeholder={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />

                        <input type="email" name='email' disabled placeholder={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" /> */}

                        <input type="number" name='Oquantity' min="100" placeholder="Order quantity, minimum 100" className="input input-bordered input-primary w-full max-w-xs" />

                        <input type="text" name='address' placeholder="Your Address..." className="input input-bordered input-primary w-full max-w-xs" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />

                        <input type="submit" value="order" className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;