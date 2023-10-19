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
            <CookieTitle>
                Sobre os Cokies Nesse Site
            </CookieTitle>
            <CookieDescription
                TextAlign='justify'>
                Nosso website utiliza cookies para garantir suas funcionalidades
                básicas e para melhorar a experiência online do usuário.
                Cookies utilizados no site são categorizados e abaixo você pode ativar ou desativar alguns deles.
                Para Mais Detalhes, leia: &nbsp;
                <CookieLink
                    mainColor={props.themeConfig.primaryAccentColor}
                    href='https://abdconst.com.br/politicas-de-cookie'
                    target="_blank">
                    Politicas de Cookies
                </CookieLink>
            </CookieDescription>
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
                    Aceitar Todos os Cookies
                </CookieButton>
                <CookieButton
                    TextColor='#757575'
                    HoverBgColor={props.themeConfig.backgroundColor}
                    onClick={() => props.setConfig(false)}>
                    Salvar Configurações
                </CookieButton>
            </ButtonDiv>
        </CookieBody>
    )
}