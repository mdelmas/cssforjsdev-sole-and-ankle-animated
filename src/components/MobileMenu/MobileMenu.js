/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS, COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  let navLinkCount = 0;
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <MobileNavLink href="/sale" linkPosition={++navLinkCount}>
            Sale
          </MobileNavLink>
          <MobileNavLink href="/new" linkPosition={++navLinkCount}>
            New Releases
          </MobileNavLink>
          <MobileNavLink href="/men" linkPosition={++navLinkCount}>
            Men
          </MobileNavLink>
          <MobileNavLink href="/women" linkPosition={++navLinkCount}>
            Women
          </MobileNavLink>
          <MobileNavLink href="/kids" linkPosition={++navLinkCount}>
            Kids
          </MobileNavLink>
          <MobileNavLink href="/collections" linkPosition={++navLinkCount}>
            Collections
          </MobileNavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const MobileNavLink = ({ href, linkPosition, children }) => {
  return (
    <NavLink href={href} linkPosition={linkPosition}>
      {children}
    </NavLink>
  );
};

const backgroundFadeIn = keyframes`
  from {
    background: hsl(${COLORS.gray[700]} / 0.2);
  }
  to {
    background: hsl(${COLORS.gray[700]} / 0.8);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const contentFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  background: hsl(${COLORS.gray[700]} / 0.8);

  animation: ${contentFadeIn} 300ms ease-out both;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${backgroundFadeIn} 300ms ease-out both;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideRight} 400ms cubic-bezier(0.7, 0, 0.55, 1.1) both;

    & * {
      animation: ${contentFadeIn} 300ms ease-in-out both;
      animation-delay: 150ms;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentFadeIn} 300ms ease-in-out both;
    animation-delay: ${(props) => props.linkPosition * 50 + 300}ms;
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentFadeIn} 300ms ease-in-out both;
    animation-delay: 600ms;
  }
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
