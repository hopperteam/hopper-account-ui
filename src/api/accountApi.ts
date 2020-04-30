import RestfulApi from "./restfulApi";

export class AccountApi extends RestfulApi {

    constructor() {
        super("/api");
    }

    async login(email: string, password: string): Promise<boolean> {
        let res = await this.post("/login", {
            "email": email,
            "password": password
        });
        console.log(res)
        return (res.status == 200 && res.result.status == "success")
    }

    async register(email: string, password: string, firstName: string, lastName: string): Promise<[boolean, string]> {
        let res = await this.post("/signUp", {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        });

        let success =  res.status == 200 && res.result.status == "success";
        let error = "";
        if (!success && res.resultParsable) {
            error = res.result.reason;
        }
        return [success, error]
    }
}
