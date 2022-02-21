import Link from "next/link"

export default function EventCard1({ item }) {
  let groupTagsList = [
    "Made in SA",
    "FPS",
    "MMORPG",
    "MOBA",
    "Events",
    "Feedback",
    "Youtube",
  ]

  let renderedGroupTags = groupTagsList.map((item, index) => {
    return (
      <div
        key={"groupTag" + index}
        className="inline-block text-xs bg-white bg-opacity-20 px-1 rounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <Link href="/profiles/groupProfile" passHref>
      <div className="relative inline-block w-full flex-grow flex-nowrap select-none outline_style roundedF overflow-hidden cursor-pointer mb-1">
        <div className="inline-block w-64 flex-shrink mr-2 h-16 bg-blue-400F overflow-hidden">
          {/* <div className="relative w-full text-gray-900 font-semibold whitespace-nowrap overflow-ellipsis top-0 pb-1 text-base">
            {item.title}
          </div> */}
          <div className="sidebar_title">{item.title}</div>
          <div className="sidebar_text">{item.overview}</div>
        </div>
        <div className="inline-block top-0 w-16 h-16 box_radius overflow-hidden">
          <img
            className="object-cover w-16 h-16 left-0 roundedF"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
    </Link>
  )
}
