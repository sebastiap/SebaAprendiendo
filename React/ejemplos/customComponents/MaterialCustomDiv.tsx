import styled from "styled-components";

export const CreathusContainer = styled.div<{
  mHeight?: number;
  mWidth?: number;
  mTop?: number;
  mBottom?: number;
  pHeight?: number;
  mLeft?: number;
  mRight?: number;
  pTop?: number;
  pBottom?: number;
  radius?: number;
  pLeft?: number;
  pRight?: number;
  pWidth?: number;
  background?: string;
  position?: string;
  display?: string;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  width?: string;
  height?: string;
  cursor?: string;
  border?: string;
  boxShadow?:string;
  alignmentText?:"end" | "center" | "start";
}>`
  ${(props) =>
    props.mWidth &&
    `margin-right: ${props.mWidth! / 2}px;
  margin-left: ${props.mWidth! / 2}px;`}
  ${(props) =>
    props.mHeight &&
    `margin-top: ${props.mHeight! / 2}px;
  margin-bottom: ${props.mHeight! / 2}px;`}


  ${(props) => props.pBottom && `padding-bottom: ${props.pBottom}px !important;`}
  ${(props) => props.pTop && `padding-top: ${props.pTop}px !important;`}
  ${(props) => props.pRight && `padding-right: ${props.pRight}px !important;`}
  ${(props) => props.pLeft && `padding-left: ${props.pLeft}px !important;`}

  ${(props) => props.mBottom && `margin-bottom: ${props.mBottom}px !important;`}
  ${(props) => props.mTop && `margin-top: ${props.mTop}px !important;`}
  ${(props) => props.mRight && `margin-right: ${props.mRight}px !important;`}
  ${(props) => props.mLeft && `margin-left: ${props.mLeft}px !important;`}

  ${(props) => props.width && `width: ${props.width} !important;`}
  ${(props) => props.height && `height: ${props.height} !important;`} 
  ${(props) => props.cursor && `cursor: ${props.cursor} !important;`}
  ${(props) => props.radius && `border-radius: ${props.radius}px !important;`}
  ${(props) => props.alignmentText && `text-align: ${props.alignmentText} !important;`}

  ${(props) => props.position && `position: ${props.position} !important;`}
  ${(props) => props.display && `display: ${props.display} !important;`}

  ${(props) => props.top && `top: ${props.top}px !important;`}
  ${(props) => props.right && `right: ${props.right}px !important;`}
  ${(props) => props.left && `left: ${props.left}px !important;`}
  ${(props) => props.bottom && `bottom: ${props.bottom}px !important;`}

  ${(props) => props.border && `border: ${props.border} !important;`}

  ${(props) => props.boxShadow && `box-shadow: ${props.boxShadow} !important;`}

  ${(props) =>
    props.background && `background-color: ${props.background} !important;`}
  ${(props) =>
    props.pWidth &&
    `padding-right: ${props.pWidth! / 2}px;
  padding-left: ${props.pWidth! / 2}px;`}
  ${(props) =>
    props.pHeight &&
    `padding-top: ${props.pHeight! / 2}px;
  padding-bottom: ${props.pHeight! / 2}px;`}
`;
