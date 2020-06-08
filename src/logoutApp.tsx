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

function logoutComplete() {

    let redirect = HopperUtil.getUrlParameter("target");
    if (redirect && typeof(redirect) === 'string') {
        document.location.assign(redirect);
        return;
    }
    document.location.assign("/");
}

async function main() {
    let api: AccountApi = new AccountApi();
    renderLoadingView();

    await api.logout();
    logoutComplete();
}

main();

