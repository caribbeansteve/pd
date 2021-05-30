import React from 'react';
import { ethers } from 'ethers';
import Address from '../address/Address';
import PageContent from '../PageContent/PageContent'
import './MainPage.css';

type AccountState = {
    address: string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
    history : ethers.providers.TransactionResponse[];
}

type AccountProps = {
    status: string;
}

export let provider : ethers.providers.Web3Provider;
export const etherScanProvider = new ethers.providers.EtherscanProvider("homestead", process.env.ETHERSCAN_API_KEY);

class MainPage extends React.Component<{}, AccountState> {
    constructor(props: AccountProps){
        super(props)
        this.state = {address: "", status:"loggedOut", history : []};
        this.login = this.login.bind(this);
    }

    login() {
        this.setState({status: "loading"});
        window.ethereum.enable().then( () => {
            provider = new ethers.providers.Web3Provider(window.ethereum || {});
            provider.getSigner().getAddress().then( (res) => {
                this.setState({address: res, status: "loading"});
                etherScanProvider.getHistory(res).then (txns => {
                    this.setState({history: txns, status: "loggedIn"})
                });
            });

           

        })
    }

    displayAddress() {
        return this.state.address.length > 0 ? "0x.." + this.state.address.substring(this.state.address.length - 4) : "";
    }
    
    render() {
        return (
            <div>
                <div className="Header">
                    Pool Daddies
                    <Address 
                        address={this.displayAddress()} 
                        status={this.state.status} 
                        onLogin={this.login}
                    />
                </div>
                <PageContent 
                    address={this.state.address}
                    status={this.state.status}
                    history={this.state.history}
                />
            </div>   
        )  
    }
  }

  export default MainPage;