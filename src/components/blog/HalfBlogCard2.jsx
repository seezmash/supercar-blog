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
      <div className="relative inline-block w-64 flex-grow flex-shrinkF bg-green-200F flex-col bg-purple-200F select-none overflow-hidden cursor-pointer flexF border-bF pb-3">
        <div className="relative mr-3 top-0 bg-whiteF left-0 w-full h-56 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
          <div className="absolute bg_accent_color py-1 px-2 text-white text-xs font-semibold radius_br">
            News
          </div>
          <div className="absolute -bottom-4 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="absolute bottom-0 px-5  bg-opacity-80F bg-gray-900F bg-blackF">
          <div className="blog_title_medium pt-3 leading-normalF pr-8 pb-6 text-lg font-bold font_style text-white truncateF">
            {item.title}
          </div>
          <div className="blog_text_medium truncateF pr-3 h-12 text-white opacity-70 truncate hidden">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}
