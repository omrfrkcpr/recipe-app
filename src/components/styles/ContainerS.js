import styled from "styled-components";
import banner from "../../assets/banner.jpg";
import bgImg from "../../assets/details-bg.jpg";
import aboutBg from "../../assets/about-bg.jpg";

export const NavbarContainerS = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem 1rem;
  background-image: linear-gradient(to top, #feada6 40%, #f5efef 110%);
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }
`;

export const FooterContainerS = styled(NavbarContainerS)`
  padding: 2rem 2rem;

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem 0;
  border-radius: 15px;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    border-radius: 0px;
  }
`;

export const PageContainerS = styled.div`
  min-height: calc(100vh - 236px);
  background-image: ${(props) =>
    props.about
      ? `url(${aboutBg})`
      : "linear-gradient(to bottom, #feada6 20%, #f5efef 30%)"};
  padding: 0.5rem;
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    padding: 0rem;
  }
`;

export const RecipeCardContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  height: 470px;
  text-align: center;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  border: 2px solid grey;
  border-radius: 15px;
  max-width: 350px;
  margin: auto;
`;

export const DetailsContainerS = styled.div`
  background-image: url(${bgImg});
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 236px);
`;

export const DetailCardContainerS = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgb(71, 71, 71);
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: wheat;
  text-align: center;
  width: fit-content;
  margin: auto;
  gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.responsiveLarge}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const FormContainerS = styled.div`
  width: 50%;
  text-align: center;
`;

export const EmptyContainerS = styled.div`
  min-height: calc(100vh - 236px);
  background-color: #1394b2;
  text-align: center;
`;

export const AboutContainerS = styled.div`
  width: 90%;
  margin: auto;
  /* backdrop-filter: blur(10px); */
  box-shadow: 2px 2px 2px gray;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
`;
