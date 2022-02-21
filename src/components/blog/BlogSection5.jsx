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
    <div className="relative w-full flex overflow-hidden mt-0 mb-10 bg-purple-300F">
      {/*  */}
      <div className="relative w-full bg-red-200F flex-shrink-0 h-full flex-grow flex flex-row flex-wrap">
        {/*  */}
        <div className="relative flex w-1/2 flex-grow flex-shrink h-52 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-72 h-full overflow-hidden cursor-pointer image_container_bg rounded">
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
        <div className="relative flex w-1/2 flex-grow flex-shrink h-52 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-72 h-full overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full"
              src={shortBlogslist[0].image}
              alt={shortBlogslist[0].category}
            />
          </div>
          <div className="inline-block flex-grow">
            <div className="blog_title_medium pr-3">
              {shortBlogslist[0].name}
            </div>
            <div className="blog_text_medium truncateF pr-3">
              {shortBlogslist[0].overview}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="relative flex w-1/2 flex-grow flex-shrink h-52 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-72 h-full overflow-hidden cursor-pointer image_container_bg rounded">
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
        <div className="relative hiddenF flex w-1/2 flex-grow flex-shrink h-52 mb-3 overflow-hidden rounded select-none font-bold text-gray-900 text-xs">
          <div className="relative inline-block mr-3 flex-shrink-0 top-0 left-0 w-72 h-52 overflow-hidden cursor-pointer image_container_bg rounded">
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
      {/*  */}

      <div className="relative w-40 border-l pl-5 opacity-0 bg-purple-200 flex-shrink-0 h-full flex-grow flex flex-wrap">
        {/*  */}
        <div className="relative hiddenF inline-block w-1/2 flex-grow h-80 mr-3 overflow-hiddenF roundedF select-none font-bold text-gray-900 text-xs">
          <div className="relative block top-0 left-0 w-full h-40 overflow-hidden cursor-pointer image_container_bg rounded">
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
        {/*  */}
        <div className="relative hiddenF inline-block w-1/2 flex-grow h-80 mr-3 overflow-hiddenF roundedF select-none font-bold text-gray-900 text-xs">
          <div className="relative block top-0 left-0 w-full h-40 overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full object-top"
              src={shortBlogslist[8].image}
              alt={shortBlogslist[8].category}
            />
          </div>
          <div className="blog_title_medium pr-3">{shortBlogslist[8].name}</div>
          <div className="blog_text_medium truncateF pr-3">
            {shortBlogslist[8].overview}
          </div>
        </div>
        {/*  */}
        <div className="relative hiddenF inline-block w-1/2 flex-grow h-80 mr-3 overflow-hiddenF roundedF select-none font-bold text-gray-900 text-xs">
          <div className="relative block top-0 left-0 w-full h-40 overflow-hidden cursor-pointer image_container_bg rounded">
            <img
              className="object-cover w-full h-full object-top"
              src={shortBlogslist[9].image}
              alt={shortBlogslist[9].category}
            />
          </div>
          <div className="blog_title_medium pr-3">{shortBlogslist[9].name}</div>
          <div className="blog_text_medium truncateF pr-3">
            {shortBlogslist[9].overview}
          </div>
        </div>
      </div>
    </div>
  )
}
