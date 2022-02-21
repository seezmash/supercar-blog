import HeroBlogCard2 from './HeroBlogCard2'
import HeroBlogCard3 from './HeroBlogCard3'
import HeroBlogCard4 from './HeroBlogCard4'

import eventsPageList from '../../db/eventsPageList.js'
import trendingGames from '../../db/trendingGames.js'
import blogsList from '../../db/blogsList.js'
import carblogList from '../../db/car_blogs.js'

let shortBlogslist = Array.from(carblogList).reverse()
let shortEventsList = Array.from(eventsPageList)
let shortGamesList = Array.from(trendingGames)

shortBlogslist.splice(10)
shortGamesList.splice(4)
shortEventsList.splice(4)
export default function Sidebar({ selectedTabIndex, pageSpecificTabs }) {
  return (
    <div className="relative w-full flex overflow-hidden mt-0 mb-10">
      <div className="relative w-1/3 bg-purple-200F flex-shrink-0 h-full flex-grow flex flex-wrap">
        {/*  */}
        <div className="relative hiddenF inline-block w-1/2 flex-grow h-80 mr-3 overflow-hiddenF roundedF select-none font-bold text-gray-900 text-xs">
          <div className="relative block top-0 left-0 w-full h-52 overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full object-top"
              src={shortBlogslist[6].image}
              alt={shortBlogslist[6].category}
            />
          </div>
          <div className="blog_title_medium pr-3">{shortBlogslist[0].name}</div>
          <div className="blog_text_medium truncateF pr-3">
            {shortBlogslist[6].overview}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="relative w-1/2 bg-red-200F flex-shrink-0 h-full flex-grow flex flex-col flex-wrap">
        {/*  */}
        <div className="relative flex w-full flex-grow flex-shrink h-40 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-52 h-full overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full"
              src={shortBlogslist[1].image}
              alt={shortBlogslist[1].category}
            />
          </div>
          <div className="inline-block flex-grow">
            <div className="blog_title_medium pr-3">
              {shortBlogslist[1].name}
            </div>
            <div className="blog_text_medium truncateF pr-3">
              {shortBlogslist[1].overview}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative flex w-full flex-grow flex-shrink h-40 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-52 h-full overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full"
              src={shortBlogslist[3].image}
              alt={shortBlogslist[3].category}
            />
          </div>
          <div className="inline-block flex-grow">
            <div className="blog_title_medium pr-3">
              {shortBlogslist[3].name}
            </div>
            <div className="blog_text_medium truncateF pr-3">
              {shortBlogslist[3].overview}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative hidden flex w-full flex-grow flex-shrink h-32 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-52 h-32 overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full"
              src={shortBlogslist[4].image}
              alt={shortBlogslist[4].category}
            />
          </div>
          <div className="inline-block flex-grow">
            <div className="blog_title_medium pr-3">
              {shortBlogslist[4].name}
            </div>
            <div className="blog_text_medium truncateF pr-3">
              {shortBlogslist[4].overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
