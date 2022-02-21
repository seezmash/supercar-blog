import Link from 'next/link'
// import EventCard from './cards/EventCard'
import EventCard from './cards/EventCard_v3'
// import LargeBlogCard from './cards/LargeBlogCard'
import BlogCard from './cards/BlogCard_v3'

export default function Sidebar({
  blogArticlesArray,
  eventsList,
  streamersList,
  groupsList,
  categoriesList
}) {
  console.log('hero blogs', blogArticlesArray)
  let linkURL = '/post'
  let miniblogItems1 = blogArticlesArray
    ? Array.from(blogArticlesArray)
    : [{}, {}]
  let miniEventList1 = Array.from(eventsList)
  if (miniblogItems1) {
    miniblogItems1.splice(4)
  }
  miniEventList1.splice(8)
  let shortStreamersList = Array.from(streamersList)
  let shortGroupsList = Array.from(groupsList)
  shortStreamersList.splice(4)
  shortGroupsList.splice(4)

  let shortCategoriesList = Array.from(categoriesList)
  let shortCategoriesList2 = shortCategoriesList.splice(6)
  shortCategoriesList2.splice(6)

  let tempBlogItems = Array.from(blogArticlesArray)
  tempBlogItems.reverse().splice(3)

  return (
    <div className="overflow-hiddenF space-y-10F relative flex w-full flex-col">
      {/* ==========   row 1   ========== */}
      {/* ======================================== */}
      <div className="space-x-6F flex w-full flex-row">
        {miniblogItems1.map((item, index) => {
          let attributes = item.attributes
          let itemImage = attributes ? item.attributes.Image : null
          let itemTitle = attributes ? item.attributes.Title : null
          let itemContent = attributes ? item.attributes.Content : null
          itemTitle = item.title
          itemImage = item.image

          return <BlogCard item={item} key={'shortid_' + index} />
        })}
      </div>

      {/* <div className="w-full border-b h-0 mt-6"></div> */}

      {/* ==========   EVENTS ROW   ========== */}
      {/* ======================================== */}
      <div className="space-x-6F flex w-full flex-nowrap">
        {miniEventList1.map((item, index) => {
          return <EventCard item={item} key={'shortid_' + index} />
        })}
      </div>

      {/* <div className="w-full border-b h-0"></div> */}

      {/* ==========   GROUPS ROW   ========== */}
      {/* ======================================== */}
      {/* <div className="w-full flex flex-nowrap space-x-6F">
        {shortGroupsList.map((item, index) => {
          return <HomeProfileCard item={item} key={'shortid_' + index} />
        })}
      </div> */}

      {/* <div className="w-full border-b h-0"></div> */}

      {/* ==========   STREAMERS ROW   ========== */}
      {/* ======================================== */}
      {/* <div className="w-full flex flex-nowrap space-x-6F">
        {shortStreamersList.map((item, index) => {
          return <HomeProfileCard item={item} key={'shortid_' + index} />
        })}
      </div> */}

      {/* <div className="w-full border-b h-0"></div> */}
      {/* ==========   CATEGORIES ROW   ========== */}
      {/* ======================================== */}
      {/* <div className="flex-wrap w-full flex-row space-x-6 flex">
        {shortCategoriesList.map((item, index) => {
          return <GameCard item={item} key={'shortid_' + index} />
        })}
      </div> */}

      {/* ==========   row 1   ========== */}
      {/* ======================================== */}
      {/* <div className="hidden w-full flex flex-row space-x-6">
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
            <Link href={linkURL} passHref key={'shortid_' + index}>
              <div className="relative inline-block w-64 h-56 shadow-md flex-grow flex-col select-none overflow-hidden cursor-pointer">
                <div className="relative top-0 bg-whiteF left-0 w-full h-full box_radius overflow-hidden">
                  <img
                    className="absolute object-cover border-br w-full h-full h-fullF left-0 image_visibility"
                    src={itemImage}
                    alt={itemTitle}
                  />
                  <div className="absolute -bottom-3 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="absolute bottom-0  bg-opacity-80F bg-gray-900F bg-blackF">
                  <div className="blog_title_medium px-5 drop-shadow-lg pt-3F leading-snug pb-4 bg-gray-800F text-lg font-bold font_style text-white truncateF">
                    {itemTitle}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div> */}
    </div>
  )
}
