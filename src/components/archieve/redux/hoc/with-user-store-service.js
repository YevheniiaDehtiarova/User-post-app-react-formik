import React from "react";
import { UserServiceConsumer } from "../service-context";

const withUserstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <UserServiceConsumer>
                {
                    (userService) => {
                    return (<Wrapped
                     {...props} userService={userService}/>);
                    }
                }

            </UserServiceConsumer>
        )
    }
}
export default withUserstoreService;