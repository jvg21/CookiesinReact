import styled from "styled-components";

const SpacerHtml = styled.div<{height:string,width?:string}>`
    height: ${props => props.height?props.height:'0'};
    width: ${props => props.width?props.width:'100%' };

`;

export function Spacer(props:{height:string,width?:string}){
    return(
        <SpacerHtml height={props.height} width={props.width||""}>
            ㅤ
            </SpacerHtml>
        )
}
