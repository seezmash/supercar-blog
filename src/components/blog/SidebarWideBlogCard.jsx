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

  let linkURL = "/post"

  let renderedGroupTags = groupTagsList.map((item, index) => {
    return (
      <div
        key={"groupTag" + index}
        className="block text-xs bg-white bg-opacity-20 px-1 text-whiteF -sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <Link href={linkURL} passHref>
      <div className="relative inline-block mr-1 mb-1F w-full flex-grow flex flex-shrinkF bg-green-200F flex-row bg-purple-200F select-none overflow-hidden cursor-pointer">
        <div className="relative mr-3 top-0 bg-whiteF left-0 w-32 h-20 flex-shrink-0 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="relative w-full flex-shrink bg-whiteF box_radius pt-2">
          <div className="blog_title_medium pt-0.5 h-14 overflow-hidden font-bold font_style text-sm bold_text_color leading-tight">
            {item.title}
          </div>
        </div>
      </div>
    </Link>
  )
}
