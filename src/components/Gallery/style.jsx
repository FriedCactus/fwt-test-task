import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";
import { Container } from "../Container/style";

export const GalleryRow = styled.section`
  margin-bottom: 30px;

  @media (${breakpoints.s}) {
    margin-bottom: 35px;
  }

  @media (${breakpoints.m}) {
    margin-bottom: 40px;
  }
`;

export const GalleryContainer = styled(Container)`
  row-gap: 20px;
`;

export const ImageRow = styled.div`
  position: relative;
  grid-column: span 4;
  overflow: hidden;

  max-width: 100%;
  height: 205px;

  border-radius: 20px;

  @media (${breakpoints.s}) {
    height: 249px;
    grid-column: span 6;
  }

  @media (${breakpoints.m}) {
    height: 230px;
    grid-column: span 4;
  }

  @media (${breakpoints.l}) {
    height: 275px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageDesc = styled.div`
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 5px 15px;
  width: 100%;
  height: 52%;

  background-color: rgba(255, 255, 255, 0.75);
  color: #000000;
  transform: translateY(-30px);
  transition: transform 0.4s;

  :hover {
    transform: translateY(-100%);
  }
`;

export const ImageTitle = styled.h3`
  margin-bottom: 6px;

  font-weight: bold;
  font-size: 1.125rem;
  line-height: 111%;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (${breakpoints.s}) {
    text-transform: capitalize;
  }
`;

export const DescRow = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-bottom: 5px;

  font-size: 0.8125rem;
  line-height: 154%;

  @media (${breakpoints.s}) {
    font-size: 0.875rem;
  }
`;

export const DescTitle = styled.p`
  margin-right: 5px;
  font-weight: 500;
`;

export const DescText = styled.p`
  font-weight: 300;
`;
