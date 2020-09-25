import React from "react"
import {PostWrapper} from "../elements"

// Allt vi wrappar detta kommer renderas mellan denna react komponenten?
export const Post = ({ children }) => {
    return <PostWrapper>{children}</PostWrapper>
  }
  