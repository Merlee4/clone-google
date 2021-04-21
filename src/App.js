import NavBar from "./components/NavBar";
import banner from './banner.png'
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Footer from "./components/Footer";
import mic from './mic.svg'
import { useState } from "react";
import ReactModal from "react-modal";

function App() {
  const [showModal, setShowModal] = useState(false)
  var [searchText, setSearchText] = useState("")
  const handleSearch = (e) => {

    e.preventDefault()
    if (searchText.length > 0) {

      var searhfor = searchText.split(' ').join('+')
      window.location = `https://www.google.com/search?q=${searhfor}&sxsrf=ALeKk00N1pD_WpWr2kyBld-Rdw0hV9y0kw%3A1618911989354&source=hp&ei=9aJ-YKbHE9KulwSf3ZTgBg&iflsig=AINFCbYAAAAAYH6xBU5zGV2X9gvBe-9bFhN0Pgo2uwwA&oq=how+to+swim&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgUIABCxAzIFCAAQsQMyAggAMgIIADICCAAyBQgAELEDMgIIADICCAAyAggAUNOCdViTlHVgmpR1aAVwAHgAgAGDBIgBgwSSAQM1LTGYAQCgAQGqAQdnd3Mtd2l6sAEA&sclient=gws-wiz&ved=0ahUKEwjmla-QxYzwAhVS14UKHZ8uBWwQ4dUDCAc&uact=5`

    }
  }
  return (
    <div className="flex flex-col" >
      <NavBar />
      <div className=" flex justify-center items-center flex-col h-screen w-screen">
        <div className="mx-auto flex flex-col items-center">
          <div className="mb-8">
            <img src={banner} alt="banner " />
          </div>
          {/* MIDDLE */}
          <div className="flex flex-col mb-48 " style={{ width: 582 }}>

            <form onSubmit={(e) => handleSearch(e)} className="flex flex-col px-10">
              <div className="border rounded-full items-center flex py-2.5 px-5 hover:shadow-md " >
                {/* SearhIcon */}
                <SearchIcon className="h-5 text-gray-400" />
                {/* Input */}
                <input type="text" className="outline-none ml-4 w-96 flex-1" autoFocus style={{ fontSize: 14 }} onChange={(e) => setSearchText(e.target.value)} />
                {/* Google Voice Icon */}
                <button >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png" type="text" alt="mic" className="h-5 object-contain" onClick={() => setShowModal(true)} />
                </button>
              </div>

              <div className="flex gap-3 mx-auto pt-8 text-gray-700">
                {/* Search Now Button */}
                <button className="py-2 px-3 bg-gray-50 rounded-md  hover:border hover:border-gray-800 hover:shadow " type="submit" onClick={(e) => handleSearch(e)}>Google Search</button>
                {/* Im Feeling Lucky */}
                <a href="https://www.google.com/doodles" className="py-2 px-3 bg-gray-50 rounded-md  hover:border hover:border-gray-800 hover:shadow cursor-pointer">I'm Feeling Lucky</a>
              </div>
            </form>
            <div className="flex text-sm mx-auto mt-6 ">
              <p className="mr-2">Google offered in:</p>
              <div className="flex gap-2 text-purple-900">
                <a href="https://www.google.com/setprefs?sig=0_hT3BAdHhAj3oP1SCrAJ6S9K0sQo%3D&hl=ny&source=homepage&sa=X&ved=0ahUKEwjhrP_2uYzwAhUS1hoKHYXtAiIQ2ZgBCA4" className="hover:underline" >Chichewa</a>
                <a href="https://www.google.com/setprefs?sig=0_hT3BAdHhAj3oP1SCrAJ6S9K0sQo%3D&hl=bem&source=homepage&sa=X&ved=0ahUKEwjhrP_2uYzwAhUS1hoKHYXtAiIQ2ZgBCA8" className="hover:underline" >IChibemba</a>
                <a href="https://www.google.com/setprefs?sig=0_hT3BAdHhAj3oP1SCrAJ6S9K0sQo%3D&hl=tum&source=homepage&sa=X&ved=0ahUKEwjmla-QxYzwAhVS14UKHZ8uBWwQ2ZgBCBA" className="hover:underline" >Tumbuka</a>
                <a href="https://www.google.com/setprefs?sig=0_hT3BAdHhAj3oP1SCrAJ6S9K0sQo%3D&hl=loz&source=homepage&sa=X&ved=0ahUKEwjmla-QxYzwAhVS14UKHZ8uBWwQ2ZgBCBE" className="hover:underline" >Lozi</a>
              </div>
            </div>
          </div>
        </div>
        <ReactModal isOpen={showModal} onRequestClose={() => setShowModal(false)} className="h-screen w-screen">
          <button className="fixed right-2" onClick={() => setShowModal(false)}>
            <XIcon className="h-10 p-2 " />
          </button>
          <div className="flex mx-auto w-full h-full " onClick={() => setShowModal(false)}>
            <div className="m-auto flex gap-8 items-center">
              <div className="text-gray-600">
                <h1 className=" text-4xl">Please check your microphone.</h1>
                <a href="https://support.google.com/chrome/answer/2693767?p=ui_voice_search&visit_id=637545105679493640-2280343999&rd=1#change" className="text-blue-600 underline text-2xl">Learn more</a>
              </div>
              <MicrophoneIcon className="h-48 p-6 border rounded-full shadow text-gray-600" />
            </div>
          </div>
        </ReactModal>
      </div>
      <Footer />
    </div >
  );
}

export default App;
