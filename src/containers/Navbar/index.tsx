import { useState } from "react";
import { UserImage } from "../../assets";
import { NAV_TABS } from "../../utils";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-bgColor fixed left-0 top-0 flex h-full gap-5 flex-col bg-[rgba(255,255,255,0.2)] px-4 py-5 backdrop-blur-[5px] transition-all duration-300 ease-in-out ${
        isHovered ? "w-[270px]" : "w-[100px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-[100px] flex-col items-start justify-around px-4 text-sm ${isHovered && "items-center"}`}
      >
        <img
          className={`mb-3 h-[40px] w-[40px] rounded-full transition-all duration-300 ease-in-out ${
            isHovered && "w-[60px] h-[60px]"
          }`}
          src={UserImage}
          alt="User"
        />
        <div className={`text-[8px] text-primaryColor ${isHovered&&"hidden"}`}>{`Sathya D`}</div>
        <div
          className={`${isHovered ? "block transition-all duration-300 ease-in-out" : "hidden"} text-center`}
        >
          <h2 className="text-md font-bold">D Sathya</h2>
          <p>shanthisathya1@gmail.com</p>
        </div>
      </div>
      <div className="px-4">
        {NAV_TABS.map((item) => {
          const { id, icon, name } = item || {};
          return (
            <div
              key={id}
              className={`hover:bg-hoverColor flex gap-5 cursor-pointer items-center transition-all duration-300 ease-in-out${
                isHovered ?"rounded-md my-4 p-3": " my-9" 
              }`}
            >
              <img src={icon} alt="Icon" className="w-[30px]" />
              <div
                className={`${isHovered ? "block" : "hidden"} whitespace-nowrap`}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
