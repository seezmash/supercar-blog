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
        className="inline-block text-xs bg-white bg-opacity-20 px-1 text-whiteF NOTrounded-sm mr-1.5 "
      >
        {item}
      </div>
    )
  })

  return (
    <div className="relative inline-block mr-4 mb-8 w-80 flex-grow select-none bg-white NOTrounded outline_style overflow-hidden cursor-pointer">
      <div className="relative block top-0 bg-white left-0 w-full h-44 NOTrounded overflow-hidden">
        <div className="inline-block w-full h-44">
          <img
            className="absolute object-cover border-br w-full h-44 left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
      <div className="relative w-full bg-white pb-3">
        <div className="card_title">{item.title}</div>
        <div className="card_text">{item.overview}</div>
      </div>
    </div>
  )
}
