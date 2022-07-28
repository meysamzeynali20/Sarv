import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag } from "@fortawesome/fontawesome-free-regular"
import { faLocation } from "@fortawesome/free-solid-svg-icons"
import {
    faInstagram,
    faTelegram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const FirstNav = () => {

    return <header className="bg-[#16242e] py-4">
        <div className="flex gap-x-4 items-center max-w-7xl mx-auto">
            <ul className="basis-[50%] flex gap-x-4 items-center">
                <li className="flex gap-x-4 items-center">
                    <FontAwesomeIcon icon={faFlag} className='text-white' />
                    <Link href={'#'}>
                        <a className="text-[#8c8c8c]">EN</a>
                    </Link>
                </li>
                <li className="flex gap-x-4 items-center">
                    <FontAwesomeIcon icon={faFlag} className='text-white' />
                    <Link href={'#'}>
                        <a className="text-[#8c8c8c]">فا</a>
                    </Link>
                </li>
                <li className="flex gap-x-4 items-center">
                    <FontAwesomeIcon icon={faLocation} className='text-red-600' />
                    <span className="text-[#8c8c8c]">وستادژ نگاهی نو به دنیای تاسیسات</span>
                </li>
            </ul>
            <div className="basis-[50%]">
                <ul className="flex gap-x-4 items-center justify-end text-[#8c8c8c] text-xl">
                    <li>
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faInstagram} className="hover:text-red-600" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faTelegram} className="hover:text-red-600" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faYoutube} className="hover:text-red-600"/>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}

export default FirstNav