import ProfileCard from "../cards/ProfileCard_minimal"

export default function Sidebar({ accountsToDisplay }) {
  let splicedAccountsList = Array.from(accountsToDisplay)
  splicedAccountsList.splice(50)
  return (
    <div className="relative w-full flex flex-wrap overflow-hidden">
      {/* <SectionTitle title="Featured Streamers" /> */}
      {splicedAccountsList.map((item, index) => {
        return <ProfileCard item={item} key={"shortid_" + index} />
      })}
    </div>
  )
}
