import {
    Content,
    SideBar,
    BreadCrumb
} from "Articles"

const Articles = () => {

    return <>
        <BreadCrumb />
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-8 max-w-7xl mx-auto my-10">
            <Content />
            <SideBar />
        </div>
    </>
}

export default Articles