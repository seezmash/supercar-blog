export default function SectionTitle({ title }) {
  return (
    <div className="flex">
      <h1 className="box_radius mb-6 whitespace-nowrap text-sm font-semibold">
        {title}
      </h1>
      {/* <div className="mt-1.5 ml-6 h-1 w-full border-b"></div> */}
    </div>
  )
}
