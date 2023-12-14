import styled from "styled-components";
import { useContext } from 'react'
import { CookieToggleOptionType } from "../../../application/types/components/cookietoggleoptiontype.ts/CookieToggleOptionType";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ToggleSwitch } from "../cookietoggleswitch/CookieToggleSwitch";
import { CookieContext } from "../../../application/context/CookieContext";
import { DescriptionDiv } from "../descriptiondiv/DescriptionDiv";
import { TextsConstants } from "../../../application/common/constants/TextsConstants";
import { CookieTitle } from "../cookietitle/CookieTitle";
import { CookieLiSubContainer } from "../cookielisubcontainer/CookieLiSubContainer";

const CookieLI = styled.li`
    padding: 0.85px 0;
    width: 95%;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type:none;
    border-bottom: 0.5px solid lightgray;
`;

export function CookieToggleOption(props: CookieToggleOptionType) {
    const { setStateById } = useContext(CookieContext)
    return (
        <>
            <CookieLI>
                <CookieLiSubContainer title={props.title}>
                    <CookieTitle fontSize={TextsConstants.MEDIUM_FONT_SIZE} color={props.cookieThemeConfig.primaryTextColor}>ㅤ{props.name}</CookieTitle>
                    <DescriptionDiv>
                        <BsFillInfoCircleFill/>
                    </DescriptionDiv>
                </CookieLiSubContainer>
                <ToggleSwitch cookiethemeconfig={props.cookieThemeConfig} setCookieState={setStateById} id={props.id} checked={props.switchState || false} />
            </CookieLI>
        </>
    )
}