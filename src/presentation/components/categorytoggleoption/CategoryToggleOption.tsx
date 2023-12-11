import styled from "styled-components";
import { useContext } from 'react'
import { CookieToggleOptionType } from "../../../application/types/components/cookietoggleoptiontype.ts/CookieToggleOptionType";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ToggleSwitch } from "../cookietoggleswitch/CookieToggleSwitch";
import { CookieContext } from "../../../application/context/CookieContext";
import { DescriptionDiv } from "../descriptiondiv/DescriptionDiv";
import { CookieTitle } from "../cookietitle/CookieTitle";
import { TextsConstants } from "../../../application/common/constants/TextsConstants";

const CategoryTh = styled.td`
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



export function CategoryToggleOption(props: CookieToggleOptionType) {
    const { setStateByCategoryId, getCategoryState } = useContext(CookieContext)

    return (
        <tr>
            <CategoryTh>
                <CookieLiSubContainer title={props.title} >
                    <CookieTitle fontSize={TextsConstants.MEDIUM_FONT_SIZE} color={props.cookieThemeConfig.primaryTextColor}>{props.name}</CookieTitle>
                    <DescriptionDiv>
                        <BsFillInfoCircleFill />
                    </DescriptionDiv>
                </CookieLiSubContainer>
                <ToggleSwitch cookiethemeconfig={props.cookieThemeConfig} setCookieState={setStateByCategoryId} id={props.id} checked={getCategoryState(props.id)} />
            </CategoryTh>
        </tr>
    )
}