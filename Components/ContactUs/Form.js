import {
    InputText,
    ContactInfo
} from 'ContactUs'
import { Fragment } from 'react'

const Form = () => {
    const inputtext = [1, 2, 3]
    return <form>
        <div className="flex gap-x-28 max-w-7xl mx-auto my-20">
            <div className="basis-[45%] flex flex-col gap-y-6">
                <h6 className="font-bold text-xl after:border-b-[3px] after:border-b-red-600 after:block after:mt-4 after:w-[50px]">با ما در ارتباط باشید</h6>
                <span className="text-justify leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای </span>
                {inputtext?.map((i, index) => (
                    <Fragment key={index}>
                        <InputText />
                    </Fragment>
                ))}
                <textarea
                    className="resize-none outline-none p-3 border-neutral-400 border-[2px] rounded focus:border-red-600"
                    rows={10}
                    placeholder="پیام"
                />
                <div className='place-self-end'>
                    <button type='button' className='px-6 py-4 bg-red-600 text-white rounded'>ارسال پیام</button>
                </div>
            </div>
            <div className="basis-[55%] place-self-center ">
                <ContactInfo />
            </div>
        </div>
    </form>
}

export default Form