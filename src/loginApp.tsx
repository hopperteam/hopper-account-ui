import * as React from "react";
import * as ReactDOM from 'react-dom';
import LoginSignUpView from "./components/loginSignUpView";
import "style/login.scss";
import {AccountApi} from "./api/accountApi";
import {HopperUtil} from "./hopperUtil";
import LoadingView from "./components/loadingView";

function renderLoadingView() {
    ReactDOM.render(
        <LoadingView />,
        document.getElementById("root")
    );
}

function render(api: AccountApi) {
    ReactDOM.render(
        <LoginSignUpView onLoggedIn={() => loginComplete()} api={api}/>,
        document.getElementById("root")
    );
}

function loginComplete() {
    let redirect = HopperUtil.getUrlParameter("target");
    if (redirect && typeof(redirect) === 'string') {
        document.location.assign(redirect);
        return;
    }
    document.location.assign("/user.html");
}

async function main() {
    renderLoadingView();
    let api: AccountApi = new AccountApi();
    let usr = await api.getUser();

    if (usr != null) {
        loginComplete()
    } else {
        render(api);
    }
}

main();

