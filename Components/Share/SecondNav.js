import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/fontawesome-free-solid"
import { faPlane } from "@fortawesome/fontawesome-free-solid"
import { faFax } from "@fortawesome/fontawesome-free-solid"

const SecondNav = () => {

    return <header>
        <div className="flex gap-x-10 max-w-7xl mx-auto py-4">
            <div className="basis-[5%] relative">
                <Link href={'/'}>
                    <a>
                        <Image src="/images/logo.png" alt="logo" className="object-contain" layout="fill" />
                    </a>
                </Link>
            </div>
            <div className="basis-[95%] flex justify-end items-center ">
                <div className="flex gap-x-8 items-center">
                    <div className="flex justify-center items-center border-[1.8px] border-neutral-300 rounded p-4">
                        <FontAwesomeIcon icon={faPhone} className='text-red-600' />
                    </div>
                    <div className="flex flex-col gap-y-1 text-red-600">
                        <span>تلفن تماس</span>
                        <span className="text-[#8c8c8c]">021-72946000</span>
                    </div>
                    <div className="flex justify-center items-center border-[1.8px] border-neutral-300 rounded p-4">
                        <FontAwesomeIcon icon={faFax} className='text-red-600' />
                    </div>
                    <div className="flex flex-col gap-y-1 text-red-600">
                        <span>فکس</span>
                        <span className="text-[#8c8c8c]">021-72946000</span>
                    </div>
                    <div>
                        <div className="flex flex-col gap-y-2 bg-green-500 text-white rounded py-2 px-9">
                            <div className="flex gap-x-2 items-center text-[#8c8c8c]">
                                <FontAwesomeIcon icon={faPlane} />
                                <Link href={'/'}>
                                    <a>ثبت نام</a>
                                </Link>
                            </div>
                            <Link href={'/'}>
                                <a >ورود مشتری</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default SecondNav