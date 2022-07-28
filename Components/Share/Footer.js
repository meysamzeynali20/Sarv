import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowLeft,
    faCalendar,
    faLocationPin,
    faPhone,
    faFax,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const Footer = () => {

    const links = [1, 2, 3, 4, 5, 6, 7, 8]

    return <footer className="bg-[#171717]">
        <div className="grid grid-cols-4 gap-10 py-14 text-[#7f7f7f] max-w-7xl mx-auto">
            <div className="flex flex-col gap-y-6">
                <div className="relative h-[50px]">
                    <Image src={'/images/logo.png'}
                        alt={'pic'}
                        className='object-contain'
                        layout={'fill'}
                    />
                </div>
                <p className="text-justify leading-8">
                    وستادژ نخستین تولید کننده نسل نوین ساپورت ها و نگهدارنده های تاسیساتی در ایران دارنده ایزو 9001 ، 18001 و 14001 است.
                </p>
                <div className="relative h-[100px]">
                    <Image src={'/images/validate.png'}
                        alt={'pic'}
                        className='object-contain'
                        layout={'fill'}
                    />
                </div>
            </div>
            <div>
                <h4 className="text-white relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">راه های ارتباطی</h4>
                <hr className="border-[#7f7f7f]" />
                <ul className="grid grid-cols-2 gap-4 mt-6">
                    {links?.map((i, index) => (
                        <li key={index} className="flex gap-x-3 items-center ">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <Link href={'/'}>
                                <a className="hover:text-red-600">تست</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-white  relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">آخرین اخبار</h4>
                <hr className="border-[#7f7f7f]" />
                <div className="flex flex-col gap-y-6 mt-6">
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <Link href={'/'}>
                                <a className="text-white">متن تستسی</a>
                            </Link>
                        </div>
                        <div className="flex gap-x-2">
                            <span>1400/05/12</span>
                            <FontAwesomeIcon icon={faCalendar} className='text-red-600' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <Link href={'/'}>
                                <a className="text-white">متن تستسی</a>
                            </Link>
                        </div>
                        <div className="flex gap-x-2">
                            <span>1400/05/12</span>
                            <FontAwesomeIcon icon={faCalendar} className='text-red-600' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-white relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">راه های ارتباطی</h4>
                <hr className="border-[#7f7f7f]" />
                <div className="flex flex-col gap-y-6">
                    <div className="flex gap-x-4 items-center mt-6">
                        <FontAwesomeIcon icon={faLocationPin} className='text-red-600' />
                        <span>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <FontAwesomeIcon icon={faPhone} className='text-red-600' />
                        <span>
                            02172946000 - 02122549965
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <FontAwesomeIcon icon={faFax} className='text-red-600' />
                        <span>
                            22571479
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <FontAwesomeIcon icon={faEnvelope} className='text-red-600' />
                        <span>
                            info@vestadezh.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer