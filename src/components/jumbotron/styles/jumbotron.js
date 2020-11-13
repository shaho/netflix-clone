// import styled from "styled-wind";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

export const Inner = styled.div`
  flex-direction: ${({ direction }) => direction};
  ${tw`
    flex
    items-center
    justify-between
    m-auto
    w-full

    lg:flex-col
  `};
`;

export const Pane = styled.div`
  ${tw`
    w-1/2

  `}
`;

export const Container = styled.div`
  ${tw`
      
  `}
`;

export const Title = styled.h1`
  ${tw`
      leading-none
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
