import {WorkExperienceBullet} from "./WorkExperienceBullet";
import * as React from "react";
import {Fragment} from "react";
import {useLoaderData} from "@remix-run/react";

export default function WorkExperience() {
    const data = useLoaderData();

    return <Fragment>
        <ul>
            <li>
                <WorkExperienceBullet duration={data.ENV.FIRST_WORK_DETAILS.duration} company={data.ENV.FIRST_WORK_DETAILS.company} position={data.ENV.FIRST_WORK_DETAILS.position} details={data.ENV.FIRST_WORK_DETAILS.details}/>
            </li>
            <li>
                <WorkExperienceBullet duration={data.ENV.SECOND_WORK_DETAILS.duration} company={data.ENV.SECOND_WORK_DETAILS.company} position={data.ENV.SECOND_WORK_DETAILS.position} details={data.ENV.SECOND_WORK_DETAILS.details}/>
            </li>
            <li>
                <WorkExperienceBullet duration={data.ENV.THIRD_WORK_DETAILS.duration} company={data.ENV.THIRD_WORK_DETAILS.company} position={data.ENV.THIRD_WORK_DETAILS.position} details={data.ENV.THIRD_WORK_DETAILS.details}/>
            </li>
        </ul>
        <div className="mt-2">
            <h1 className="mt-1 text-xl font-bold text-[#414042]">Internships</h1>
            <div className="flex flex-row space-x-5">
                {data.ENV.INTERNSHIPS.map(value => {
                    return <div>
                        <p className="text-xs text-[#737373]">{value.date}</p>
                        <p className="text-xs font-bold">{value.company}</p>
                    </div>
                })}
            </div>

        </div>
    </Fragment>
}