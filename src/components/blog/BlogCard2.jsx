import Link from "next/link"

export default function EventCard1({ item, isLastItem }) {
  let linkURL = "/post"

  let borderClass = isLastItem ? "border-none" : "border-b"

  return (
    <Link href={linkURL} passHref>
      <div
        className={
          "relative mb-4F w-1/3 flex-grow select-none overflow-hidden cursor-pointer flex pt-4F pb-4F hover:text-green-700"
        }
      >
        <div className="relative inline-block w-1/2 mr-6  flex-grow bg-whiteF box_radius pb-0">
          <div className="blog_title_medium max-w-lg pt-0.5 font-bold font_style text-xl bold_text_color h-32">
            {item.title}
          </div>
          <div className="blog_text_medium pt-1.5 h-12 truncateF hiddenF text-xs tracking-wider uppercase ">
            By Soap McTavish 4 days ago
          </div>
        </div>
        <div className="relative inline-blocktop-0 bg-whiteF left-0 w-1/2 h-44 box_radius overflow-hidden">
          <img
            className="absolute object-cover border-br w-full h-44 h-fullF left-0 image_visibility"
            src={item.image}
            alt={item.title}
          />
        </div>
      </div>
    </Link>
  )
}
