import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className='w-1/2 relative'>
                        <img src={person} alt="" className='w-3/4 h-[480px] rounded-2xl'/>
                        <img src={parts} alt="" className='w-1/2 h-[335px] absolute -bottom-16 right-28 border-8 border-white rounded-2xl'/>
                    </div>
                    <div className='w-1/2 space-y-6 '>
                        <h1 className="text-2xl font-bold text-orange-600">About</h1>
                        <p className="text-5xl font-bold">We are qualified & of experience in this field</p>
                        <p className="text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn bg-orange-600 border-none text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;