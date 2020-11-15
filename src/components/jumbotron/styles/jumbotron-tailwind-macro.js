// import styled from "styled-wind";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

export const Inner = styled.div`
  flex-direction: ${({ direction }) => direction};
  ${tw`
    flex
    flex-col
    items-center
    justify-between
    m-auto
    w-full

    md:flex-row
  `};
`;

export const Item = styled.div`
  padding: 50px 5%;
  ${tw`
    flex
    border-0
    border-b-8
    border-solid
    border-gray-800
    text-white
    pt-12
    overflow-hidden
  `};
`;

export const Pane = styled.div`
  ${tw`
    w-full
    py-0
    px-12
    
    lg:w-1/2
  `}
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
  ${tw`
      
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-4xl
    leading-none
    mb-2

    sm:text-5xl
  `}
`;

export const SubTitle = styled.h2`
  ${tw`
    text-lg
    font-normal
    leading-normal

    sm:text-2xl
  `}
`;

export const Image = styled.img`
  ${tw`
    max-w-full
    h-auto
  `}
`;
