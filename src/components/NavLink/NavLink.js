import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children }) => {
  return (
    <LinkWrapper href={href}>
      <NormalText>{children}</NormalText>
      <HoverText>{children}</HoverText>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  transition: transform 600ms;

  ${LinkWrapper}:hover & {
    transition: transform 200ms;
  }
`;

const NormalText = styled(Text)`
  ${LinkWrapper}:hover & {
    transform: translateY(-100%);
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;

  font-weight: ${WEIGHTS.bold};

  transform: translateY(100%);

  ${LinkWrapper}:hover & {
    transform: translateY(0%);
  }
`;

export default NavLink;
