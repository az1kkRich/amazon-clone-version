import React from 'react';
import LeftSide from './LeftSite/LeftSide';
import RightSide from './RightSite/RightSide';

function DisplayContent(props) {
    return (
        <div className='d-flex'>
            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />
            </div>
        </div>
    );
}

export default DisplayContent;