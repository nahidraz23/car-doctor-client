import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import TableRow from "../../components/TableRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5300/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, {withCredentials: true})
            .then(data => {
                setBookings(data.data)
            })
    }, [url])

    const handleConfrimBooking = id => {
        const url = `http://localhost:5300/bookings/${id}`;

        axios.patch(url,
            { status: 'Confirmed' },
        )
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    const remaining = bookings.filter(item => item._id !== id)
                    const updated = bookings.find(item => item._id === id);
                    updated.status = 'Confirmed';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="min-h-[calc(100vh-350px)]">
            <div>
                <h1 className="text-3xl text-center font-bold">My Booking List</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th></th>
                                <th>Service Type</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <TableRow
                                    key={index} 
                                    booking={booking} 
                                    bookings={bookings} 
                                    setBookings={setBookings}
                                    handleConfrimBooking={handleConfrimBooking}
                                    ></TableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;