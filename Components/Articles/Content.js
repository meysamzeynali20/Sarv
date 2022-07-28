import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";

const Content = () => {

    return <section className="basis-[60%]">
        <div className=" border-2 border-t-gray-200">
            <div className="relative group w-full h-[250px] lg:h-[350px]">
                <Image
                    src="/images/2.jpg"
                    className="object-cover"
                    layout={'fill'}
                />
                <div className="absolute inset-0 group-hover:h-full bg-[#ff000031] transition-[height] duration-[0.4s] ease-in-out overflow-hidden w-full h-0"></div>
            </div>
            <div className="flex flex-col gap-y-4 p-4">
                <h4>ویژه برنامه جهش تولید،شرکت وستادژ</h4>
                <hr />
                <div className="flex gap-x-6">
                    <div className="basis-[50%] flex gap-x-2">
                        <FontAwesomeIcon icon={faCalendar} className='text-red-600' />
                        <span>1399/10/30</span>
                    </div>
                    <div className="basis-[50%] flex gap-x-2 justify-end">
                        <FontAwesomeIcon icon={faCalendar} className='text-red-600' />
                        <span>1399/10/30</span>
                    </div>
                </div>
                <hr />
                <h6>تاریخ برگزاری 24 الی 27 دی ماه 1398</h6>
                <hr />
                <div className="place-self-center">
                    <Link href={'/'}>
                        <a>
                            <button type="button" className="bg-red-600 text-white px-8 py-3 rounded">
                                ادامه مطلب
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </section>
}

export default Content