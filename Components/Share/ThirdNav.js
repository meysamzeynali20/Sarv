import Link from "next/link"
import { MenuItems } from 'Share'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/fontawesome-free-solid"

const ThirdNav = () => {

    return <header className="bg-[#16242e] sticky top-0 z-10">
        <div className="flex gap-x-6 max-w-7xl mx-auto">
            <ul className="basis-[88%] flex text-white">
                <MenuItems />
            </ul>
            <div className="basis-[12%] flex gap-x-2 items-center justify-center bg-red-600 text-white hover:bg-blue-600 rounded-l">
                <FontAwesomeIcon icon={faPhone} />
                <Link href={'/'}>
                    <a>سبد خرید</a>
                </Link>
            </div>
        </div>
    </header>
}

export default ThirdNav