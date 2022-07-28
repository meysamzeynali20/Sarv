import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag } from "@fortawesome/free-solid-svg-icons"

const Products = () => {

    const pics = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return <section>
        <div className="grid grid-cols-3 gap-8 my-10  max-w-7xl mx-auto">
            {pics?.map((i, index) => (
                <div key={index} className='relative border-2 border-neutral-100'>
                    <img src="/images/1.jpg" alt="pic" className="object-cover w-full rounded" />
                    <div className="flex absolute bottom-0 border-t-[5px] border-t-red-600 bg-white w-full group">
                        <div className="basis-[20%] flex justify-center items-center bg-red-600">
                            <FontAwesomeIcon icon={faFlag} className='text-white p-4' />
                        </div>
                        <div className="basis-[80%] flex justify-center items-center">
                            <span>
                                سیستم ساپورت مدولار
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default Products