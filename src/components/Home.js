import React from 'react'
import Menu from './Menu'  
import styled from 'styled-components'
import Logo from '../images/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import HouzzIcon from '../images/houzz.png'

export default function Home() {
  return (
    <section class="home">
      <Menu/>
      <Footer>
        <StyledLogo src={Logo}/>
        <FooterCenter>
          <StyledP>Contact</StyledP>
          <ContactP>435-640-3057</ContactP>
          <ContactA href="mailto:tandttravis@hotmail.com">tandttravis@hotmail.com</ContactA>
          <ContactP>PO Box 980547</ContactP>
          <ContactP>Park City, Utah 84098</ContactP>
        </FooterCenter>
        <FooterRight>
          <StyledP>Connect</StyledP>
          <div>
          <a href="https://www.facebook.com/ttmountainbuilder/">
              <StyledFacebook fontSize="large"/>
            </a>
          </div>
          <div>
          
          <a href="https://www.houzz.com/professionals/general-contractors/tandt-mountain-builders-pfvwus-pf~629659661">
            <LogoImg src={HouzzIcon} width="26.25" height="26.25"/>
          </a>
          </div>
           

        </FooterRight>
      </Footer>
    </section>
  )
}

const StyledLogo = styled.img`
  height: 160px;
  width: auto;
  margin-left: 20px
`

const Footer = styled.div`
  background-color: white;
  height: 180px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`

const FooterCenter = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
`
const FooterRight = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
 margin-right: 20px;
`

const StyledP = styled.p`
  border-bottom: 2px solid black;
`

const StyledFacebook = styled(FacebookIcon)`
  color: black;
`

const LogoImg = styled.img`
  margin: 4px;
`

const ContactP = styled.p`
  font-weight: 300;
`
const ContactA = styled.a`
  font-weight: 300;
  color: rgb(158, 203, 40)
`