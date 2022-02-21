export default function EventCard1({ item }) {
  return (
    <div className="relative mr-4 mb-8 pt-4F w-full flex-grow select-none overflow-hidden cursor-pointer flexF border-bF pt-6F pb-4">
      <div className="relative mr-3 top-0 left-0 w-full h-80 box_radius overflow-hidden">
        <img
          className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="relative w-full flex-grow pl-3 pb-4 pt-4">
        <div className="blog_category_h font-normal text-blue-600">News</div>
        <div className="blog_title_medium pt-0.5 font-semibold text-2xl font_style bold_text_color">
          {item.title}
        </div>
        <div className="blog_text_medium text-base pt-3 h-12F">
          {item.overview}
        </div>
      </div>
    </div>
  )
}
