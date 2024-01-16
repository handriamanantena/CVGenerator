
import banner from "./images/profilePic.jpg";
import LeftInfo from "./LeftInfo";
import RightPane from "./RightPane";

export default function Page() {

    return <div className="page flex flex-row">
        <div className="flex-col left-1 bg-cyan-800 w-1/3 h-full">
            <img className="profilePicture object-cover w-full h-96" src={banner}/>
            <div className="px-5 text-white">
                <LeftInfo/>
            </div>
        </div>
        <div className="flex-col justify-center right-1 grow w-full pl-10 pr-5 pt-14">
            <RightPane/>
        </div>
    </div>

}