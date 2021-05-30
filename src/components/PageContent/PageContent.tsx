import React from 'react';
import {ethers} from 'ethers';
import './PageContent.css'

type BodyProps = {
    address : string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
}

class PageContent extends React.Component<BodyProps, {}> {
    render() {
        return (
            <div className="Page-Content">
                Testing
            </div>
        )
    }
}

export default PageContent;