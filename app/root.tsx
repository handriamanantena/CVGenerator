import stylesheet from "./root.css";
import {LinksFunction} from "@remix-run/react/dist/routeModules";
import { json } from "@remix-run/node";

import {
    Links,
    Meta,
    Outlet,
    Scripts,
    LiveReload
} from "@remix-run/react";
import Page from "./page";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export async function loader() {
    return json({
        ENV: {
            NAME: process.env.NAME,
            LAST_NAME: process.env.LAST_NAME,
            DATA: process.env.POSITION,
            ABOUT_ME: process.env.ABOUT_ME,
            POSITION: process.env.POSITION,
            FIRST_WORK_DETAILS: JSON.parse(process.env.FIRST_WORK_DETAILS),
            SECOND_WORK_DETAILS: JSON.parse(process.env.SECOND_WORK_DETAILS),
            THIRD_WORK_DETAILS: JSON.parse(process.env.THIRD_WORK_DETAILS),
            INTERNSHIPS: JSON.parse(process.env.INTERNSHIPS),
            LINKEDIN: process.env.LINKEDIN,
            WEBSITE: process.env.WEBSITE,
            GITHUB: process.env.GITHUB,
            PHONE: process.env.PHONE,
            EMAIL: process.env.EMAIL,
            SCHOOL: process.env.SCHOOL,
            DEGREE: process.env.DEGREE,
            SKILLS: process.env.SKILLS,
            LANGUAGES: JSON.parse(process.env.LANGUAGES)
        },
    });
}

export default function App() {
    return (
        <html>
        <head>
            <link
                rel="icon"
                href="data:image/x-icon;base64,AA"
            />
            <Meta />
            <Links />
        </head>
        <body>

        <Page/>
        <Outlet />
        <Scripts />
        <LiveReload/>
        </body>
        </html>
    );
}