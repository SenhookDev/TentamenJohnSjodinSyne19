import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P,} from "../elements"


export const Footer = () => {

    const data = useStaticQuery(graphql`
    
    query {
        facebook: file(relativePath: {eq: "facebook.svg"}) {
            publicURL
        }

        instagram: file(relativePath: {eq: "instagram.svg"}) {
            publicURL
        }

        linkedin: file(relativePath: {eq: "linkedin.svg"}) {
            publicURL
        }
        
    }
    `)
    return <FooterWrapper>

        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src ={data.facebook.publicURL} alt="Facebook Logo" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src ={data.instagram.publicURL} alt="Instagram Logo" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src ={data.linkedin.publicURL} alt="LinkedIn Logo" />
                </a>
            </FooterSocialIcons>
            <P size ="xSmall" color = "dark3">
                Av John S
            </P>
        </FooterSocialWrapper>
    </FooterWrapper>
}