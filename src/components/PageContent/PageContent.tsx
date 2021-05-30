import React from 'react';
import {ethers} from 'ethers';
import './PageContent.css'

type BodyProps = {
    address : string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
    history: ethers.providers.TransactionResponse[];
}

const uniAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

function getTransactionHistory(history : ethers.providers.TransactionResponse[]) {
    const element =  (
        <ul> 
            {history.map((txn) => 
                {
                    return txn.to === uniAddress ? <li key={txn.hash}>{txn.hash}</li> : ""
                }
            )}
        </ul>
    );
    return element;
}

class PageContent extends React.Component<BodyProps, {}> {
    render() {
        const transactionHistory = this.props.status === "loggedIn" ? getTransactionHistory(this.props.history) : <h1>Please Login</h1>; 
        return (
            <div className="Page-Content" >
                {transactionHistory}
            </div>
        )
    }
}

export default PageContent;