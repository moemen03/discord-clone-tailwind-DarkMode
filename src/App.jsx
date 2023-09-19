import Channelbar from "./components/SideBar/SideBar/Channelbar/Channelbar"
import ContentContainer from "./components/SideBar/SideBar/ContentContainer/ContentContainer"
import SideBar from "./components/SideBar/SideBar/SideBar"



const App = () => {
  return (
    <div className="flex h-auto">
      <SideBar/>
      <Channelbar/>
      <ContentContainer/>
    </div>
  )
}

export default App
