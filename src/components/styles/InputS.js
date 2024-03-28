import styled from "styled-components";

export const InputS = styled.input`
  width: 55%;
  max-width: 500px;
  margin: 0.1rem;
  padding: 0.1rem 0.5rem;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    width: 70%;
  }
`;

export const FormInputS = styled.input`
  width: 200px;
  margin: 0.3rem auto;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  border: 1px solid grey;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    width: 150px;
    font-size: 0.9rem;
  }
`;