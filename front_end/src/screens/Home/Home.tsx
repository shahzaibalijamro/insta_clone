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
import HeartWhite from "../../assets/heart (3).png"
import EmptyHeartWhite from "../../assets/heart (1).png"
import HeartDark from "../../assets/heart (2).png"
import EmptyHeartDark from "../../assets/heart.png"
import AddWhite from "../../assets/AddWhite.png"
import EmptyAddWhite from "../../assets/EmptyAddWhite.png"
import AddDark from "../../assets/AddDark.png"
import EmptyAddDark from "../../assets/EmptyAddDark.png"
import SlimBarWhite from "../../assets/SlimBarWhite.png"
import SlimBarDark from "../../assets/SlimBarDark.png"
import ThickBarWhite from "../../assets/ThickBarWhite.png"
import ThickBarDark from "../../assets/ThickBarDark.png"
import SettingsWhite from "../../assets/social-media (1).png"
import SettingsDark from "../../assets/social-media.png"
import { AvatarDemo } from "@/components/Avatar";
import { DropdownMenuDemo } from "@/components/Dropdown";
import { useLocation } from "react-router-dom";
const Home = () => {
    const currentPage = useLocation();
    console.log(currentPage.pathname);

    const theme = localStorage.getItem("isDark");
    const [isDark, SetIsDark] = useState(theme === "true" ? true : false);
    const [selectedIcon, setSelectedIcon] = useState(currentPage.pathname === "/" ? "Home" : "");
    const [hoverColor, setHoverColor] = useState("");
    console.log(selectedIcon);

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
    const showRelativeIcon = (icon: string) => {
        if (isDark) {
            if (icon === "Settings") {
                return SettingsWhite
            }
        }
        if (!isDark) {
            if (icon === "Settings") {
                return SettingsDark
            }
        }
        if ((isDark && selectedIcon === icon)) {
            if (icon === "Home") {
                return HutWhite
            }
            if (icon === "Messages") {
                return MessengerWhite
            }
            if (icon === "Notifications") {
                return HeartWhite
            }
            if (icon === "Create") {
                return AddWhite
            }
            if (icon === "More") {
                return ThickBarWhite
            }
        }
        if (isDark && selectedIcon !== icon && selectedIcon !== "") {
            if (icon === "Home") {
                return EmptyHutWhite
            }
            if (icon === "Messages") {
                return EmptyMessengerWhite
            }
            if (icon === "Notifications") {
                return EmptyHeartWhite
            }
            if (icon === "Create") {
                return EmptyAddWhite
            }
            if (icon === "More") {
                return SlimBarWhite
            }
        }
        if ((!isDark && selectedIcon === "") || (!isDark && selectedIcon === icon)) {
            if (icon === "Home") {
                return HutDark
            }
            if (icon === "Messages") {
                return MessengerDark
            }
            if (icon === "Notifications") {
                return HeartDark
            }
            if (icon === "Create") {
                return AddDark
            }
            if (icon === "More") {
                return ThickBarDark
            }
        }
        if ((!isDark && selectedIcon !== icon && selectedIcon !== "")) {
            if (icon === "Home") {
                return EmptyHutDark
            }
            if (icon === "Messages") {
                return EmptyMessengerDark
            }
            if (icon === "Notifications") {
                return EmptyHeartDark
            }
            if (icon === "Create") {
                return EmptyAddDark
            }
            if (icon === "More") {
                return SlimBarDark
            }
        }
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
                    <div style={selectedIcon === "Home" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        fontWeight: "bold"
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Home")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="font-bold">Home</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Search" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        width: "48px",
                        boxSizing: "border-box",
                        border: "2px solid white"
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 box-border cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={23} src={isDark ? GlassWhite : GlassDark} alt="" />
                        </div>
                        <div style={selectedIcon === "Search" ? {
                            display: "none"
                        } : {}} className="ps-4">
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
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Messages")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">Messages</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Notifications" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        fontWeight: "bold"
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Notifications")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">Notifications</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Create" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        fontWeight: "bold"
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Create")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">Create</h1>
                        </div>
                    </div>
                    <div style={selectedIcon === "Profile" ? {
                        backgroundColor: hoverColor,
                        borderRadius: 8,
                        fontWeight: "bold"
                    } : {}} onClick={handleSelected} className="left-icon-wrapper opacity-100 active:opacity-70 cursor-pointer flex justify-start items-center">
                        <div className="">
                            <AvatarDemo clicked={selectedIcon === "Profile" ? true : false} />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">Profile</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="left-icon-wrapper flex notHover opacity-70 cursor-not-allowed justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Settings")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">AI Studio</h1>
                        </div>
                    </div>
                    <div className="left-icon-wrapper notHover opacity-70 cursor-not-allowed flex justify-start items-center">
                        <div className="">
                            <img className="flex" width={22} src={showRelativeIcon("Settings")} alt="" />
                        </div>
                        <div className="ps-4">
                            <h1 style={{ fontWeight: "inherit" }} className="">Threads</h1>
                        </div>
                    </div>
                    <DropdownMenuDemo handleSelected={handleSelected} hoverColor={hoverColor} selectedIcon={selectedIcon === "More"} showRelativeSettingIcon={showRelativeIcon("Settings")} showRelativeIcon={showRelativeIcon("More")} />
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