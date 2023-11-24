import styled from "styled-components";
import Biscoito from '/assets/images/biscoito.png';
import { CookieBody } from "../../components/cookiebody/CookieBody";
import { CookieTitle } from "../../components/cookietitle/CookieTitle";
import { CookieDescription } from "../../components/cookiedescription/CookieDescription";
import { ButtonDiv } from "../../components/cookiebuttondiv/CookieButtonDiv";
import { CookieButton } from "../../components/cookiebutton/CookieButton";
import { CookieLink } from "../../components/cookielink/CookieLink";
import { CookieAcceptScreenType } from "../../../application/types/screens/cookieacceptscreen/CookieAcceptScreenType";
import { Spacer } from "../../components/spacer/spacer";
import { TextsConstants } from "../../../application/common/constants/TextsConstants";
import PresentationTexts from '../../../infrastructure/services/presentationTexts.json'
import { useContext } from "react";
import { CookieContext } from "../../../application/context/CookieContext";
import { CookiePageContext } from "../../../application/context/CookiePageContext";

const CookieImageContainer = styled.div`
    & img{
        height: 150px;
        width: 160px;
    }
`;

export function CookieAcceptScreen(props: CookieAcceptScreenType) {
    const {setModalCookieConfig} = useContext(CookiePageContext)
    const {CookieStateArray} = useContext(CookieContext)

    function acceptButtonTextChange(): string {
        for (let bool of CookieStateArray) {
            if (bool == true) {
                return PresentationTexts.acceptPageButton;
            }
        }
        return PresentationTexts.acceptPageRejectButton;
    }
    return (
        <CookieBody cookiethemeconfig={props.themeConfig}>
            <CookieImageContainer>
                <img src={Biscoito} alt="Cookie"></img>
            </CookieImageContainer>
            <CookieTitle
                color={props.themeConfig.primaryTextColor}
                fontSize={TextsConstants.MEDIUM_TITLE_SIZE}>
                {PresentationTexts.acceptPageTitle}
            </CookieTitle>
            <Spacer height="50px"/>
            <CookieDescription
                color={props.themeConfig.primaryTextColor}
                textalign="center"
                fontSize={TextsConstants.MEDIUM_FONT_SIZE}>
                {PresentationTexts.acceptPageDescription}
            </CookieDescription>
            <CookieLink
                color={props.themeConfig.primaryAccentColor}
                fontSize={TextsConstants.MEDIUM_FONT_SIZE}
                href="./termos" target="_blank">
                {PresentationTexts.acceptPageLinkText}
            </CookieLink>
            <Spacer height="1vh"/>
            <ButtonDiv>
                <CookieButton
                    background={props.themeConfig.primaryAccentColor}
                    textcolor={props.themeConfig.primaryTextColor}
                    hoverbgcolor={props.themeConfig.hoverPrimaryAccendColor}
                    onClick={() => {}}
                >
                    {acceptButtonTextChange()}
                </CookieButton>
                <Spacer height="10px" />
                <CookieButton
                    textcolor={props.themeConfig.primaryTextColor}
                    hoverbgcolor={props.themeConfig.backgroundColor}
                    onClick={() => setModalCookieConfig(true)}>
                    {PresentationTexts.acceptPageConfigButton}
                </CookieButton>
            </ButtonDiv>
        </CookieBody>
    )
}
