import styled from "styled-components";

export const CreathusText = styled.text<{
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: number;
  fontFamily?: string;
  fontHeight?: number;
  letterSpacing?: number;
  align?: "center" | "end" | "left" | "start" | "right";
  color?: string;
  width?:string;
}>`
  font-size: ${(props) => props.fontSize}px !important;
  font-style: ${(props) => props.fontStyle} !important;
  font-weight: ${(props) => props.fontWeight} !important;
  font-family: ${(props) => props.fontFamily} !important;
  line-height: ${(props) => props.fontHeight}px !important;
  letter-spacing: ${(props) => props.letterSpacing}px !important;
  text-align: ${(props) => props.align} !important;
  color: ${(props) => props.color} !important;
  width: ${(props) => props.width} !important;

`;
