import Link from "next/link"
// import indexSidebarItems from "../db/sidebar/indexSidebarItems"
import SidebarItem from "../sidebar/SidebarItem"
import SidebarItem3 from "../sidebar/SidebarItem3"
import SideBarEventCard from "../sidebar/SideBarEventCard"
import SideBarSectionTitle from "../sidebar/SideBarSectionTitle"
import SectionTitle from "../section/SectionTitle"

// indexSidebarItems.splice(4)
function NewsSideBar1({ blogList1, blogList2, eventsList }) {
  return (
    <div className="w-96 max-w-md border-lF ml-6 pl-8 h-full bg-green-200F">
      {/* ======================================== */}
      <div className="w-full mt-3 mb-0 flex flex-wrap">
        {blogList1.map((item, index) => {
          return <SidebarItem3 item={item} key={"event_item_home" + index} />
        })}
      </div>
      {/* ======================================== */}
      <div className=" w-full mt-4 mb-0 pl-3 flex flex-wrap">
        <SideBarSectionTitle title="Event" />
        {eventsList.map((item, index) => {
          return (
            <SideBarEventCard item={item} key={"event_item_home" + index} />
          )
        })}
      </div>
      {/* ======================================== */}
      {/* <SectionTitle title="Upcoming Events" />
      <div className="w-full mt-2 mb-0 flex flex-wrap">
        {blogList2.map((item, index) => {
          return <SidebarItem3 item={item} key={"event_item_home" + index} />
        })}
      </div> */}
    </div>
  )
}

function NewsSideBar2({ blogList1, blogList2, blogList3, eventsList }) {
  return (
    <div className="w-96 max-w-md border-lF ml-6 pl-8 h-full bg-green-200F">
      {/* ======================================== */}
      <div className="w-full mt-3 mb-0 flex flex-wrap">
        {blogList1.map((item, index) => {
          return <SidebarItem3 item={item} key={"event_item_home" + index} />
        })}
      </div>
      {/* ======================================== */}
      <div className=" w-full mt-6 mb-0 pl-3 flex flex-wrap">
        <SideBarSectionTitle title="Event" />
        {eventsList.map((item, index) => {
          return (
            <SideBarEventCard item={item} key={"event_item_home" + index} />
          )
        })}
      </div>
      {/* ======================================== */}
      <SectionTitle title="Upcoming Events" />
      <div className="w-full mt-2 mb-0 flex flex-wrap">
        {blogList2.map((item, index) => {
          return <SidebarItem3 item={item} key={"event_item_home" + index} />
        })}
      </div>

      {/* ======================================== */}
      {/* ======================================== */}

      {/* ======================================== */}
      <div className=" w-full mt-6 mb-0 pl-3 flex flex-wrap">
        <SideBarSectionTitle title="Event" />
        {eventsList.map((item, index) => {
          return (
            <SideBarEventCard item={item} key={"event_item_home" + index} />
          )
        })}
      </div>
      {/* ======================================== */}
      <div className="w-full mt-0 mb-12 flex flex-wrap">
        {blogList3.map((item, index) => {
          return <SidebarItem3 item={item} key={"event_item_home" + index} />
        })}
      </div>
    </div>
  )
}

export { NewsSideBar1, NewsSideBar2 }
