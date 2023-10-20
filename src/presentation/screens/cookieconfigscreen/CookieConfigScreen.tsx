import styled from "styled-components";
import { useState } from "react";
import { CookieBody } from "../../components/cookiebody/CookieBody";
import { CookieTitle } from "../../components/cookietitle/CookieTitle";
import { CookieToggleOption } from "../../components/cookietoggleoption/CookieToggleOption";
import { CookieDescription } from "../../components/cookiedescription/CookieDescription";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { ButtonDiv } from "../../components/cookiebuttondiv/CookieButtonDiv";
import { CookieButton } from "../../components/cookiebutton/CookieButton";
import { CookieLink } from "../../components/cookielink/CookieLink";
import { TextsConstants } from "../../../application/common/constants/TextsConstants";
import { Spacer } from "../../components/spacer/spacer";
import PresentationTexts from '../../../infrastructure/services/presentationTexts.json'

const CookieOptionList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 88%;
    margin-bottom: 2vh;
`;

export function CookieConfigScreen(props: { setConfig: (foo: boolean) => void, themeConfig: CookieThemeConfig }) {

    const [operacionais, setOperacionais] = useState(true);
    const [analiticos, setAnaliticos] = useState(true);

    return (
        <CookieBody
            cookieThemeConfig={props.themeConfig}
        >
            <CookieTitle
                FontSize={TextsConstants.MEDIUM_TITLE_SIZE}>
                {PresentationTexts.configPageTitle}
            </CookieTitle>

            <Spacer Height={'50px'} />

            <CookieDescription
                TextAlign='justify'
                FontSize={TextsConstants.MEDIUM_FONT_SIZE}
            >
                {PresentationTexts.configPageDescription}
                <CookieLink
                    Color={props.themeConfig.primaryAccentColor}
                    FontSize={TextsConstants.MEDIUM_FONT_SIZE}
                    href='https://abdconst.com.br/politicas-de-cookie'
                    target="_blank">
                    {PresentationTexts.configPageLinkText}
                </CookieLink>
            </CookieDescription>

            <Spacer Height="30px" />

            <CookieOptionList>

                <CookieToggleOption
                    name='Cookies Operacionais'
                    title='blalallalalalla'
                    switchState={operacionais}
                    switchFunction={setOperacionais}
                    cookieThemeConfig={props.themeConfig}
                />
                <CookieToggleOption
                    name='Cookies Analíticos'
                    title='blalal'
                    switchState={analiticos}
                    switchFunction={setAnaliticos}
                    cookieThemeConfig={props.themeConfig}
                />
            </CookieOptionList>
            <ButtonDiv>
                <CookieButton
                    BackGround={props.themeConfig.primaryAccentColor}
                    TextColor={props.themeConfig.primaryTextColor}
                    HoverBgColor={props.themeConfig.hoverPrimaryAccendColor}>
                    {PresentationTexts.configPageAcceptButton}
                </CookieButton>

                <Spacer Height="10px" />

                <CookieButton
                    TextColor='#757575'
                    HoverBgColor={props.themeConfig.backgroundColor}
                    onClick={() => props.setConfig(false)}>
                    {PresentationTexts.configPageSaveButton}
                </CookieButton>
            </ButtonDiv>
        </CookieBody>
    )
}