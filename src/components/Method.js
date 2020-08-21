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
        <StyledH4>What separates us from the pack</StyledH4>
        <StyledSubhead>Leveraging our knowledge of building science, we utilize the following strategies in all of our buildings:</StyledSubhead>
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

        <StyledH5>What this equates to is a high level of comfort, building durability, and a healthy indoor air environment. </StyledH5>
      </StyledText>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  height: 84vh;
  width: 78%;
  overflow: scroll;
`

const StyledH4 = styled.h3`
  font-family: inherit;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  margin-bottom: 60px;
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
  margin: 20px;
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

const Icon = styled.img`
  background-color: white;
  margin: 12px;
  // height: 100px;
  // width: 140px;

`