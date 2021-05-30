import React from 'react';
import {ethers} from 'ethers';
import './PageContent.css'

type BodyProps = {
    address : string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
    history: ethers.providers.TransactionResponse[];
}

const uniAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
// const uniABI = [
//     "function tokenURI(tokenId uint256) view returns (string)"
// ];
// const uniContract = new ethers.Contract(uniAddress, uniABI);
// console.log(uniContract);

function getTransactionHistory(history : ethers.providers.TransactionResponse[]) {
    const element =  (
        <div className="TransactionList" >
            <h4 className="boxTitle">Uniswap v3 LP Transactions:</h4>
            <ul> 
                {history.map((txn) => 
                    {
                        
                        const hash = txn.hash.substring(0,6)+"..."+txn.hash.substring(txn.hash.length - 6);
                        if(txn.to === uniAddress) console.log(txn.data);
                        return txn.to === uniAddress ? <li key={txn.hash}><a href={"https://etherscan.io/tx/" +txn.hash } target={"_blank"} rel={"noreferrer"}>{hash}</a></li> : "";
                    }
                )}
            </ul>
        </div>
        
    );
    return element;
}

class PageContent extends React.Component<BodyProps, {}> {
    render() {
        const transactionHistory = this.props.status === "loggedIn" ? getTransactionHistory(this.props.history) : <div className="TransactionList" ><h4>Please Login</h4></div>; 
        return (
            <div className="Page-Content" >
                {transactionHistory}
            </div>
        )
    }
}

export default PageContent;