import Link from "next/link"

export default function PageTabs({ title }) {
  return (
    <div className="section_title_wrapper flex flex-nowrap mb-0 mt-0">
      <div className="w-1.5 h-1.5 bg-blue-500 mt-3.5 mr-3"></div>
      <div className="section_title mb-1 mr-3 pr-2 text-base">{title}</div>
      <div className="flex-grow border-tF h-1 mt-5"></div>
    </div>
  )
}
