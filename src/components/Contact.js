import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'


export default function About() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>CONTACT US</StyledHeader>
        </HeaderDiv>
        <FooterCenter>
          <ContactA href="mailto:tandttravis@hotmail.com">tandttravis@hotmail.com</ContactA>
          <AddressDiv>
            <AddressLabel>Office</AddressLabel>
            <MapLink href="https://www.google.com/maps/place/4376+N+Forestdale+Dr+%2312,+Park+City,+UT+84098/@40.693385,-111.467832,17z/data=!3m1!4b1!4m5!3m4!1s0x875212d0501c7f27:0xfe41af1d32eb6996!8m2!3d40.693385!4d-111.4656433">
              4376 Forestdale Dr <br/>
              Unit #12<br/>
              Park City, UT 84098 <br/>
            </MapLink>
          </AddressDiv>
          <AddressDiv>
            <AddressLabel>Mailing</AddressLabel>
            <ContactP>
              PO Box 980547<br/>
              Park City, Utah 84098
            </ContactP>
          </AddressDiv>
        </FooterCenter>
      </StyledDiv>
    </>
  )
}


const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  margin-top: 20%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;
  margin-top: 30px;
`

const HeaderDiv = styled.div`
  border-right: 2px solid black;
  height: 600px;
  width: 22%;
  display: flex;
  justify-content: center
`

const ContactP = styled.p`
  font-size: 14px;
`
const ContactA = styled.a`
  color: rgb(158, 203, 40);
  font-size: 14px;
`

const FooterCenter = styled.div`
 color: black;
 width: 20%;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
 margin: auto;
`

const AddressDiv = styled.div`
  margin-top: 40px;
`

const AddressLabel = styled.h5`
  text-decoration: underline;
  margin: 0;
  margin-bottom: 9px;
  font-size: 16px;
`

const MapLink = styled.a`
  font-family: Work Sans, sans-serif;
  text-transform: uppercase;
  color: black;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`