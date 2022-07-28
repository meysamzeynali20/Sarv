import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const LatestProjects = () => {

    const items = [1, 2, 3, 4, 5, 7]

    return <section className="bg-[#252525] my-28 py-10">
        <Swiper
            className="mySwiper max-w-7xl mx-auto"
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {items?.map((i, index) => (
                <SwiperSlide>
                    <div key={index} className="h-min">
                        <div className="relative group w-full h-[250px] lg:h-[350px]">
                            <Image
                                src="/images/2.jpg"
                                className="object-cover rounded"
                                layout={'fill'}
                            />
                            <div className="flex items-end justify-center  absolute inset-0 group-hover:h-full bg-[#ff01013b] transition-[height] duration-[0.4s] ease-in-out overflow-hidden w-full h-0">
                                <h6 className="text-white p-10">متن تستی</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
}

export default LatestProjects