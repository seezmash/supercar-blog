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

  let linkURL2 = "/profiles/eventProfile"

  let renderedGroupTags = groupTagsList.map((item, index) => {
    return (
      <div
        key={"groupTag" + index}
        className="inline-block text-xs bg-white bg-opacity-20 px-1 text-whiteF rounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="relative inline-block mr-4 mb-4 pb-4 w-full flex-grow border-bF box_radiusF select-none bg-whiteF roundedF overflow-hidden cursor-pointer">
        <div className="relative block top-0 bg-whiteF left-0 w-full h-40 box_radius overflow-hidden">
          <img
            className="absolute object-cover object-top border-brF w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="relative w-full bg-whiteF mb-3 px-3F">
          <div className="group_title_medium font-semibold text-xl mt-1.5 mb-1.5">
            {item.title}
          </div>
          <div className="blog_text_medium text-sm px-10F h-5">
            <img
              className="inline-block w-4 h-4"
              src="./icons/ui/calendar2-event.svg"
              alt=""
            />
            <span className="ml-3 text-blue-600F">November</span> 25
            <span className="right-0 ml-3 text-whiteF bg-red-50 text-red-600 px-1 box_radius font-semibold hidden">
              live
            </span>
            <span className="right-0 ml-3 text-whiteF bg-yellow-50 text-yellow-600 px-1 box_radius font-semibold hidden">
              soon
            </span>
          </div>
          <div className="group_text_medium h-10 overflow-hidden mt-3">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}
