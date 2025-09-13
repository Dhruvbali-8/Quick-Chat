import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSideBar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        className={`bg-[#818582]/10 text-white w-full relative overflow-y-scroll mt-2${
          selectedUser ? "max-md:hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-3 text-sm font-light mx-auto pt-8 pb-2">
          {/* Profile Image */}
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            className="w-20 aspect-[1/1] rounded-full object-cover"
          />

          {/* Name + Green Dot */}
          <div className="flex items-center gap-2">
            <h1 className="text-sm text-white font-medium">{selectedUser.fullName}</h1>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          </div>

          {/* Bio below */}
          <p className="text-gray-300 text-center text-xs px-6">
            {selectedUser.bio || "Hi Everyone, I am Using QuickChat"}
          </p>
        </div>

        {/* Divider */}
        <hr className="border-[#ffffff50] my-2 mx-3" />

        {/* Media Section */}
        <div className="px-5 text-xs pb-10">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {imagesDummyData.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} className="h-full rounded-md" alt="" />
              </div>
            ))}
          </div>
        </div>
        <button className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer'>
            LogOut
        </button>
      </div>
    )
  )
}

export default RightSideBar
