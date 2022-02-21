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
    <div className="relative inline-block flex-grow mr-2 h-28 mb-4 w-44 overflow-hidden flex-growF rounded borderF border-opacity-20 border-gray-500 roundedF select-none font-bold text-gray-900 text-xs">
      <div className="relative block top-0 left-0 w-full h-44 overflow-hidden cursor-pointer image_container_bg">
        <img className="image_visibility" src={item.image} alt={item.title} />
        <div className="absolute -bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-2 w-full pt-2 px-2 pb-1 text-white text_normal font-normal tracking-wideF truncate">
          {item.title}
        </div>
      </div>
      {/* <div className="absolute pt-1 w-full">
        {Math.floor(Math.random() * 1000) + ' Streams'}
      </div> */}
      <div className="absolute pt-1 w-full hidden">Adventure</div>
    </div>
  )
}
