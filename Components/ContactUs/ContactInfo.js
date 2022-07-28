import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"

const ContactInfo = () => {

    const tableitems = [1, 2, 3, 4, 5]

    return <table className="border-[2px] border-neutral-300 rounded w-full">
        <tbody>
            {tableitems?.map((i, index) => (
                <tr key={index} className='border-b-[2px] border-b-neutral-300'>
                    <td className="p-6">
                        <FontAwesomeIcon icon={faLocationPin} className='text-red-600' />
                    </td>
                    <td className="p-6 border-r-neutral-300 border-r-[2px]">آدرس: تهران، خیابان شهید کلاهدوز، پلاک 287، واحد 18 کدپستی: 1939834477</td>
                </tr>
            ))}
        </tbody>
    </table>
}

export default ContactInfo