import Link from 'next/link'

export default function SectionTitle({ title }) {
  return (
    <div className="mr-6 mb-8 flex">
      {/* <div className="mr-4 mt-2.5 h-1.5 w-1.5 rounded-full border-b bg-blue-500"></div> */}
      <h1 className="box_radius whitespace-nowrap text-sm font-semibold">
        {title}
      </h1>
      <div className="mt-1.5 ml-6 h-1 w-full border-b"></div>
    </div>
  )
}
