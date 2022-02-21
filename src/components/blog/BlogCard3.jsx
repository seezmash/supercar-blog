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
  let randomCategory = "Community"

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
      <div className="relative inline-block mb-0 w-60 flex-grow flex-col select-none overflow-hidden cursor-pointer">
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
          <div className=" font-semibold text-xs text_accent_color">
            {randomCategory}
          </div>
          <div className="blog_title_medium mb-0 pb-0 h-24F overflow-hidden font-bold font_style text-xl bold_text_color leading-snug">
            {item.title}
          </div>
        </div>
      </div>
    </Link>
  )
}
