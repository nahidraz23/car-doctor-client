import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {

    const { _id, title, img, price } = item;

    return (
        <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover w-full h-56" src={img} alt="avatar" />

            <div className="p-5 space-y-2">
                <a href="#" className="block text-xl font-bold text-gray-800" role="link">{title}</a>
                <div className="flex justify-between items-center ">
                    <h1 className="text-red-500 text-xl font-bold">Price: ${price}</h1>
                    <h2 className="btn btn-circle">
                        <Link to={`/checkout/${_id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;