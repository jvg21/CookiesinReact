import styled from "styled-components";
import { CookieBody } from "../../components/cookiebody/CookieBody";
import { CookieTitle } from "../../components/cookietitle/CookieTitle";
import { CookieDescription } from "../../components/cookiedescription/CookieDescription";
import { ButtonDiv } from "../../components/cookiebuttondiv/CookieButtonDiv";
import { CookieButton } from "../../components/cookiebutton/CookieButton";
import { CookieLink } from "../../components/cookielink/CookieLink";
import { TextsConstants } from "../../../application/common/constants/TextsConstants";
import { Spacer } from "../../components/spacer/spacer";
import PresentationTexts from '../../../infrastructure/services/presentationTexts.json'
import { CookieConfigScreenType } from "../../../application/types/screens/cookieconfigscreen/CookieConfigScreenType";
import { useContext } from "react";
import { CookieContext } from "../../../application/context/CookieContext";
import { CookiePageContext } from "../../../application/context/CookiePageContext";
import { CookieToggleOption } from "../../components/cookietoggleoption/CookieToggleOption";

const CookieOptionList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 88%;
    margin-bottom: 2vh;
`;

export function CookieConfigScreen(props: CookieConfigScreenType) {
    const { setModalCookieConfig } = useContext(CookiePageContext)
    const { setAllCookieState, getCategories, CookieInfoArray, CookieStateArray, setCookieStateByIndex } = useContext(CookieContext)

    let teste = getCategories();

    return (
        <CookieBody
            cookiethemeconfig={props.themeConfig}
        >
            <CookieTitle
                fontSize={TextsConstants.MEDIUM_TITLE_SIZE}>
                {PresentationTexts.configPageTitle}
            </CookieTitle>

            <Spacer height={'50px'} />

            <CookieDescription
                textalign='justify'
                fontSize={TextsConstants.MEDIUM_FONT_SIZE}
            >
                {PresentationTexts.configPageDescription}
                <CookieLink
                    color={props.themeConfig.primaryAccentColor}
                    fontSize={TextsConstants.MEDIUM_FONT_SIZE}
                    href={PresentationTexts.UrlPoliticasCookies}
                    target="_blank">
                    {PresentationTexts.configPageLinkText}
                </CookieLink>
            </CookieDescription>
            <Spacer height="30px" />

            <CookieOptionList>
                {
                    CookieInfoArray.map((x, index) => {
                        return (
                            <CookieToggleOption
                                key={index}
                                id={x.id}
                                name={x.name}
                                title={x.description}
                                switchState={CookieStateArray[x.id]}
                                cookieThemeConfig={props.themeConfig}
                            />)
                    })
                }
            </CookieOptionList>

            <ButtonDiv>
                <CookieButton
                    background={props.themeConfig.primaryAccentColor}
                    textcolor={props.themeConfig.primaryTextColor}
                    hoverbgcolor={props.themeConfig.hoverPrimaryAccendColor}
                    onClick={() => { setAllCookieState(true) }}
                >
                    {PresentationTexts.configPageAcceptButton}
                </CookieButton>
                <Spacer height="10px" />
                <CookieButton
                    textcolor={props.themeConfig.primaryTextColor}
                    hoverbgcolor={props.themeConfig.backgroundColor}
                    onClick={() => setModalCookieConfig(false)}>
                    {PresentationTexts.configPageSaveButton}
                </CookieButton>
            </ButtonDiv>
        </CookieBody>
    )
}