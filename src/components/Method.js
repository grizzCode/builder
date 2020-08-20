import React from 'react'
import styled from 'styled-components'

export default function Method() {

  return(
    <>
        <StyledText>
          <StyledH4>What separates us from the pack</StyledH4>
          <p>Leveraging our knowledge of building science, we utilize the following strategies in all of our buildings:</p>
          <ul>
            <li>Airtight construction practices from the ground up, encompassing 6 sides of the building. This starts from the beginning, not as an afterthought. </li>
            <li>Passive Radon Mitigation systems</li>
            <li>Dedicated ventilation systems, that change the volume of air in the house every 3 hours, using heat recovery ventilators.</li>
            <li>Robust wall assemblies that include: insulation levels typically 2 times the code minimum, exterior “rain screen” cladding ventilation, water management strategies that ensure long term durability. Thermal bridge free construction.</li>
            <li>Low or no VOC finishes, in cabinets, flooring, paint, stains.</li>
            <li>High performance windows, typically from Europe. (these aren’t as expensive as they sound!)</li>
            <li>Because are buildings are super insulated with great windows, they are extremely QUIET!  because of this, we specify our mechanical systems to be almost inaudible. </li>
          </ul>
          <StyledH4>What this equates to is a high level of comfort, building durability, and a healthy indoor air environment. </StyledH4>
        </StyledText>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  height: 84vh;
  width: 78%;
  margin-top: 50px;
  overflow: scroll;
`

const StyledH4 = styled.h3`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 400;
  margin: 20px;
`