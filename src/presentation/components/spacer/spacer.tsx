import styled from "styled-components";

export const Spacer = styled.div<{height:string,width?:string}>`
    height: ${props => props.height?props.height:'0'};
    width: ${props => props.width?props.width:'100%' }

`;
