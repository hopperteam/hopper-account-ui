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
                    <div id="roleView">
                        <a className="clickableLink" onClick={this.props.onClickRedirect}>(Hopper)</a>;
                    </div>
                </div>
            </div>
        </div>;
    }
}