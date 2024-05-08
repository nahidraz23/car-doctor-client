import axios from "axios";

const TableRow = ({ booking, bookings, setBookings, handleConfrimBooking }) => {

    const { _id, img, service_title, email, price, customerName, status } = booking;

    const handleDelete = id => {
        const url = `http://localhost:5300/bookings/${id}`;

        axios.delete(url)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    const remaining = bookings.filter(item => item._id !== id);
                    setBookings(remaining);
                }
            })
    }

    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-20 h-20 rounded-xl">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td><div className="font-bold">{service_title}</div></td>
            <td><div className="font-bold">{customerName}</div></td>
            <td>
                <span className="badge badge-ghost badge-md">{email}</span>
            </td>
            <td className="font-bold text-blue-600">${price}</td>
            <th>
                {
                    status === 'Confirmed' ?
                        <>
                            <span className="badge badge-success">Confirmed</span>
                        </>
                        :
                        <button onClick={() => handleConfrimBooking(_id)} className="btn  btn-md">Click to confrim</button>
                }
            </th>
        </tr>
    );
};

export default TableRow;