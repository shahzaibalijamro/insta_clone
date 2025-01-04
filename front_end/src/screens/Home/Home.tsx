import { useEffect } from "react"
import Logo from "../../assets/TheGram.png"
const Home = () => {
    useEffect(()=>{
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
    },[])
    return (
        <div>
            <div className="left-sidebar absolute flex flex-col">
                <div className="mt-[25px] box-content mb-[16px] mx-[12px]">
                    <div className="w-[196px] opacity-100 active:opacity-70 hover:cursor-pointer">
                    <img height={29} className="flex mt-2" width={103} src={Logo} alt="" />
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