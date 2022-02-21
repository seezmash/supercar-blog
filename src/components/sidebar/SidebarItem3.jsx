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
    <Link href="/post" passHref>
      <div className="relative flex bg-blue-200F w-full flex-grow flex-nowrap select-none outline_style border-bF pb-1 pt-1 overflow-hiddenF cursor-pointer mb-1">
        <div className="inline-block w-40 top-0 flex-shrink flex-grow mr-2 h-16F bg-blue-400F overflow-hidden ">
          <div className="sidebar_title font_style truncateF h-12 font-semibold ">
            {item.title}
          </div>
          {/* <div className="sidebar_text">{item.overview}</div> */}
        </div>
        <div className="inline-block top-0 w-36 h-24 box_radius overflow-hidden">
          <img
            className="object-cover w-full h-full left-0F roundedF"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
    </Link>
  )
}
