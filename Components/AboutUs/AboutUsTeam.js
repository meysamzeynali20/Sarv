import Image from "next/image";
import Link from "next/link";

const AboutUsTeam = () => {

    const teams = [1, 2, 3]

    return <section>
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto my-28">
            <h6 className="col-span-full font-bold text-lg after:border-b-[2px] after:border-b-red-600 after:block after:w-[85px] after:mt-4">اعضای هیئت مدیره</h6>
            {teams?.map((i, index) => (
                <div key={index} className="border-2 border-t-gray-200 h-min">
                    <div className="relative w-full h-[250px] lg:h-[350px]">
                        <Image
                            src="/images/2.jpg"
                            className="object-cover"
                            layout={'fill'}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                        <Link href={'/'}>
                            <a>
                                <h4 className="font-bold">عادل شکرنیا عمران</h4>
                            </a>
                        </Link>
                        <hr />
                        <h6 className="opacity-[0.7]">مدیر عامل</h6>
                        <hr />
                        <h6 className="opacity-[0.7]">مدیر عامل</h6>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default AboutUsTeam