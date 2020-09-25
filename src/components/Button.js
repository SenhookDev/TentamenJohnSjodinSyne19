import React from "react"
import {ButtonWrapper} from "../elements"

//Skapa react component
// Det som händer här är att to = skickas till link = link kommer visa specifika sidan
export const Button = ({children, href}) => {
    return <ButtonWrapper to = {href}>{children}</ButtonWrapper>
}