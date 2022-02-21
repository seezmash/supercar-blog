// import ProfileCard from '../cards/ProfileCard_minimal'
import ProfileCard from '../cards/ProfileCard_v4'

export default function Sidebar({ accountsToDisplay }) {
  let splicedAccountsList = Array.from(accountsToDisplay)
  splicedAccountsList.splice(24)
  return (
    <div className="bg-blue-100F relative flex w-full flex-wrap overflow-hidden">
      {/* <div className="relative bg-red-100 w-screenF mt-10 w-[calc(100%_+_1.5rem)] flex flex-wrap"></div> */}
      {splicedAccountsList.map((item, index) => {
        return <ProfileCard item={item} key={'shortid_' + index} />
      })}
    </div>
  )
}
