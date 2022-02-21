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
        className="inline-block text-xs bg-opacity-20"
      >
        {item}
      </div>
    )
  })

  return (
    // <div className="relative inline-block mr-4 mb-8 w-80 flex-grow bg-gray-200 select-none NOTrounded outline_style overflow-hidden cursor-pointer">
    //   <div className="relative block top-0 bg-white left-0 w-full h-44 NOTrounded overflow-hidden">
    //     <div className="inline-block w-full h-44">
    //       <img
    //         className="absolute object-cover border-br w-full h-44 left-0 image_visibility"
    //         src={item.image}
    //         alt={item.title}
    //       />
    //     </div>
    //   </div>
    //   <div className="relative w-full bg-white pb-3">
    //     <div className="card_title">{item.title}</div>
    //     <div className="card_text">{item.overview}</div>
    //   </div>
    // </div>
    <div className="relative inline-block w-1/2 flex-grow h-96 mr-1.5 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
      <div className="relative block top-0 left-0 w-full h-full overflow-hidden cursor-pointer image_container_bg">
        <img
          className="object-cover w-full h-full"
          src={item.image}
          alt={item.category}
        />
        <div className="absolute -bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 w-full pt-2 px-4 pb-1 text-white text-lg font-semibold truncate">
          {item.title}
        </div>
      </div>
    </div>
  )
}
