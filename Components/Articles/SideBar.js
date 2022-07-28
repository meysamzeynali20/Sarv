import { RelatedArticles } from 'Articles'

const SideBar = () => {

    return <section className="basis-[40%]">
        <div className="sticky top-0">
            <RelatedArticles />
        </div>
    </section>
}

export default SideBar