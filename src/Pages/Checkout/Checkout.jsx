import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Checkout = () => {

    const service = useLoaderData();
    const { _id, title, price, services_id, facilities, img } = service;
    const {user} = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        
        const form = e.target;
        const firstName = form.fname.value;
        const lastName = form.lname.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            customerName: firstName + ' ' + lastName, 
            email, 
            phone,
            img, 
            services_id: _id,
            price: price,
            service_title: title
        };

        axios.post('http://localhost:5300/bookings', booking)
        .then(data => console.log(data.data))

        form.reset();
    }

    return (
        <div>
            <div className="my-10">
                <h1 className="text-center text-3xl font-bold">{title}</h1>
            </div>
            <div className="my-4">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <form onSubmit={handleBooking}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">First Name</label>
                                <input name="fname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Last Name</label>
                                <input name="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Phone</label>
                                <input name="phone" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Email</label>
                                <input name="email" type="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></input>
                            </div>
                        </div>
                        <div>
                            <textarea name="" cols="30" rows="10" className="w-full mt-5 rounded-2xl p-5" placeholder="Your Message"></textarea>
                        </div>
                        <input type="submit" value="Order Confirm" className="btn mt-5 w-full bg-red-600 border-none text-white"/>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Checkout;