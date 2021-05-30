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
        <div className="TransactionList" >
            <h1>Uniswap Transactions:</h1>
            <ul> 
                {history.map((txn) => 
                    {
                        return txn.to === uniAddress ? <li key={txn.hash}><a href={"https://etherscan.io/tx/" +txn.hash } target={"_blank"} rel={"noreferrer"}>{txn.hash}</a></li> : ""
                    }
                )}
            </ul>
        </div>
        
    );
    return element;
}

class PageContent extends React.Component<BodyProps, {}> {
    render() {
        const transactionHistory = this.props.status === "loggedIn" ? getTransactionHistory(this.props.history) : <div className="TransactionList" ><h1>Please Login</h1></div>; 
        return (
            <div className="Page-Content" >
                {transactionHistory}
            </div>
        )
    }
}

export default PageContent;