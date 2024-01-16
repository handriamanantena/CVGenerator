import {Fragment} from 'react';

export const LeftPaneInfoSection = ({heading, list, svg}) => {

    const listItems = list.map((info) =>
        <p className="">{info}</p>
    );

    return (<Fragment>
        <div className="flex flex-row">
            <div className="flex items-center justify-center p-1">
                {svg}
            </div>
            <h1>{heading}</h1>
        </div>
        <div>
            {listItems}
        </div>
    </Fragment>);
}

export default LeftPaneInfoSection;