import styled from "styled-components";
import { useContext } from 'react'
import { CookieToggleOptionType } from "../../../application/types/components/cookietoggleoptiontype.ts/CookieToggleOptionType";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ToggleSwitch } from "../cookietoggleswitch/CookieToggleSwitch";
import { CookieContext } from "../../../application/context/CookieContext";
import { DescriptionDiv } from "../descriptiondiv/DescriptionDiv";

const CookieOptionLi = styled.td`
    padding: 0.85px 0;
    width: 95%;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type:none;
    border-bottom: 0.5px solid lightgray;
`;

const CookieLiSubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    padding-left: 10%;
    
`;
const OptionText = styled.p`
    font-size: 20px;
`;

export function CookieToggleOption(props: CookieToggleOptionType) {
    const { setStateById } = useContext(CookieContext)

    return (
        <tr>
            <CookieOptionLi>
                <CookieLiSubContainer title={props.title}>
                    <OptionText >{props.name}</OptionText>
                    <DescriptionDiv>
                        <BsFillInfoCircleFill/>
                    </DescriptionDiv>
                </CookieLiSubContainer>
                <ToggleSwitch cookiethemeconfig={props.cookieThemeConfig} setCookieState={setStateById} id={props.id} checked={props.switchState || false} />
            </CookieOptionLi>
        </tr>
    )
}