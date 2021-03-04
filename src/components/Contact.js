import React from 'react'
import styled from 'styled-components'

export default function Contact() {

  return(
    <>
        <DivCenter>
          <AddressDiv>
            <AddressLabel>Mailing</AddressLabel>
            <ContactP>
              PO Box 980547<br/>
              Park City, Utah 84098
            </ContactP>
          </AddressDiv>
          <AddressDiv>
            <ContactA href="mailto:tandttravis@hotmail.com">travis@tandtmountainbuilders.com</ContactA>
          </AddressDiv>
          <AddressDiv>
            <AddressLabel>Office</AddressLabel>
            <ContactP>
              4376 N Forestdale Dr #12<br/>
              Park City, Utah 84098
            </ContactP>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.118626322351!2d-111.46783198459562!3d40.69338497933395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875212d0501c7f27%3A0xfe41af1d32eb6996!2s4376%20N%20Forestdale%20Dr%20%2312%2C%20Park%20City%2C%20UT%2084098!5e0!3m2!1sen!2sus!4v1597360190248!5m2!1sen!2sus" width="600" height="400" frameborder="0" title="office" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </AddressDiv>
        </DivCenter>
    </>
  )
}


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
 @media (max-width: 1224px) {
  flex-direction: column;
  margin-left: 2%;
}
`

const AddressDiv = styled.div`
  width: 45%;
  margin-top: 4%;
`

const AddressLabel = styled.h5`
  text-decoration: underline;
  margin: 0;
  margin-bottom: 9px;
  font-size: 16px;
`
