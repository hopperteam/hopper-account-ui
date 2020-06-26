import * as ReactDOM from "react-dom";
import LoadingView from "./components/loadingView";
import {AccountApi, User} from "./api/accountApi";
import * as React from "react";
import UserView from "./components/userView";
import "style/user.scss";

function renderLoadingView() {
    ReactDOM.render(
        <LoadingView />,
        document.getElementById("root")
    );
}

function render(user: User) {
    ReactDOM.render(
        <UserView onClickLogout={logout} onClickRedirect={hopperRedirect} user={user}/>,
        document.getElementById("root")
    );
}

function logout() {
    document.location.assign("/logout.html");
}

function hopperRedirect() {
    // TODO: link to https://app.hoppercloud.net/
    document.location.assign("https://dev.hoppercloud.net/");
}

async function main() {
    renderLoadingView();

    let api: AccountApi = new AccountApi();
    let usr = await api.getUser();

    if (usr != null) {
        render(usr);
    } else {
        document.location.assign("/");
    }
}

main();