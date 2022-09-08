import { useState } from 'react';
import styled, { css } from 'styled-components';

export const Mobile: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Wrapper>
                <Text>THE PLANETS</Text>
                <Menu aria-label='Menu toggle' aria-controls='nav-list' onClick={handleToggle}>
                    <Bars isOpen={isOpen} />
                </Menu>
            </Wrapper>
            <NavList isOpen={isOpen}></NavList>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: none;
    }
`;

const Text = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
`;

const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 27px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

type BarsProps = {
    isOpen: boolean;
};

const Bars = styled.span<BarsProps>`
    position: relative;

    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.colors.white};
    transition: transform 200ms ease;
    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: inherit;
        transition: top 200ms ease 0.12s, transform 200ms ease;
    }
    &::before {
        top: -10px;
    }
    &::after {
        top: 10px;
    }
    ${({ isOpen }) =>
        isOpen
            ? css`
                  & {
                      transform: rotate(45deg);
                      transition: transform 200ms 0.12s ease;
                  }
                  &::before {
                      top: 0;
                      opacity: 0;
                      transition: top 200ms ease, opacity 200ms ease;
                  }
                  &::after {
                      top: 0;
                      transform: rotate(-90deg);
                      transition: top 200ms ease, transform 200ms ease 0.12s;
                  }
              `
            : ''};
`;

const NavList = styled.ul<BarsProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    left: 0;
    top: 80px;
    z-index: 99;

    transition: opacity 0.3s;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: none;
    }
`;
