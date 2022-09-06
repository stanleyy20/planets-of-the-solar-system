import { ReactNode } from 'react';

import styled from 'styled-components';

import { starsBackground } from '../../styles/starsBackground';

type WrapperProps = {
    children: ReactNode;
};

export const Wrapper: React.FunctionComponent<WrapperProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 2px;
        top: -2px;
        background: white;
        box-shadow: ${starsBackground};
        border-radius: 100px;
    }
`;
