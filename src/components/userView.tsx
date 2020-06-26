import React from "react";
import TopBarView from "./topBarView";
import {AccountApi, User} from "../api/accountApi";
import InfoView from "./infoView";
import CardView from "./cardView";

type UserViewProps = {
    user: User,
    onClickLogout: () => void,
    onClickRedirect: () => void
}

export default class UserView extends React.Component<UserViewProps> {

    constructor(props: UserViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <div id="userView">
            <TopBarView onClickLogout={this.props.onClickLogout}
                        user={this.props.user}/>
            <InfoView onClickRedirect={this.props.onClickRedirect}
                      user={this.props.user}/>
        </div>;
    }
}