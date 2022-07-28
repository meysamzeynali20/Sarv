import Link from "next/link";

const BreadCrumb = () => {

  return <section className="bg-neutral-100">
    <div className="flex gap-x-3 py-7 max-w-7xl mx-auto">
      <Link href="#">
        <a className="active:text-sky-600">خانه &larr;</a>
      </Link>
      <Link href="#">
        <a className="active:text-sky-600">بلاگ</a>
      </Link>
    </div>
  </section>
};

export default BreadCrumb;