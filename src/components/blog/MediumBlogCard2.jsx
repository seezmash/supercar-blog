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
    <div className="relative inline-block mr-3 mb-6 w-60 flex-grow select-none bg-white rounded overflow-hidden cursor-pointer bg-red-200">
      <div className="relative block top-0 bg-white left-0 w-full h-36 rounded overflow-hidden">
        <div className="inline-block w-full h-48">
          <img
            className="absolute object-cover border-br w-full h-36 h-fullF left-0 image_visibility"
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
