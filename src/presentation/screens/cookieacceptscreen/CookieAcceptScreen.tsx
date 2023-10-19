import styled from "styled-components";
import Biscoito from '/assets/images/biscoito.png';
import { CookieBody } from "../../components/cookiebody/CookieBody";
import { CookieTitle } from "../../components/cookietitle/CookieTitle";
import { CookieDescription } from "../../components/cookiedescription/CookieDescription";
import { ButtonDiv } from "../../components/cookiebuttondiv/CookieButtonDiv";
import { CookieButton } from "../../components/cookiebutton/CookieButton";
import { CookieLink } from "../../components/cookielink/CookieLink";
import { CookieAcceptScreenType } from "../../../application/types/screens/cookieacceptscreen/CookieAcceptScreenType";

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
            <CookieTitle color={props.themeConfig.primaryTextColor}>
                Cookies e Privaciadade
            </CookieTitle>
            <CookieDescription color={props.themeConfig.primaryTextColor} TextAlign="center">
                Esse WebSite Utiliza Cookies Para Garantir a Melhor Experiência do Usuário.
            </CookieDescription>
            <CookieLink mainColor={props.themeConfig.primaryAccentColor} href="./termos" target="_blank">Termos de Uso</CookieLink>
            <ButtonDiv>
                <CookieButton BackGround={props.themeConfig.primaryAccentColor} TextColor={props.themeConfig.primaryTextColor} HoverBgColor={props.themeConfig.hoverPrimaryAccendColor}>Aceitar Cookies</CookieButton>
                <CookieButton TextColor={props.themeConfig.primaryTextColor} HoverBgColor={props.themeConfig.backgroundColor} onClick={() => props.setConfig(true)}>Configurar Cookies</CookieButton>
            </ButtonDiv>
        </CookieBody>
    )
}