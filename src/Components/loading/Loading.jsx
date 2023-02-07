import React from 'react';
import ReactLoading from 'react-loading';

import { StyledDiv } from './style';

export const Loading = ({ type }) => (
    <StyledDiv>
        <ReactLoading type={type} height={'10%'} width={'10%'} />
    </StyledDiv>
);
