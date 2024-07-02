import { useState } from "react";
import { Menu, UserImage } from "../../assets";
import { NAV_TABS } from "../../utils";
import { motion } from "framer-motion";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`fixed left-0 top-0 flex h-full flex-col items-center bg-[rgba(255,255,255,0.2)] bg-bgColor text-perimaryText backdrop-blur-[5px] transition-all duration-300 ease-in-out ${
          isHovered ? "w-[180px]" : "w-[70px]"
        }`}
        style={{ boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="absolute right-[-17px] top-[0px]">
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div
              className="after:-rotate-360 peer h-8 w-8 rounded-full bg-white shadow-md outline-none ring-0 duration-300 after:absolute after:left-1 after:top-1 after:flex after:h-6 after:w-6 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:duration-500 after:content-['✔️'] peer-checked:bg-white peer-checked:after:rotate-180 peer-checked:after:content-['❌'] peer-hover:after:scale-75 peer-focus:outline-none"
              onClick={() => setIsHovered(!isHovered)}
            ></div>
          </label>
        </div>
        <div
          className={`mt-2 flex h-[20%] items-center justify-center p-2 text-[12px]`}
        >
          <div
            className={`${isHovered ? "flex flex-col items-center gap-3 rounded-xl px-3 py-2" : "flex flex-col items-center"}`}
          >
            <div className="rounded-full border border-secondaryColor p-1">
              <img
                className={`h-[40px] w-[40px] rounded-full transition-all duration-300 ease-in-out ${
                  isHovered && "h-[60px] w-[60px]"
                }`}
                src={UserImage}
                alt="User"
              />
            </div>
            <div
              className={`mt-1 text-center text-[8px] text-primaryColor ${isHovered && "hidden"}`}
            >{`Sathya D`}</div>
            <div
              className={`text-center text-[8px] text-primaryColor ${isHovered && "hidden"}`}
            >{`Web Developer`}</div>
            <div
              className={`${isHovered ? "block transition-all duration-300 ease-in-out" : "hidden"} text-center`}
            >
              <div className="text-md font-bold">D Sathya</div>
              <div className="text-md font-bold text-SecondaryText">
                Web Developer
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-around">
          {NAV_TABS.map((item, index) => {
            const { id, icon, name } = item || {};
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: index * 0.3 }}
                className={`group relative flex w-full cursor-pointer items-center gap-5 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-hoverColor hover:shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,_rgba(0,0,0,0.06)_0px_0px_0px_1px] ${isHovered ? "rounded-md px-3" : "justify-center"}`}
              >
                <div className={`flex flex-col items-center`}>
                  <img src={icon} alt="Icon" className="h-[30px] w-[30px]" />
                  <div className="bg-SechoverColor absolute -right-3 top-1/2 hidden -translate-y-1/2 translate-x-full rounded-md p-2 group-hover:flex">
                    <span className="whitespace-nowrap text-primaryColor">
                      {name}
                    </span>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-inherit p-1"></div>
                  </div>

                  <div
                    className={`text-center text-[8px] text-primaryColor ${isHovered && "hidden"}`}
                  >
                    {name}
                  </div>
                </div>
                <div
                  className={`${isHovered ? "block" : "hidden"} whitespace-nowrap text-sm text-perimaryText`}
                >
                  {name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
