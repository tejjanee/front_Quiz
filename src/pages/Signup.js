import { Fragment } from "react";
import { Navbar, AuthSignup } from "../component/index";

export const Signup = () => {
    return (
        <Fragment>
            <Navbar route="login"/>
            <AuthSignup />
        </Fragment>
    )
}