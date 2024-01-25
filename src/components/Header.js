import {LOGO} from "../utils/constant";

const Header = () => {
  return (
    <div className = "absolute px-8 py-2 bg-gradient-to-b from-black z-30">
      <img src = {LOGO} className="w-52" alt="LOGO"></img>
    </div>
  )
}

export default Header