import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled , {ThemeConsumer} from 'styled-components'
import { Flex } from "rebass"
import {H1} from "../Heading"
import { SearchButton } from '../Button'
import { Section } from '../Section'

const StyledHeader = styled.header`
margin: 0 auto;
padding: var(--space-4) var(--size-gutter);
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
background: ${({theme})=> theme.variants.header.primary.backgroundColor};
`
//const StyledLink = styled(Link)`
//font-size: var(--font-sm);
//text-decoration: none;
//color: ${({theme})=> theme.variants.header.primary.color};
//`

const StyledLink = styled(Link)`
color: white;
text-decoration:none;
margin:0 10px;
&:hover {
  color: lightgray:
}
`
const Image = styled.img`
margin: 0;
`
const Nav = styled(Flex)`
flex-direction: row;
justify-content: flex-end;
align-items: center;
`
const Title = styled(H1)`
flex: 4;
`
const MediaQuery = styled.div`
@media (max-width: 600px) {
  display: none;
}
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
  <Section width={11/12}>
  <H1>
  <StyledLink to="/">
  {siteTitle}
  </StyledLink>
  </H1>
  </Section>
  <Section width={1/12}>
    <IconButton icon={<Search/>}variant='contrast' />
  </Section>
  </StyledHeader>
)

Header.propTypes={
  siteTitle: PropTypes.string
}

Header.defaultProps= {
  siteTitle: ""
}
export { Header }