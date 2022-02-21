export default function CategoryCard1({ item }) {
  return (
    <div className="mr-6F mb-2F box_radius shadow-mdF relative mr-6 inline-block w-40 flex-shrink-0 flex-grow cursor-pointer select-none overflow-hidden bg-white font-bold text-gray-900">
      <div className="box_radius cursor-pointerF image_container_bg relative top-0 left-0 block h-40 w-full overflow-hidden">
        <img
          className="image_visibility object-cover"
          src={item.image}
          alt={item.title}
        />
        <div className="absolute -bottom-0 h-24 w-full bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="tracking-wideF absolute bottom-2 w-full truncate px-2 pt-2 pb-1 text-sm font-semibold text-white">
          {item.title}
        </div>
      </div>
    </div>
  )
}
