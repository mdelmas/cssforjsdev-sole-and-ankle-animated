import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

export const Effects = {
  FLIPUP: 0,
  FILL: 1,
};

const NavLink = ({ href, effect = Effects.FLIPUP, children }) => {
  return effect === Effects.FILL ? (
    <FlipUpWrapper href={href}>
      <NormalText>{children}</NormalText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </FlipUpWrapper>
  ) : (
    <FillWrapper href={href}>{children}</FillWrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FillWrapper = styled(Wrapper)`
  background-image: linear-gradient(
    to left,
    var(--color-gray-900),
    var(--color-gray-900) 50%,
    var(--color-gray-700) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text;
  color: transparent;

  transition: background-position 600ms ease-in;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus {
      background-position: 0%;
      transition: background-position 200ms ease-out;
    }
  }
`;

const FlipUpWrapper = styled(Wrapper)`
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  display: block;

  transition: transform 600ms;

  @media (prefers-reduced-motion: no-preference) {
    ${FlipUpWrapper}:hover & {
      transition: transform 200ms;
    }
  }
`;

const NormalText = styled(Text)`
  @media (prefers-reduced-motion: no-preference) {
    ${FlipUpWrapper}:hover & {
      transform: translateY(-100%);
    }
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;

  font-weight: ${WEIGHTS.bold};

  transform: translateY(100%);

  @media (prefers-reduced-motion: no-preference) {
    ${FlipUpWrapper}:hover & {
      transform: translateY(0%);
    }
  }
`;

export default NavLink;
