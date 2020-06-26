import React from "react";
import {AccountApi, User} from "../api/accountApi";
import CardView from "./cardView";

type InfoViewProps = {
    user: User,
    onClickRedirect: () => void
}

export default class InfoView extends React.Component<InfoViewProps> {

    constructor(props: InfoViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <div id="infoView">
            <CardView onClickRedirect={this.props.onClickRedirect} user={this.props.user}/>
        </div>;
    }
}