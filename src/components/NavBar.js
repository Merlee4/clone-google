import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'

function NavBar() {
    return (
        <div className="top-0 left-0 right-0 fixed flex justify-end w-full p-4 gap-6 items-center text-gray-700">
            <div className="flex gap-4 text-sm">
                <a href="https://mail.google.com/mail/?authuser=0&ogbl" className=" hover:underline">Gmail</a>
                <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl" className="hover:underline">Images</a>
            </div>
            <div className="flex gap-6 items-center">
                <ViewGridIcon className="h-7 hover:bg-gray-100 rounded-full p-1 cursor-pointer" />
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFAKUjQ8zIsFA/profile-displayphoto-shrink_200_200/0/1611671601557?e=1622073600&v=beta&t=XZWn5RALkSWOjbCVROOa7OobGY4ouLjPnYs1gy5NTZ4" alt="profile" className="h-8 rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default NavBar
