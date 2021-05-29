import React from "react";
import "./Address.css"


type AddressProps = {
    address: string;
    status: 'loggedOut' | 'loading' | 'loggedIn';
    onLogin: any;
}


class Address extends React.Component<AddressProps, {}> {
    constructor(props : AddressProps){
        super(props)
        this.handleEvents = this.handleEvents.bind(this);
    }

    handleEvents(){
        this.props.onLogin();
    }


    render() {
        let button;
        switch(this.props.status) {
            case 'loading':
                button = <button disabled={true}> </button>;
                break;
            case 'loggedIn':
                button = <img 
                            src={process.env.PUBLIC_URL + './images/greencheck.svg'}
                            style={{width:"20px", height:"20px"}}
                            alt="You're logged in!">
                        </img>
                break;
            case 'loggedOut':
                button = <button onClick={this.handleEvents}>Log In</button>
        }

        return (
            <div className="Login" >
                <span>
                    Address is: {this.props.address}
                    {button}
                </span> 
            </div>
            
        )  
    }
  }
  
  export default Address;