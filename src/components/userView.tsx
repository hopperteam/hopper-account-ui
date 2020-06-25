
import React from "react";
import TopBarView from "./topBarView";
import {User} from "../api/accountApi";

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
                        user={this.props.user} />
            <a className="clickableLink" onClick={this.props.onClickRedirect}>(Hopper)</a>
        </div>;
    }
}