import Link from 'next/link'
import sideBarTags from '../db/sidebar/sideBarTags.js'

export default function Sidebar({ headerTags, headerSearchPlaceholder }) {
  let searchPlaceholder = 'Search thousands of groups'

  return (
    <div className="relative flex w-full overflow-hidden">
      {/* ==========   column 2  ========== */}
      <div className="mx-auto w-full">
        {/* ====================================================================== */}
        <div className="flex w-auto justify-center space-x-3 pb-3">
          <div className="mx-autoF shadowF box_radius flex h-9 max-w-md flex-grow border bg-white p-2 text-sm">
            <img
              className="mt-0.5 ml-2 inline-block h-3 w-3"
              src="./icons/ui/search.svg"
              alt=""
            />
            <div className="mt-1F ml-4 inline-block cursor-text text-sm leading-4 tracking-wide text-gray-500">
              {searchPlaceholder}
            </div>
          </div>
          {/* <div className="text-sm p-2 pl-5 flex-grow-0 w-32 mt-2F bg-gray-200 bg-white border box_radius cursor-pointer">
            Filters
          </div> */}
        </div>
        {/* ====================================================================== */}

        <div className="flex w-full flex-row">
          <div className="bg-gray-300F bg-purple-600F space-x-2F space-y-2.5F mb-8 mt-3 flex h-10 w-full flex-grow flex-wrap justify-center overflow-hidden">
            {headerTags.map((item, index) => {
              return (
                <div
                  key={'shortid_' + index}
                  className="box_radius shadowF mr-2.5 mb-2.5 cursor-pointer bg-gray-100 p-2 text-sm font-semibold text-slate-800"
                >
                  {item}
                </div>
              )
            })}
          </div>
          <div className="border-lF border-tF justify-endF mt-3 flex hidden h-20 w-40 flex-col">
            <div className="mt-2F border-lF bg-gray-100F border-rF text-whiteF table h-8 cursor-pointer px-6 text-right text-sm font-semibold leading-8">
              Sort By
              <div className="inline-block">
                <div className="arrow_down ml-4 -mt-1.5 block"></div>
              </div>
            </div>
            <div className="border-lF bg-gray-100F text-whiteF mt-2 table h-8 cursor-pointer px-6 text-right text-sm font-semibold leading-8">
              Location
              <div className="inline-block">
                <div className="arrow_down ml-4 -mt-1.5 block"></div>
              </div>
            </div>
          </div>
        </div>
        {/* ====================================================================== */}
        <div className="border-tF flex hidden h-10 w-full justify-end">
          {/* <div className="h-6 mt-2 px-6 bg-gray-100F border-r text-sm font-semibold text-whiteF table">
            Filter
          </div> */}
          <div className="bg-gray-100F text-whiteF mt-2 table h-6 cursor-pointer border-r px-6 text-sm font-semibold">
            Sort By
            <div className="inline-block">
              <div className="arrow_down ml-4 -mt-1.5 block"></div>
            </div>
          </div>
          <div className="bg-gray-100F text-whiteF mt-2 table h-6 cursor-pointer px-6 text-sm font-semibold">
            Location
            <div className="inline-block">
              <div className="arrow_down ml-4 -mt-1.5 block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
