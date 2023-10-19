import styled from "styled-components";
import { CookieToggleOptionType } from "../../../application/types/components/cookietoggleoptiontype.ts/CookieToggleOptionType";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ToggleSwitch } from "../cookietoggleswitch/CookieToggleSwitch";

const CookieOptionLi = styled.li`
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
    
`;
const OptionText = styled.p`
    font-size: 20px;
    font-weight: bolder;
`;

export function CookieToggleOption(props: CookieToggleOptionType) {
    return (
        <CookieOptionLi>
            <CookieLiSubContainer>
                <OptionText>{props.name}</OptionText>
                <BsFillInfoCircleFill title={props.title} />
            </CookieLiSubContainer>
            <ToggleSwitch cookieThemeConfig={props.cookieThemeConfig} checked={props.switchState || false} setChecked={props.switchFunction} />
        </CookieOptionLi>
    )
}