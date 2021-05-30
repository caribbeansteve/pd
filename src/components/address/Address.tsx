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
                button = <button className="Login-Button" disabled={true}>Log In</button>;
                break;
            case 'loggedIn':
                button = 
                    <div>Address is: {this.props.address}
                        <img 
                            src={process.env.PUBLIC_URL + './images/greencheck.svg'}
                            style={{width:"20px", height:"20px"}}
                            alt="You're logged in!">
                        </img>
                    </div>
                break;
            case 'loggedOut':
                button = <button className="Login-Button" onClick={this.handleEvents}>Log In</button>
        }

        return (
            <div className="Login" >
                <span>
                    
                    {button}
                </span> 
            </div>
            
        )  
    }
  }
  
  export default Address;