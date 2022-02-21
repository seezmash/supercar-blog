import Link from 'next/link'
import HeroEventCard from './cards/HeroEventCard'

export default function Sidebar({ blogArticlesArray, eventsList }) {
  console.log('hero blogs', blogArticlesArray)
  let linkURL = '/post'
  let miniblogItems1 = blogArticlesArray
    ? Array.from(blogArticlesArray)
    : [{}, {}]
  let miniEventList1 = Array.from(eventsList)
  if (miniblogItems1) {
    miniblogItems1.splice(3)
  }
  miniEventList1.splice(8)

  return (
    <div className="relative w-full flex flex-col overflow-hiddenF space-y-6">
      {/* ==========   row 1   ========== */}
      {/* ======================================== */}
      <div className="w-full flex flex-row space-x-6">
        {miniblogItems1.map((item, index) => {
          let attributes = item.attributes
          let itemImage = attributes ? item.attributes.Image : null
          let itemTitle = attributes ? item.attributes.Title : null
          let itemContent = attributes ? item.attributes.Content : null
          itemTitle = item.title
          itemImage = item.image
          console.log(itemImage, itemTitle)

          console.log(attributes)
          return (
            // <Link href={linkURL} passHref key={'shortid_' + index}>
            //   <div className="relative inline-block w-64 h-56 shadow-md flex-grow flex-col select-none overflow-hidden cursor-pointer">
            //     <div className="relative top-0 bg-whiteF left-0 w-full h-full box_radius overflow-hidden">
            //       <img
            //         className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
            //         src={itemImage}
            //         alt={itemTitle}
            //       />
            //       <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
            //     </div>

            //     <div className="absolute bottom-0  bg-opacity-80F bg-gray-900F bg-blackF">
            //       <div className="blog_title_medium px-5 drop-shadow-lg pt-3F leading-snug pb-4 bg-gray-800F text-lg font-bold font_style text-white truncateF">
            //         {itemTitle}
            //       </div>
            //     </div>
            //   </div>
            // </Link>
            <Link href={linkURL} passHref key={'shortid_' + index}>
              <div className="relative inline-block w-64 p-2 bg-white rounded-md h-56F shadow-md flex-grow flex-col select-none overflow-hidden cursor-pointer">
                <div className="relative top-0 bg-whiteF left-0 w-full h-52 box_radius overflow-hidden">
                  <img
                    className="object-cover border-br w-full h-52 h-fullF left-0 image_visibility"
                    src={itemImage}
                    alt={itemTitle}
                  />
                  {/* <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div> */}
                </div>

                <div className="relative w-full flex-grow bg-whiteF box_radius py-3">
                  <div className="blog_title_medium font-bold font_style text-xl bold_text_color leading-snugF">
                    {itemTitle}
                  </div>
                  <div className="blog_text_medium pt-2">{item.overview}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="w-full border-b h-0"></div>

      {/* ==========   row 2   ========== */}
      {/* ======================================== */}
      <div className="w-full flex flex-nowrap space-x-6">
        {miniEventList1.map((item, index) => {
          return <HeroEventCard item={item} key={'shortid_' + index} />
        })}
      </div>
    </div>
  )
}
