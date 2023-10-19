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

const CookieImageContainer = styled.div`
    & img{
        height: 150px;
        width: 160px;
    }
`;

export function CookieAcceptScreen(props: CookieAcceptScreenType) {
    return (
        <CookieBody 
            cookieThemeConfig={props.themeConfig}
        >
            <CookieImageContainer >
                <img src={Biscoito} alt="Cookie"></img>
            </CookieImageContainer>

            <CookieTitle color={props.themeConfig.primaryTextColor} FontSize={TextsConstants.MEDIUM_TITLE_SIZE}>
                Cookies e Privaciadade
            </CookieTitle>

            <Spacer Height="50px" Width="100%" />

            <CookieDescription color={props.themeConfig.primaryTextColor} TextAlign="center" FontSize={TextsConstants.MEDIUM_FONT_SIZE}>
                Esse WebSite Utiliza Cookies Para Garantir a Melhor Experiência do Usuário.
            </CookieDescription>
            <CookieLink Color={props.themeConfig.primaryAccentColor} FontSize={TextsConstants.MEDIUM_FONT_SIZE} href="./termos" target="_blank">Termos de Uso</CookieLink>

            <Spacer Height="1vh"/>
            
            <ButtonDiv>
                <CookieButton BackGround={props.themeConfig.primaryAccentColor} TextColor={props.themeConfig.primaryTextColor} HoverBgColor={props.themeConfig.hoverPrimaryAccendColor}>Aceitar Cookies</CookieButton>
                <Spacer Height="10px" />
                <CookieButton TextColor={props.themeConfig.primaryTextColor} HoverBgColor={props.themeConfig.backgroundColor} onClick={() => props.setConfig(true)}>Configurar Cookies</CookieButton>
            </ButtonDiv>

        </CookieBody>
    )
}