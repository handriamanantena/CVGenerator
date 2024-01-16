import {SVGBullet} from "./SVGBullet";
import * as React from "react";
import {Fragment} from 'react';

export function BasicInfo({mainSVG, title, list}) {

    return <Fragment>
        <div className="flex flex-row">
            <SVGBullet svg={mainSVG} h1Text={title}/>
        </div>
        <ul className="space-y-1">
            {list.map(value => {
                return  <li>
                    <SVGBullet svg={value.svg} text={value.text}/>
                </li>
            })}
        </ul>
    </Fragment>
}