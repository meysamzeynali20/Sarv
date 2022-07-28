import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { theme } from "../../tailwind.config";

const TopProducts = () => {

    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16]

    return <section className="container mx-auto px-5 md:px-10 lg:px-0 my-10 lg:my-32">
        <h1 className="font-bold lg:mt-32 mb-8">جدیدترین محصولات</h1>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerGroup={1}
            slidesPerView={1.2}
            spaceBetween={10}
            breakpoints={{
                [md]: {
                    slidesPerView: 2.4,
                    spaceBetween: 15
                },
                [lg]: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
            }}
            className="mySwiper">
            {items?.map((item, index) => (
                <SwiperSlide key={index} className=" flex flex-col items-center gap-y-6 border-[2px] rounded pb-4">
                    <img src="/images/1.jpg" alt="pic" className="object-cover rounded w-full h-[200px] bg-neutral-100" />
                    <div className="flex flex-col gap-y-6 items-center px-4">
                        <h4> متن ساختگی متن ساختگی</h4>
                        <p className="text-red-600 text-justify leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
}

export default TopProducts