import { Children } from "react";

export const menus = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "profile",
        to: "profile",
        Children: [
            {
                label: "Details",
                to: "details",
                Children: [
                    {
                        label: "Location",
                        to: "location",
                        Children: [
                            {
                                label: "City",
                                to: "city",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Settings",
        to: "settings",
        Children: [
            {
                label: "Account",
                to: "account",
            },
            {
                label: "Security",
                to: "security",
                Children: [
                    {
                        label: "Login",
                        to: "login",
                    },
                    {
                        label: "Resister",
                        to: "resister",
                    }
                ]
            }
        ]
    }
];

export default menus;