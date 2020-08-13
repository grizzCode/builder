import React from 'react'
import Menu from './Menu'
import styled from 'styled-components'


export default function About() {

  return(
    <>
      <Menu/>
      <StyledDiv>
        <HeaderDiv>
        <StyledHeader>CONTACT</StyledHeader>
        </HeaderDiv>
        <DivCenter>
          <AddressDiv>
            <ContactA href="mailto:tandttravis@hotmail.com">tandttravis@hotmail.com</ContactA>
          </AddressDiv>
          <AddressDiv>
            <AddressLabel>Mailing</AddressLabel>
            <ContactP>
              PO Box 980547<br/>
              Park City, Utah 84098
            </ContactP>
          </AddressDiv>
          <AddressDiv>
            <AddressLabel>Office</AddressLabel>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.118626322351!2d-111.46783198459562!3d40.69338497933395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875212d0501c7f27%3A0xfe41af1d32eb6996!2s4376%20N%20Forestdale%20Dr%20%2312%2C%20Park%20City%2C%20UT%2084098!5e0!3m2!1sen!2sus!4v1597360190248!5m2!1sen!2sus" width="600" height="400" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </AddressDiv>
        </DivCenter>
      </StyledDiv>
    </>
  )
}


const StyledHeader = styled.h1`
  font-family: inherit;
  font-weight: 300;
  font-size: 36px;
  margin-top: 39.5%;
  margin-bottom: 8%;
  margin-left: 0;
  margin-right: 3%;
  background-color: #181818;
  color: white;
  padding: 12px;
  width: 95%;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center
  width: 100%;

`

const HeaderDiv = styled.div`
  height: 600px;
  width: 22%;
  height: 94vh;
`

const ContactP = styled.p`
  font-size: 14px;
`
const ContactA = styled.a`
  color: rgb(158, 203, 40);
  font-size: 16px;
  margin-bottom: 30px;
  width: 100%;
`

const DivCenter = styled.div`
 color: black;
 font-family: Work Sans, sans-serif;
 text-transform: uppercase;
 margin: auto;
 margin-left: 20%;
 display: flex;
 flex-wrap: wrap;
`

const AddressDiv = styled.div`
  width: 45%;
  margin-top: 60px;
`

const AddressLabel = styled.h5`
  text-decoration: underline;
  margin: 0;
  margin-bottom: 9px;
  font-size: 16px;
`
