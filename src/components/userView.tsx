import React from "react";
import TopBarView from "./topBarView";
import {User} from "../api/accountApi";
import InfoView from "./infoView";

type UserViewProps = {
    user: User,
    onClickLogout: () => void,
    redirect: {}
}

export default class UserView extends React.Component<UserViewProps> {

    constructor(props: UserViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <div id="userView">
            <TopBarView onClickLogout={this.props.onClickLogout}
                        user={this.props.user}/>
            <InfoView redirect={this.props.redirect}
                      user={this.props.user}/>
        </div>;
    }
}