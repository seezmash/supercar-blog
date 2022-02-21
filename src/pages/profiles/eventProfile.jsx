import Nav from '../../components/Nav'
import NextHead from '../../components/next/NextHead'
import Footer from '../../components/Footer'
import ProfileSidebar from '../../components/ProfileSidebar'
import SectionTitle from '../../components/widgets/SectionTitle'
import ProfileCard from '../../components/cards/ProfileCard_v4'
import EventCard from '../../components/cards/EventCard_v6'
import BlogCard from '../../components/cards/BlogCard_v4'
import userProfileLinks from '../../db/userProfileLinks.js'
import driversList from '../../db/drivers.js'
import eventsList from '../../db/events'
import blogList from '../../db/blogs.js'

let shortEventsList = Array.from(eventsList).sort(() => Math.random() - 0.5)
let shortEventsList2 = shortEventsList.splice(1)
let shortEventsList3 = shortEventsList2.splice(4)
let shortdriversList = Array.from(driversList)
let shortdriversList2 = shortdriversList.splice(4)

let shortBlogList = Array.from(blogList).sort(() => Math.random() - 0.5)

let shortBlogList2 = shortBlogList.splice(6)
let shortBlogList3 = shortBlogList2.splice(6)
let shortBlogList4 = shortBlogList3.splice(3)

export default function Home() {
  return (
    <>
      <NextHead title={shortEventsList[0].title + ' | Supercar Blog'} />
      <Nav selectedPageIndex={1} />

      <div className="page_width_wide mx-auto flex w-full flex-row">
        <div className="box_radius h-96 w-60"></div>

        <div className="outer_wrapper">
          <div className="inner_wrapper mt-12 flex h-full flex-shrink flex-col">
            {/* ====================================================================== */}
            <div className="flex">
              <div className="box_radius left-0 right-0 ml-0 block h-48 w-80 flex-shrink-0 overflow-hidden bg-gray-50">
                <img
                  className="bg-gray-100F box_radius h-full w-full object-cover"
                  src={shortEventsList[0].image}
                  alt=""
                />
              </div>
              <div className="bg-yellow-200F relative ml-6 flex-grow">
                <div className="bg-purple-300F h-10F pt-0 text-2xl font-bold text-gray-900">
                  {shortEventsList[0].title}
                </div>
                <div className="bg-green-200F h-10F mt-4 text-base">
                  {shortEventsList[0].overview}
                </div>
                {/* ====================================================================== */}

                <div className="mt-8 flex flex-row">
                  {userProfileLinks.map((item, index) => {
                    return (
                      <div className="ml-2 flex h-7 justify-end" key={index}>
                        <div className="h-4 w-4">
                          <img
                            className="inline-block h-full w-full object-contain"
                            src={item.icon}
                            alt=""
                          />
                        </div>
                        <div className="ml-3 mt-1 inline-block flex-grow text-sm">
                          {item.title}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* ====================================================================== */}
            <div className="h-40F bg-green-200F mt-6 block w-full">
              <p className="text-base">
                Welcome to my channel! I am Korean streamer who likes to do
                outdoor streaming, gaming, and also other fun contents! I speak
                three languages : English, Korean and Chinese. Hope you guys
                have fun watching my stream :)
              </p>
            </div>
            {/* ====================================================================== */}
            <div className="h-40F bg-green-200F mt-10 block w-full">
              <SectionTitle title="Previous Champions" />
              {/* <SectionTitle title="Featured Events" /> */}
              <div className="flex w-full flex-nowrap">
                {shortdriversList.map((item, index) => {
                  return (
                    <ProfileCard item={item} key={'cat_item_home' + index} />
                  )
                })}
              </div>
            </div>
            {/* ====================================================================== */}
            <SectionTitle title="Similar Events" />
            <div className="relative flex w-full flex-wrap">
              {shortEventsList2.map((item, index) => {
                return <EventCard item={item} key={'event_item_home' + index} />
              })}
            </div>
          </div>
        </div>
        {/* ==================== ProfileSidebar ==================== */}
        <ProfileSidebar />
      </div>
      <Footer />
    </>
  )
}
