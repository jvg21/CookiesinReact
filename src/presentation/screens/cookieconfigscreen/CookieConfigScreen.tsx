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
import { CookieCategoryList } from "../../components/cookiecateogorylist/CookieCategoryList";
import { CategoryToggleOption } from "../../components/categorytoggleoption/CategoryToggleOption";

const CookieOptionList = styled.ul`
    width: 93%;
`;
export function CookieConfigScreen(props: CookieConfigScreenType) {
    const { setModalCookieConfig } = useContext(CookiePageContext)
    const { setAllState, CookieInfoArray } = useContext(CookieContext)

    return (
        <CookieBody
            cookiethemeconfig={props.themeConfig}
        >
            <CookieTitle
                fontSize={TextsConstants.MEDIUM_TITLE_SIZE}
                color={props.themeConfig.primaryTextColor}>
                {PresentationTexts.configPageTitle}
            </CookieTitle>

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
                    CookieInfoArray.map((category, index) => {
                        return (
                            <div key={index}>
                                <CategoryToggleOption
                                    id={category.id}
                                    name={category.name}
                                    title={category.description}
                                    cookieThemeConfig={props.themeConfig}
                                />
                                <CookieCategoryList themeConfig={props.themeConfig} cookieList={category.cookies}></CookieCategoryList>

                            </div>
                        )
                    })
                }
            </CookieOptionList>
            <ButtonDiv>
                <CookieButton
                    background={props.themeConfig.primaryAccentColor}
                    textcolor={props.themeConfig.primaryTextColor}
                    hoverbgcolor={props.themeConfig.hoverPrimaryAccendColor}
                    onClick={() => { setAllState() }}
                >
                    {PresentationTexts.configPageAcceptButton}
                </CookieButton>
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