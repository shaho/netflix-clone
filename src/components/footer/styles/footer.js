import styled from "styled-components/macro";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
    flex
    px-8
    py-16
    m-auto
    flex-col
    
    lg:px-12
  `};
`;
export const Column = styled.div`
  ${tw`
    flex
    flex-col
    text-left
  `};
`;

const RowTW = tw`
  grid
  gap-4
`;
export const Row = styled.div`
  ${RowTW};

  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const Link = styled.a`
  ${tw`
    text-gray-700
    mb-2
    text-sm
    no-underline
  `};
`;

export const Title = styled.p`
  ${tw`
    text-base
    text-gray-700
    mb-10
  `};
`;

export const Text = styled.p`
  ${tw`
    text-sm
    text-gray-700
    mt-6
    mb-10
  `};
`;

export const BreakTW = tw`
  h-0
`;

export const Break = styled.div`
  ${BreakTW}
  flex-basis:100%
`;
