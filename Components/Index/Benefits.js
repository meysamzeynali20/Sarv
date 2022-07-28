import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const Benefits = () => {

    const items = [1, 2, 3, 4]

    return <section className="my-28 max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-20">
            <h1 className="font-bold text-center px-96 text-2xl after:border-b-[2px] after:border-b-red-600 after:block after:mt-4">مزایای استفاده از ساپورت های تاسیساتی وستادژ</h1>
            <div className="flex gap-x-20">
                <div className="basis-[30%]">
                    <img src="/images/1.jpg" alt="pic" className="object-cover rounded h-[350px]" />
                </div>
                <div className="basis-[70%] grid grid-cols-2 gap-8">
                    {items?.map((i, index) => (
                        <div key={index} className="flex flex-col gap-y-4">
                            <div className="flex gap-x-4">
                                <FontAwesomeIcon icon={faArrowLeft} className='text-red-600 text-2xl' />
                                <h6 className="font-bold">تست و کنترل کیفیت</h6>
                            </div>
                            <p className="text-justify leading-7">فرایند کنترل کیفیت و بازرسی جوش قطعات در کارخانه توسط کارشناسان مجرب صورت گرفته و قطعات برای اساس مشخصات فنی در آزمایشگاه وستادژ بارگذاری و تست می شود</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Benefits