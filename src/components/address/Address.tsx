import { LogDescription } from "@ethersproject/abi";
import {ethers} from "ethers"
import React from "react";

type AddressProps = {
    address: string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
}

let provider : ethers.providers.Web3Provider;

class Address extends React.Component<AddressProps, {}> {
    constructor(props : AddressProps){
        super(props)
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
        let button;
        if (this.props.status == 'loading') {
            button = <button disabled={true}> </button>;
        } else if (this.props.status == 'loggedIn') {
            button = ''
        } else {
            button = <button onClick={this.login}>Log In</button>
        }
        return (
            <div >
                <span>
                    Address is: {this.props.address}
                    {button}
                </span> 
            </div>
            
        )  
    }
  }
  
  export default Address;