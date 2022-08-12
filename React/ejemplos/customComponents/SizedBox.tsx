import styled from "styled-components";

export const SizedBox = styled.div<{
  height?: number;
  width?: number;
  align?: string;
}>`
  ${(props) =>
    props.width &&
    `margin-right: ${props.width! / 2}px;
  margin-left: ${props.width! / 2}px;`}

  ${(props) =>
    props.height &&
    `margin-top: ${props.height! / 2}px;
  margin-bottom: ${props.height! / 2}px;`}

  ${(props) => props.align && `text-align: ${props.align};`}
`;
