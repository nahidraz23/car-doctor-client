import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5300/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-orange-600">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 justify-items-center">
                {
                    services.map((item, index) => <ServiceCard key={index} item={item}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;