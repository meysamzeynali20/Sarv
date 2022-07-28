import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faTelegram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const SubFooter = () => {

    const network = ['faInstagram', 'faTelegram', 'faYoutube']

    return <footer className="bg-[#171717] border-t-[#7f7f7f] border-t-[1px]">
        <div className="flex gap-x-6 items-center py-8 max-w-7xl mx-auto">
            <div className="basis-[70%] text-[#7f7f7f]">
                <span>شرکت <span className="text-red-600">وستادژ آسیا</span> © 1397 تمامی حقوق محفوظ می باشد. پیاده سازی توسط شرکت طراحی سایت پایدار سامانه</span>
            </div>
            <ul className="basis-[30%] flex gap-x-4 justify-end">
                {network?.map((i, index) => (
                    <li key={index}>
                        <Link href={'/'}>
                            <a>
                                <FontAwesomeIcon icon={faYoutube} className='text-red-600 text-2xl' />
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
}

export default SubFooter