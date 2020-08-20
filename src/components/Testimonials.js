import React from 'react'

import styled from 'styled-components'

export default function Review() {

  return (
    <>
      <StyledText>
        <LeftDiv>
          <StyledP>
            T&T Mountain Builders exceeded all of our expectations. This is our second custom home build, so we knew some things that were essential:
            We wanted energy efficiency. Travis builds exclusively in that mode. He is proficient with triple-pane European windows, double framed walls, sealed living space with ERV, solar power and high efficiency appliances. We got exactly the efficiency we wanted without "dorky" design.
            We wanted to stay on budget. Tammy and Travis were very sensitive to this, and kept us up to date on expenses at all times so we had no surprises. We actually came in a little under budget and added a few upgrades at the end. And we finished the project on time.
            We wanted to be involved, but not pestered. We had weekly meetings on-site and frequent email communication. Again, no surprises.
            The result is a house we love that is the envy of the neighborhood. Would absolutely recommend T&T.
            </StyledP>
        </LeftDiv>
        <RightDiv>
          <StyledP>
            We couldn't say enough great things about Travis, Tammy, and all their employees.  A pleasure to work with, open to new ideas, and a keen eye for the details, these guys have it all.  We've worked on numerous builds with T&T and can honestly say they are the of the utmost quality and service of any builders in the area!
            </StyledP>
        </RightDiv>
        <LeftDiv>
          <StyledP>
            As nervous first-time home builders, Travis and Tammi at T&T Mountain Builders made the entire process professional and even enjoyable.  From the first meeting with them until even after the completion of our home, they were easy to communicate with, took all of our concerns or questions seriously, no matter how trivial, and involved us in all of the decisions (without overwhelming us).  Their experience in building highly efficient homes was second to none and their craftsmanship was impeccable.  They take pride in every aspect of the home and even neighbors commented on how professional, clean and courteous their crew and sub-contractors were throughout the process.
            Aside from our professional relationship, we now consider Travis and Tammi friends.  We would build another home in a second with them--and that's not something we ever thought we'd say at the start of this process.
            </StyledP>
        </LeftDiv>
        <RightDiv>
          <StyledP>
            If you are considering contractors to partner with in order to achieve your dream of building a passive house, we can't recommend Travis and Tammi (T&T) enough. Travis is a PHIUS (passive house institute) certified builder with deep experience using construction methods and details specific to passive house design.
            Nothing falls through the cracks with Travis; he is detail-oriented and prepared. Above all else, Travis and Tammi are a treat to work with -- really nice, decent people. We love to work with T&T and recommend them often.
            </StyledP>
        </RightDiv>
        <LeftDiv>
          <StyledP>
            I'm not sure it is possible to have a better home-building experience than ours with Travis and Tammi at T&T Mountain Builders. We are thrilled with the end product and really enjoyed watching the project develop and grow. We put together a list of the things we most appreciated about T&T and contributed to the success of our project: <br />
                * Listened to us, worked with us to understand our vision and asked for examples, photos, sketches of the idea<br />
                * Communicative - always had time to discuss plans, concerns, status<br />
                * Experienced with green and efficient homebuilding<br />
                * Conscientious, great attention to detail and oversight of sub-contractors<br />
                * Consistently available and diligent over the entire course of the project<br />
                * Great contacts in the area<br />
                * Found creative solutions to everyday problems<br />
                * Didn't overwhelm us with all decisions at once and gave us plenty of time to research options<br />
                * Simply two of the nicest people you could hope to meet<br />
          </StyledP>
        </LeftDiv>
        <RightDiv>
          <StyledP>
            I've known Travis for a few years and have been involved with him on a variety of projects of varying scope and scale. When I decided it was time to build my own custom home, I knew I could trust Travis to build a quality home. He pays amazing attention to detail.
            Travis is well organized, always a few weeks ahead of his craftsman in getting decisions made.
            Travis is environmentally conscious, making decisions that improve the efficiency of the home after move in.
            Without question, I would hire Travis to build my next custom home.
            </StyledP>
        </RightDiv>
      </StyledText>
    </>
  )
}

const StyledText = styled.div`
  margin: auto;
  margin-top: 0;
  height: 85vh;
  width: 90%;
  margin-top: 30px;
  overflow: scroll;
`

const StyledP = styled.p`
  font-family: inherit;
  font-weight: 300;
  margin: 20px;
  color: inherit;
`

const LeftDiv = styled.div`
  color: black;
  box-shadow: 4px 4px 8px grey;
  background-color: #F9F8F4;
  padding: 6px 10px 6px 10px;
  width: 65%;
  margin: 4%;
  margin-left: 4%;
  border-radius: 4px;
`

const RightDiv = styled.div`
    padding: 6px 10px 6px 10px;
    width: 65%;
    margin: 4%;
    position: relative;
    left: 20%;
    box-shadow: 4px 4px 8px grey;
    background-color: #F9F8F4;
    color: black;
    border-radius: 4px;
`