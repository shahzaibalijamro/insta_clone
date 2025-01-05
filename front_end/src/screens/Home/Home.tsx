import { useEffect, useState } from "react"
import LogoWhite from "../../assets/LogoWhite.png";
import LogoDark from "../../assets/LogoDark.png";
import HutWhite from "../../assets/HutWhite.png";
import EmptyHutWhite from "../../assets/EmptyHutWhite.png";
import HutDark from "../../assets/HutDark.png";
import EmptyHutDark from "../../assets/EmptyHutDark.png";
import GlassWhite from "../../assets/GlassWhite.png";
import GlassDark from "../../assets/GlassDark.png";
import CompassWhite from "../../assets/CompassWhite.png";
import CompassDark from "../../assets/CompassDark.png";
import ReelWhite from "../../assets/ReelWhite.png";
import ReelDark from "../../assets/ReelDark.png";
import MessengerWhite from "../../assets/MessengerWhite.png"
import EmptyMessengerWhite from "../../assets/EmptyMessengerWhite.png"
import MessengerDark from "../../assets/MessengerDark.png"
import EmptyMessengerDark from "../../assets/EmptyMessengerDark.png"
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
    const showRelativeIcon = (icon:string) => {
        if ((isDark && selectedIcon === "") || (isDark && selectedIcon === icon)) {
            if (icon === "Home") {
                return HutWhite
            }
            if (icon === "Messages") {
                return MessengerWhite
            }
        }
        if(isDark && selectedIcon !== icon && selectedIcon !== ""){
            if (icon === "Home") {
                return EmptyHutWhite
            }
            if (icon === "Messages") {
                return EmptyMessengerWhite
            }
        }
        if ((!isDark && selectedIcon === "") || (!isDark && selectedIcon === icon)) {
            if (icon === "Home") {
                return HutDark
            }
            if (icon === "Messages") {
                return MessengerDark
            }
        }
        if ((!isDark && selectedIcon !== icon && selectedIcon !== "")) {
            if (icon === "Home") {
                return EmptyHutDark
            }
            if (icon === "Messages") {
                return EmptyMessengerDark
            }
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
                        borderRadius: 8,
                        fontWeight: "bold"
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Home")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{fontWeight: "inherit"}} className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Search" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        width: "fit-content",
                        border: "2px solid white"
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={23} src={isDark ? GlassWhite : GlassDark} alt="" />
                        </div>
                        <div style={selectedIcon === "Search" ? {
                        display: "none"
                    }:{}} className="ps-4">
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
                        borderRadius: 8,
                        fontWeight: "bold"
                    }:{}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Messages")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{fontWeight: "inherit"}} className="">Messages</h1>
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