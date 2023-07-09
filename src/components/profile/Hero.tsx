import { styled } from "styled-components"

const HeroStyled = styled.section`
  background: url('/images/profile/profile-hero.png');
  @media(max-width:1024px) {
    background:none;
  }
  height: 220px;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`
export const Hero = () => {
  return <HeroStyled>
  </HeroStyled>
}

export default Hero