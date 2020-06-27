import React from "react";
import {User} from "../api/accountApi";
import CardView from "./cardView";

type InfoViewProps = {
    user: User,
    redirect: {}
}

export default class InfoView extends React.Component<InfoViewProps> {

    constructor(props: InfoViewProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <div id="infoView">
            <CardView redirect={this.props.redirect} user={this.props.user}/>
        </div>;
    }
}