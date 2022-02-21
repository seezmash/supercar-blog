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
        className="inline-block text-xs  bg-opacity-20 px-1 text-whiteF rounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <div className="relative inline-block mr-3 mb-0 w-64 flex-grow select-none roundedF overflow-hidden cursor-pointer">
      <div className="relative block top-0  left-0 w-full box_radius h-48 roundedF overflow-hidden">
        <div className="inline-block w-full h-48">
          <img
            className="absolute object-cover border-br w-full h-48 h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
      <div className="relative w-full  pb-3">
        <div className="blog_category_v">News</div>
        <div className="blog_title_medium pt-2 font-semibold text-xl">
          {item.title}
        </div>
        <div className="blog_text_medium h-12 mt-1.5">{item.overview}</div>
      </div>
    </div>
  )
}
