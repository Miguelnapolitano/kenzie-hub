import styled, { css } from "styled-components";
import BaseTitle from "./components/BaseTitle";
import BaseText from "./components/BaseText";

export const StyledTitle = styled(BaseTitle)`
  color: var(--color-grey-0);

  ${({ titleType }) => {
    switch (titleType) {
      case "one":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 28px;
        `;
      case "two":
        return css`
          font-weight: 600;
          font-size: 1rem;
          line-height: 18px;
        `;
      case "three":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 18px;
        `;
    }
  }}
`;

export const StyledText = styled(BaseText)`
  ${({ textType }) => {
    switch (textType) {
      case "label":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
          color: var(--color-grey-0);
        `;
      case "input":
        return css`
          font-weight: 400;
          font-size: 1rem;
          color: var(--color-grey-0);
        `;
      case "error":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
          color: var(--color-feedback-negative);
        `;
      case "one":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
          color: var(--color-grey-1);
        `;
      case "two":
        return css`
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--color-grey-1);
        `;
    }
  }}
`;
