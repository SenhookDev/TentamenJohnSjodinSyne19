import React from "react"
import {ContentWrapper} from "../elements"

// Allt vi wrappar detta kommer renderas mellan denna react komponenten?
export const Content = ({ children }) => {
    return <ContentWrapper>{children}</ContentWrapper>
  }
  