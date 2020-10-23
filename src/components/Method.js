import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import HouseIcon from '../images/house-icon.png'
import RadonIcon from '../images/radon-icon.png'
import VentIcon from '../images/vent-icon.png'
import InsulIcon from '../images/insulation-icon.png'
import FreshIcon from '../images/fresh-icon.png'
import WindowIcon from '../images/window-icon.png'
import QuietIcon from '../images/quiet-icon.png'

export default function Method() {

  return (
    <>
      <StyledText>
        {/* <StyledH4>Our Process</StyledH4> */}
        <FirstDiv square>
          <FirstDivHeading>First and foremost</FirstDivHeading>
          <HrDiv></HrDiv>
          <FirstDivSubhead>
            We only build 1-2 houses at a time.
          </FirstDivSubhead>
          <FirstDivSubhead>
            We are a small company that self performs all carpentry tasks and well as the site management. This gives us a significant advantage on maintaining the construction schedule and being able to best serve our clients.
          </FirstDivSubhead>
        </FirstDiv>
        <TextContainer>
          <StyledSubhead><strong>Our Process</strong></StyledSubhead>
        </TextContainer>
        <TextContainer>
          <UpperTextDiv>Starts with preconstruction consultation in terms of feasibility, constructability and cost analysis during the design phase. When the architect completes the construction documents we put together a solid budget and schedule that guides the process. </UpperTextDiv>
        </TextContainer>
        <TextContainer>
          <UpperTextDiv>Utilizing our cloud based construction management software, budgets, schedule, selections, photos, files, and selection deadlines are all accessible 24/7 to our clients.  Client selection deadlines are scheduled months in advance to create ample time for clients and or designers to work through details.</UpperTextDiv>
        </TextContainer>
        <TextContainer>
          <UpperTextDiv>In the case that a designer isn’t retained, we will assist in the design and selection process. We’ve done this many times.  Bimonthly  meetings are standard for local clients to keep them on the same page of the design and to discuss details in the field.  We stay involved from concept to completion to well after occupancy to ensure that systems function as designed, and to ensure our clients happiness.</UpperTextDiv>
        </TextContainer>
        <TextContainer>
          <UpperTextDiv>Leveraging our knowledge of building science, we utilize the following strategies in all of our buildings:</UpperTextDiv>
        </TextContainer>
        <StyledPaper square>
          <TextDiv>Airtight construction practices from the ground up, encompassing 6 sides of the building.
          This starts from the beginning, not as an afterthought.
            </TextDiv>
          <Icon src={HouseIcon} height="100px" width="120px" />
        </StyledPaper>
        <StyledPaper square>
          <Icon src={RadonIcon} height="100px" />
          <TextDiv>Passive Radon Mitigation Systems</TextDiv>
        </StyledPaper>
        <StyledPaper square>
          <TextDiv>Dedicated ventilation systems, that change the volume of air in the house every 3 hours, using heat recovery ventilators.</TextDiv>
          <Icon src={VentIcon} height="100px" />
        </StyledPaper>
        <StyledPaper square>
          <Icon src={InsulIcon} height="100px" />
          <TextDiv>Robust wall assemblies that include: insulation levels typically 2 times the code minimum, exterior “rain screen” cladding ventilation, water management strategies that ensure long term durability. Thermal bridge free construction.</TextDiv>
        </StyledPaper>
        <StyledPaper square>
          <TextDiv>Low or no VOC finishes, in cabinets, flooring, paint, stains.</TextDiv>
          <Icon src={FreshIcon} height="100px" />
        </StyledPaper>
        <StyledPaper square>
          <Icon src={WindowIcon} height="100px" />
          <TextDiv>High performance windows, typically from Europe. (these aren’t as expensive as they sound!)</TextDiv>
        </StyledPaper>
        <StyledPaper square>
          <TextDiv>Because are buildings are super insulated with great windows, they are extremely QUIET!  because of this, we specify our mechanical systems to be almost inaudible.</TextDiv>
          <Icon src={QuietIcon} height="100px" />
        </StyledPaper>
        <TextContainer>
          <StyledSubhead><strong>What this equates to is a high level of comfort, building durability, and a healthy indoor air environment.</strong> </StyledSubhead>
        </TextContainer>
      </StyledText>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  margin-top: 0;
  height: 85vh;
  width: 78%;
  overflow: scroll;
`

const StyledH5 = styled.h3`
  font-family: inherit;
  font-size: 30px;
  font-weight: 400;
  margin: 20px;
  margin-top: 50px;
`
const StyledSubhead = styled.h3`
  font-family: inherit;
  font-size: 20px;
  font-weight: 400;
  margin-top: 50px;
`

const StyledPaper = styled(Paper)`
  display: flex;
  margin-top: 2%;
`

const TextDiv = styled.div`
  width: 80%;
  padding: 16px;
  font-family: inherit;
  font-weight: 300;
  display: flex;
  align-items: center;
`
const UpperTextDiv = styled.div`
  width: 90%;
  font-family: inherit;
  font-weight: 300;
  margin: 20px;

`

const Icon = styled.img`
  background-color: white;
  margin: 12px;
  // height: 100px;
  // width: 140px;

`

const FirstDiv = styled(Paper)`
  background-color: black;
  color: white;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 40px;
`

const FirstDivHeading = styled.h2`
  font-size: 23px;
  font-family: "Atlas Grotesk Web",sans-serif;
`
const FirstDivSubhead = styled.h3`
font-family: inherit;
font-size: 20px;
font-weight: 500;
`

const HrDiv = styled.div`
  background-color: white;
  height: 6px;
  width: 60px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`