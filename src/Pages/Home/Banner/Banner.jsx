import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full lg:h-[600px] " />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide6" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full lg:h-[600px]" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide1" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full lg:h-[600px]" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide2" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full lg:h-[600px]" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide3" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full lg:h-[600px]" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide4" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full lg:h-[600px]" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                    <div className='flex ml-10 flex-col w-1/3 justify-center h-full lg:gap-8 text-white'>
                        <h2 className='lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-10 gap-8">
                    <a href="#slide5" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-lg bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;