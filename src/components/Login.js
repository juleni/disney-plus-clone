import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <ContentBlock>
        <ContentLogoOne src="/images/cta-logo-one.svg"/>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Premier Access can be rewatched as many times as you want, so long as you remain subscribed to Disney+. Typically, within 91 days after movies are made available on Disney+ through Premier Access, they will then be made available to all on the service without the need for an additional payment.
        </Description>        
        <ContentLogoTwo src="/images/cta-logo-two.png"/>
      </ContentBlock>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`

const ContentBlock = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const ContentLogoOne = styled.img`
`

const ContentLogoTwo = styled.img`
  width: 90%;
`

const SignUp = styled.a`
  cursor: pointer;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`