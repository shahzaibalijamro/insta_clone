import { useEffect, useState } from "react"
import LogoWhite from "../../assets/Daco_4275592.png";
import LogoDark from "../../assets/Daco_4669359.png";
import HutWhite from "../../assets/home-activity (1).png";
import EmptyHutWhite from "../../assets/home (2).png";
import HutDark from "../../assets/image.png";
import EmptyHutDark from "../../assets/home (1).png";
import GlassWhite from "../../assets/loupe.png";
import GlassDark from "../../assets/image (1).png";
import CompassWhite from "../../assets/compass.png";
import CompassDark from "../../assets/compass (1).png";
import ReelWhite from "../../assets/video (2).png";
import ReelDark from "../../assets/video.png";
const Home = () => {
    const theme = localStorage.getItem("isDark");
    console.log(theme === "true" || "false");
    const [isDark, SetIsDark] = useState(theme === "true" ? true : false);
    const [selectedIcon, setSelectedIcon] = useState("");
    const [hoverColor, setHoverColor] = useState("");
    useEffect(() => {
        if (isDark) {
            setHoverColor("#1a1a1a");
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
            localStorage.setItem("isDark", "true");
        } else {
            setHoverColor("#f2f2f2");
            document.body.classList.add("light-theme")
            document.body.classList.remove("dark-theme");
            localStorage.setItem("isDark", "false");
        }
    }, [isDark])
    const toggleTheme = () => {
        if (isDark) return SetIsDark(false);
        if (!isDark) return SetIsDark(true);
    }
    function handleSelected(event: React.MouseEvent<HTMLHeadingElement>) {
        const h1Element = event.currentTarget.querySelector('h1');
        if (h1Element) {
            setSelectedIcon(h1Element.innerText)
            console.log(h1Element.innerText);
        }
    }
    console.log(selectedIcon)
    console.log(hoverColor)
    return (
        <div>
            <div className="left-sidebar absolute flex flex-col">
                <div className="mt-[25px] flex-shrink-0 box-content mb-[16px] mx-[12px]">
                    <div onClick={toggleTheme} className="w-[196px] mb-[19px] opacity-100 active:opacity-70 hover:cursor-pointer">
                        <img height={29} className="flex mt-2" width={103} src={isDark ? LogoWhite : LogoDark} alt="" />
                    </div>
                </div>
                <div className="flex-grow left-sidebar-middle">
                    <div style={selectedIcon === "Home" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={
                                (isDark && selectedIcon === "") || (isDark && selectedIcon === "Home") ? HutWhite
                                : 
                                (isDark && selectedIcon !== "Home" && selectedIcon !== "") ? EmptyHutWhite 
                                : 
                                (!isDark && selectedIcon === "") || (!isDark && selectedIcon === "Home") ? HutDark 
                                : 
                                (!isDark && selectedIcon !== "Home" && selectedIcon !== "") ? EmptyHutDark : ""} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Search" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="border border-white rounded-md">
                            <img className="flex" width={23} src={isDark ? GlassWhite : GlassDark} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="">Search</h1>
                        </div>
                    </div>
                    <div onClick={handleSelected} className="left-icon-wrapper opacity-70 notHover cursor-not-allowed flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={23} src={isDark ? CompassWhite : CompassDark} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="">Explore</h1>
                        </div>
                    </div>
                    <div onClick={handleSelected} className="left-icon-wrapper opacity-70 notHover cursor-not-allowed flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={23} src={isDark ? ReelWhite : ReelDark} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="">Reels</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Messages" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={HutWhite} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 className="font-bold">Messages</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="left-icon-wrapper">
                        <div className="">
                            <img width={20} src={HutWhite} alt="" />
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
        </div >
    )
}

export default Home