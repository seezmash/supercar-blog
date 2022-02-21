import Link from 'next/link'

const LargeBlogCard = ({ item }) => {
  let linkURL = '/post'

  let itemTitle = item.title
  let itemImage = item.image

  return (
    <Link href={linkURL} passHref>
      <div className="flex-colF card_container relative mr-6 mb-8 inline-block w-64 flex-shrink-0 flex-grow cursor-pointer select-none overflow-hidden">
        <div className="bg-whiteF box_radius relative top-0 left-0 h-44 w-full overflow-hidden">
          <img
            className="border-br h-fullF image_visibility left-0 h-full w-full object-cover"
            src={itemImage}
            alt={itemTitle}
          />
          {/* <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div> */}
        </div>

        <div className="bg-whiteF box_radius relative w-full flex-grow py-3">
          <div className="blog_title_medium font_style bold_text_color card_title text-lg font-bold leading-normal">
            {itemTitle}
          </div>
          <div className="blog_text_medium h-12 pt-2 text-sm">
            {item.overview}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LargeBlogCard
