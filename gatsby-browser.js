import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import {MDXProvider} from "@mdx-js/react"
import {preToCodeBlock} from "mdx-utils"
import Theme from "./src/themes/theme"
import { Table, Code } from "./src/components"
import "./language-tabs.css"



const GlobalStyles = createGlobalStyle`
* {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}

body,html {
    font-family: ${props => props.theme.fonts.main };
    height: 100%;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`


const components = {
    table: Table, 
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        // if there's a codeString and some props, we passed the test
        if (props) {
          return <Code {...props} />
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />
      },
      wrapper: ({ children }) => <>{children}</>,
}

// Component Tree
export const wrapRootElement = ({ element })  => (
    <MDXProvider components ={components}>
    <ThemeProvider theme = {Theme}>
        <GlobalStyles/>
         {element}  </ThemeProvider>
         </MDXProvider>
)


