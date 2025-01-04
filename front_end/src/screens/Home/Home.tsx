import { useEffect, useState } from "react"
import LogoWhite from "../../assets/Daco_4275592.png";
import LogoDark from "../../assets/Daco_4669359.png";
import Hut from "../../assets/home-activity (1).png";
import Glass from "../../assets/loupe.png"
const Home = () => {
    const theme = localStorage.getItem("isDark");
    console.log(theme === "true" || "false");
    const [isDark,SetIsDark] = useState(theme === "true" ? true : false);
    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
            localStorage.setItem("isDark",true);
        }else{
            document.body.classList.add("light-theme")
            document.body.classList.remove("dark-theme");
            localStorage.setItem("isDark",false);
        }
    }, [isDark])
    const toggleTheme = () => {
        if (isDark) return SetIsDark(false);
        if (!isDark) return SetIsDark(true);
    }
    return (
        <div>
            <div className="left-sidebar absolute flex flex-col">
                <div className="mt-[25px] flex-shrink-0 box-content mb-[16px] mx-[12px]">
                    <div onClick={toggleTheme} className="w-[196px] mb-[19px] opacity-100 active:opacity-70 hover:cursor-pointer">
                        <img height={29} className="flex mt-2" width={103} src={isDark ? LogoWhite : LogoDark} alt="" />
                    </div>
                </div>
                <div className="flex-grow left-sidebar-middle">
                    <div className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={Hut} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={Glass} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="">Search</h1>
                        </div>
                    </div>
                    <div className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={Hut} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={Hut} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={Hut} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Home</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="left-icon-wrapper">
                        <div className="">
                            <img width={20} src={Hut} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-main-wrapper">
                <div className="flex feed-wrapper justify-center items-center">
                    <div className="main-feed"></div>
                    <div className="right-sidebar"></div>
                </div>
            </div>
        </div>
    )
}

export default Home