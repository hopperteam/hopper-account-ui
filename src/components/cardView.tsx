import React from "react";
import {User} from "../api/accountApi";

type CardViewProps = {
    user: User,
    onClickRedirect: () => void
}

export default class CardView extends React.Component<CardViewProps> {

    constructor(props: CardViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        const roleWidth = 100 / this.props.user.roles.length;
        console.log(roleWidth);
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
                            return (<button className="role" key={i} onClick={this.props.onClickRedirect} style={
                                {width: `${roleWidth}%`}
                            }>{role}</button>)
                        })}
                    </div>
                </div>
            </div>
        </div>;
    }
}