import Link from "next/link"
import { Fragment } from "react"

const MenuItemsChildren = () => {

    const items = [1, 2, 3, 4, 5, 6]

    return <ul className=" text-black">
        {items?.map((item, index) => (
            <Fragment key={index}>
                <li key={index} className={`group hover:bg-red-500 ${index === items.length - 1 && " rounded-b-md"} hover:text-white`}>
                    <Link href={'/'}>
                        <a className="inline-block p-4">تست</a>
                    </Link>
                </li>
                <hr className={`${index === items.length - 1 && "hidden"}`} />
            </Fragment>
        ))}
    </ul>
}

export default MenuItemsChildren