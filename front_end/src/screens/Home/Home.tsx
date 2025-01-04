import { useEffect } from "react"
const Home = () => {
    useEffect(()=>{
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
    },[])
    return (
        <div>
            <div className="left-sidebar absolute"></div>
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