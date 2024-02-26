import React from 'react'
import { graphql,Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({data})=>{
    const { name, company } =  data.site.siteMetadata.contact
    return(
        <Layout>
        <Seo title="About us"/>
        <h1>About us</h1>
        <p>`${company} was started by ${name} in 2024.`</p>
        </Layout>
    )
}