export function WorkExperienceBullet({duration, company, position, details}) {

    return  <div className="border-black border-l-2 pb-5">
        <div className="flex flex-row grow">
            <div className="bg-white border-black border-2 rounded-full min-w-3 max-w-3 max-h-3 min-h-3 relative right-[7px]">
            </div>
            <ul>
                <p className="relative bottom-[7px] text-[#737373]">{duration}</p>
                <p className="relative bottom-[7px] text-[#737373]">{company}</p>
                <h1 className="font-bold">{position}</h1>
                <ul className="list-disc ml-5">
                    {details ? details.map(value => {
                        return <li><p className="text-xs">{value}</p></li>
                    }) : <></>}
                </ul>
            </ul>
        </div>


    </div>

}