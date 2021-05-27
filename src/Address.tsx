import {ethers} from "ethers"
import React from "react";

type AddressState = {
    address: string;
};



class Address extends React.Component<{}, AddressState> {
    constructor(props: any){
        super(props)
        this.state = {address: ""};
    }

    componentDidMount(){
        let provider;
        window.ethereum.enable().then( () => {
            provider = new ethers.providers.Web3Provider(window.ethereum || {});
            provider.getSigner().getAddress().then( (res) => {
                this.setState({address: res})
            });
        })
    }

    render() {
      return <h1>Address is: {this.state.address}</h1> 
    }
  }
  
  export default Address;