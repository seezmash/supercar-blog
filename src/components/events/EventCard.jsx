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
        className="inline-block text-xs bg-white bg-opacity-20 px-1 text-whiteF rounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <div className="relative inline-block mr-4 mb-8 w-56 flex-grow select-none roundedF overflow-hidden cursor-pointer">
      <div className="relative block top-0 left-0 w-full h-32 box_radius overflow-hidden">
        <div className="inline-block w-full h-full">
          <img
            className="absolute object-top object-cover border-brF w-full h-full h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
      <div className="relative w-full pb-2.5">
        <div className="group_title_mediumF font-semibold text-xl mt-0.5 mb-5">
          {item.title}
        </div>
        <div className="group_text_medium h-14 overflow-hidden">
          {item.overview}
        </div>
      </div>
    </div>
  )
}
