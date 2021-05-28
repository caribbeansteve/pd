import React from 'react';
import { ethers } from 'ethers';
import Address from '../address/Address';

type AccountState = {
    address: string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
}

type AccountProps = {
    status: string;
}

export let provider : ethers.providers.Web3Provider;

class MainPage extends React.Component<{}, AccountState> {
    constructor(props: AccountProps){
        super(props)
        this.state = {address: "", status:"loggedOut" };
        this.login = this.login.bind(this);
    }

    login() {
        this.setState({status: "loading"});
        window.ethereum.enable().then( () => {
            provider = new ethers.providers.Web3Provider(window.ethereum || {});
            provider.getSigner().getAddress().then( (res) => {
                this.setState({address: res, status: "loggedIn"})
            });
        })
    }
    
    render() {
        return (
            <Address address={this.state.address} status={this.state.status}/>
        )  
    }
  }

  export default MainPage;