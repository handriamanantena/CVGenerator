import WorkExperience from "./WorkExperience";
import {Fragment, useEffect, useState} from "react";
import {useLoaderData} from "@remix-run/react";
export default function RightPane() {
    const data = useLoaderData();

    return <Fragment>
        <h1 className="font-sans text-5xl font-bold text-[#414042]">{data.ENV.NAME}</h1>
        <h1 className="font-sans text-5xl font-bold text-[#414042]">{data.ENV.LAST_NAME}</h1>
        <h1 className="font-sans text-2xl text-[#414042]">{data.ENV.POSITION}</h1>
        <h1 className="mt-5 text-2xl font-bold text-[#414042]">About Me</h1>
        <p>{data.ENV.ABOUT_ME}</p>
        <h1 className="my-5 text-2xl font-bold text-[#414042]">Work Experience</h1>
        <WorkExperience/>
    </Fragment>;
}