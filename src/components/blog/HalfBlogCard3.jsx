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
      <div className="relative inline-block mb-0 w-60 flex-grow flex-shrinkF bg-green-200F flex-col bg-purple-200F select-none overflow-hidden cursor-pointer flexF border-bF pb-3">
        <div className="relative mr-3 top-0 bg-whiteF left-0 w-full h-44 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
          {/* <div className="absolute bg_accent_color py-1 px-2 box_radius ml-0.5F mt-0.5F text-white text-xs font-semibold radius_br">
            News
          </div> */}
        </div>
        <div className="relative w-full flex-grow bg-whiteF box_radius pt-3">
          <div className="blog_title_medium h-20 overflow-hidden font-bold font_style text-lg bold_text_color leading-snug">
            {item.title}
          </div>
          <div className="sidebar_textF text-xs h-12 truncate mt-2 overflow-hidden uppercase tracking-wider">
            {/* {item.overview} */}
            By Michael McOwens 4 Days ago
          </div>
          {/* <div className="blog_text_medium pt-1.5 h-12">{item.overview}</div> */}
        </div>
      </div>
    </Link>
  )
}
