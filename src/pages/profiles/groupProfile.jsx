import Nav from '../../components/Nav'
import NextHead from '../../components/next/NextHead'
import userProfileLinks from '../../db/userProfileLinks.js'
import SectionTitle from '../../components/widgets/SectionTitle'
import EventCard from '../../components/cards/EventCard_v6'
import Footer from '../../components/Footer'
import ProfileCard from '../../components/cards/ProfileCard_v4'
import ProfileSidebar from '../../components/ProfileSidebar'
import driversList from '../../db/drivers.js'
import eventsList from '../../db/events'

let shortEventsList = Array.from(eventsList).sort(() => Math.random() - 0.5)
let shortdriversList = Array.from(driversList).sort(() => Math.random() - 0.5)

let shortEventsList2 = shortEventsList.splice(4)
let shortdriversList2 = shortdriversList.splice(5)
let shortdriversList3 = shortdriversList2.splice(4)

// have badges that give visitors an idea of what said person is about, fps gamer, sweaty gamer, camp master, bring the salt etc

export default function Home() {
  return (
    <>
      <NextHead title={shortdriversList[0].title + ' | Play dot africa'} />
      <Nav selectedPageIndex={2} />

      <div className="page_width_wide bg-blue-200F mx-auto flex w-full flex-row">
        <div className="box_radius borderF h-96 w-20"></div>

        <div className="outer_wrapper flex-shrink">
          <div className="inner_wrapper mt-8 flex h-full flex-shrink flex-col">
            {/* ====================================================================== */}
            <div className="outline_style bg-red-200F flex-grow overflow-hidden pl-0">
              {/* ====================================================================== */}
              <div className="flex">
                <div className="pr-6">
                  {/* ====================================================================== */}
                  <div className="flex max-w-3xl">
                    <div className="bg-whiteF rounded-fullF box_radius left-0 right-0 ml-0 block h-48 w-48 flex-shrink-0 overflow-hidden border">
                      <img
                        className="bg-gray-100F h-full w-full object-cover"
                        src={shortdriversList[0].image}
                        alt=""
                      />
                    </div>
                    <div className="bg-yellow-200F relative ml-6 flex-grow">
                      <div className="text-3xl font-bold text-gray-900">
                        {shortdriversList[0].title}
                      </div>
                      <div className="mt-8 text-sm">
                        {shortdriversList[0].overview}
                      </div>
                      <div className="border-tF flex space-x-8 pt-4">
                        {userProfileLinks.map((item, index) => {
                          return (
                            <div
                              className="ml-2F flex h-7 justify-end"
                              key={index}
                            >
                              <div className="h-4 w-4">
                                <img
                                  className="inline-block h-full w-full object-contain"
                                  src={item.icon}
                                  alt=""
                                />
                              </div>
                              <div className="text-blue-700F ml-2.5 mt-1 inline-block flex-grow text-sm">
                                {item.title}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  {/* ====================================================================== */}
                  <div className="h-40F bg-green-200F mt-6 block w-full  max-w-3xl">
                    <p className="text-sm">
                      Declare Eärendil pointy knowledge binding minds brown
                      purpose despite crows. That is no trinket you carry.
                      Rhosgobel fate tempt slopes wager still. Peace Bill
                      fierce.
                    </p>
                  </div>
                </div>
                {/* ====================================================================== */}
              </div>

              {/* ====================================================================== */}
              <div className="h-40F bg-green-200F mt-10 block w-full">
                <SectionTitle title="Teammates" />
                <div className="flex w-full flex-nowrap">
                  {shortdriversList2.map((item, index) => {
                    return (
                      <ProfileCard item={item} key={'cat_item_home' + index} />
                    )
                  })}
                </div>
              </div>
              {/* ====================================================================== */}
              <div className="h-40F bg-green-200F mt-4 block w-full">
                <SectionTitle title="Recent Events" />
                <div className="flex w-full flex-nowrap">
                  {shortEventsList.map((item, index) => {
                    return (
                      <EventCard item={item} key={'cat_item_home' + index} />
                    )
                  })}
                </div>
              </div>
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
