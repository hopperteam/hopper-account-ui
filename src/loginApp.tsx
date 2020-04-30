import * as React from "react";
import * as ReactDOM from 'react-dom';
import LoginSignUpView from "./components/loginSignUpView";
import "style/login.scss";
import {AccountApi} from "./api/accountApi";
import {HopperUtil} from "./hopperUtil";


function render(api: AccountApi) {
    ReactDOM.render(
        <LoginSignUpView onLoggedIn={() => loginComplete(api)} api={api}/>,
        document.getElementById("root")
    );
}

function loginComplete(api: AccountApi) {

    let redirect = HopperUtil.getUrlParameter("target");
    if (redirect && typeof(redirect) === 'string') {
        document.location.assign(redirect);
        return;
    }
    document.location.assign("/overview");
}

async function main() {
    let api: AccountApi = new AccountApi();


    render(api);
}

main();

