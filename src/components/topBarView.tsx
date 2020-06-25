import * as React from 'react';
import {User} from "../api/accountApi";

type TopBarViewProps = {
    user: User
    onClickLogout: () => void;
}

export default class TopBarView extends React.Component<TopBarViewProps> {

    render(): React.ReactNode {
        console.log(this.props.user.firstName);
        return <div id="topBar">
            <span id="userText">{this.props.user.firstName} {this.props.user.lastName} <a className="clickableLink" onClick={this.props.onClickLogout}>(Logout)</a></span>
        </div>;
    }
}
