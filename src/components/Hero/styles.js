import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  margin-top: 44px;
  padding: 1rem 0 5rem;

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 570px;

  @media only screen and (max-width: 580px) {
    padding: 0;
    margin: 0 0 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

export const Imgwrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 580px) {
    padding: 0;
  }
`