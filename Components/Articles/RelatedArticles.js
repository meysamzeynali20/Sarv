import Link from "next/link"
import Image from "next/image"

const RelatedArticles = () => {

    const RelatedArticles = [1, 2, 3, 4]

    return <div className={`grid md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-10 order-1 lg:order-none bg-neutral-200 p-5 rounded`}>
        {RelatedArticles?.map((i, index) => (
            <div key={index} className="grid grid-cols-2 gap-6 lg:gap-10">
                <div className="flex flex-col gap-y-4">
                    <div>
                        <Link href={'/'}>
                            <a className="font-bold text-sm lg:text-base col-span-full">
                                تست
                            </a>
                        </Link>
                    </div>
                    <p className="text-xs lg:text-base leading-6 lg:leading-7 text-justify h-24 lg:h-20 overflow-hidden">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                </div>
                <div>
                    <div className="relative group w-full h-[120px] lg:h-[150px]">
                        <Image src="/images/1.jpg"
                            alt="pic"
                            className="rounded object-cover"
                            layout={'fill'}
                        />
                        <div className="absolute inset-0 group-hover:h-full bg-[#ff000031] transition-[height] duration-[0.4s] ease-in-out overflow-hidden h-0"></div>
                    </div>
                </div>
                <hr
                    className={`order-2 lg:order-none md:hidden col-span-full`}
                />
            </div>
        )
        )}
    </div>
}

export default RelatedArticles