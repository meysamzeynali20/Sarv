import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slides = () => {

    const items = ['2.jpg', '2.jpg', '2.jpg']

    return <div>
        <Swiper
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {items?.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="relative grid lg:block h-[50vh] md:h-[65vh] lg:h-[73vh]">
                        <img
                            src={`/images/${item}`}
                            className="object-cover w-full h-full lg:object-top brightness-50"
                        />
                        <div
                            className='absolute flex flex-col gap-y-6 lg:gap-y-10 self-center justify-self-center lg:left-[10%] lg:bottom-[20%] text-center bg-[#00000036] p-10 rounded'
                        >
                            <h1 className="text-white text-xs md:text-lg lg:text-text-lg lg:leading-loose font-bold">
                                لورم ایپسوم متن ساختگی با
                            </h1>
                            <p className="text-white text-xs md:text-base lg:text-lg leading-8 lg:leading-10 text-center">
                                تست
                            </p>
                            <div className="justify-self-center">
                                <button className="text-xs lg:text-base rounded text-white bg-red-600 py-2 px-6 md:py-4 md:px-12">
                                    تست
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
};

export default Slides;