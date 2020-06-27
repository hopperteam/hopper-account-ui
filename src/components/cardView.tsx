import React from "react";
import {User} from "../api/accountApi";

type CardViewProps = {
    user: User,
    redirect: {}
}

export default class CardView extends React.Component<CardViewProps> {

    constructor(props: CardViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        const roleWidth = 97 / this.props.user.roles.length;
        return <div id="cardView">
            <div className="userElement">
                <div className="userContent">
                    <div className="mainContent">
                        <img className="userImage" alt="notificationImage" src={
                            require('../img/user.svg')}
                        />
                        <div className="userTextContent">
                            <p className="userText">First name</p>
                            <p>{this.props.user.firstName}</p>
                            <p className="userText">Last name</p>
                            <p>{this.props.user.lastName}</p>
                            <p className="userText">Email</p>
                            <p>{this.props.user.email}</p>
                        </div>
                    </div>
                    <div className="roleView">
                        {
                            this.props.user.roles.map((role, i) => {
                                // @ts-ignore
                                let address = this.props.redirect[role]
                                return (<button className="role" key={i}
                                    onClick={function() {
                                        document.location.assign(address);
                                    }}
                                    style={{width: `${roleWidth}%`}
                                }>{role.replace(".User", "")}</button>);
                        })}
                    </div>
                </div>
            </div>
        </div>;
    }
}