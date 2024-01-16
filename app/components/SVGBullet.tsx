import * as React from "react";

export function SVGBullet({svg, text, h1Text}) {

    let bulletPoint = "";
    if(text) {
        if(text.startsWith("https")) {
            let link = text;
            text = text.replace("https://", "");
            bulletPoint = <a className="text-xs" href={link}>{text}</a>
        }
        else {
            bulletPoint = <p className="text-xs">{text}</p>
        }
    }
    else {
        bulletPoint = <h1>{h1Text}</h1>
    }



    return <div className="flex flex-row space-x-1">
        {svg}
        {bulletPoint}
    </div>
}