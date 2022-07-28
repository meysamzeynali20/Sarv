import Link from "next/link"
import { MenuItemsChildren } from 'Share'

const MenuItems = () => {

    const links = [
        {
            id: 1,
            url: '#',
            urltitle: 'خانه'
        },
        {
            id: 1,
            url: '#',
            urltitle: 'دسته بندی'
        },
        {
            id: 1,
            url: '#',
            urltitle: 'ضمانت'
        },
        {
            id: 1,
            url: '#',
            urltitle: 'درباره ما'
        },
        {
            id: 1,
            url: '#',
            urltitle: 'تماس با ما'
        },
    ]

    return <>
        {links?.map((i) => (
            <li key={i.id} className='relative group'>
                <Link href={i.url}>
                    <a className="inline-block py-8 pl-16 hover:text-red-600">{i.urltitle}</a>
                </Link>
                <div className="hidden absolute z-20 w-[200px] rounded-b-lg bg-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] group-hover:block">
                    <MenuItemsChildren />
                </div>
            </li>
        ))}
    </>
}

export default MenuItems