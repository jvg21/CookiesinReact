import styled from "styled-components";

const Spacer = styled.div<{Height:string,Width:string}>`
    height: ${props => props.Height?props.Height:'0'};
    width: ${props => props.Width?props.Width:'0' }

`;