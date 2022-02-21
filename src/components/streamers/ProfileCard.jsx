import Link from "next/link"

export default function EventCard1({ item }) {
  let tagsList = [
    "Gears of War",
    "Apex Legends",
    "Twitch",
    "YouTube",
    "FB Gaming",
    "MOBA",
    "Cosplay",
  ]

  let linkURL = "/streamers/userProfile"
  let linkURL2 = "/groups/groupProfile"

  let renderedGroupTags = item.tags.map((item, index) => {
    return (
      <div
        key={"groupTag" + index}
        className="card_hashtagF relative w-fullF w-40 bg-yellow-100F h-4 mb-1.5"
      >
        <div className="absolute inline-block ml-0.5 bg-red-300F h-5 w-40 text-xs text-gray-800">
          {item}
        </div>
      </div>
    )
  })

  return (
    <Link href={linkURL2} passHref>
      <div className="relative inline-block mr-4 mb-14 pb-4  w-52 flex-grow select-none bg-whiteF border box_radius overflow-hidden cursor-pointer bg-gray-500F roundedF">
        <div className="relative top-0 bg-white left-0 w-full h-20 flex box_radiusF overflow-hidden flex-row-reverse roundedF">
          <div className="flex-grow h-20 overflow-hidden">
            <img
              className="absolute object-cover w-full h-full blur-2xl inset-8 image_visibility"
              src={item.image}
              alt={item.title}
            />
            <div className="absolute w-full h-full bg-white bg-opacity-60"></div>
            <div className="absolute px-2 h-15 overflow-hidden mt-2 w-full">
              {renderedGroupTags}
            </div>
          </div>
          <div className="inline-block w-20 h-20">
            <img
              className="absolute object-cover w-20 h-20 left-0"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
        <div className="relative w-full bg-white px-3 ">
          <div className="group_title_medium mb-1 mt-1 font-semibold text-lg truncate">
            {item.title}
          </div>
          <div className="group_text_medium h-10 overflow-hidden">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}
