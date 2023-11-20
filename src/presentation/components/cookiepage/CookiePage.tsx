import styled from "styled-components";
import { useRef, useState } from "react";
import { useOutsideClickEvent } from "../../../application/hooks/useoutsideclickevent/useOutsideClickEvent";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieAcceptScreen } from "../../screens/cookieacceptscreen/CookieAcceptScreen";
import { CookieConfigScreen } from "../../screens/cookieconfigscreen/CookieConfigScreen";
import { CookieBackground } from "../cookiebackground/CookieBackground";
import { CookieCloseButton } from "../cookieclosebutton/CookieCloseButton";
import { Cookie } from "../../../application/model/cookie/Cookie";
import { CookieState } from "../../../application/model/cookiestate/CookieState";

const CookieCardContainer = styled.div<{ cookiethemeconfig: CookieThemeConfig; }>`
    background-color: ${(props) => props.cookiethemeconfig.backgroundColor};
    position:relative;
    
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999999;
    width: 450px;
    min-width: 240px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 3px 3px 15px -3px rgba(0,0,0,0.75);
    transition: all 1.2s ease;
    @media screen and (max-width: 450px) {
        margin: 0 3vw;
    }
    @media screen and (max-height: 450px) {
        margin-top: 17.5rem
    }
`;

export function CookiePage(props: { state: boolean, themeConfig: CookieThemeConfig }) {
    const [ativo, setAtivo] = useState(props.state || false); //// modal
    const [config, setConfig] = useState(false); /// pagina de config
    const containerRef = useRef(null);
    useOutsideClickEvent(containerRef, () => { ativo ? setAtivo(!ativo) : null });

    const [cookies, setCookiesArray] = useState<CookieState[]>([]);

    function setCookies(cookie: Cookie) {
        cookies.push(new CookieState(cookie))
    }
    function saveCookie() {
        console.log(cookies);
    }
    useRef(setCookies(new Cookie("teste1","teste01",10)))
    return (
        <>
            {
                ativo &&
                <CookieBackground cookiethemeconfig={props.themeConfig}>
                    <CookieCardContainer
                        cookiethemeconfig={props.themeConfig}
                        ref={containerRef}>
                        <CookieCloseButton themeConfig={props.themeConfig} isActive={ativo} setActive={setAtivo} />
                        {
                            (!config &&
                                <CookieAcceptScreen
                                    themeConfig={props.themeConfig}
                                    setConfig={setConfig}
                                    saveCookies={saveCookie}
                                />
                            ) ||
                            (config &&
                                <CookieConfigScreen
                                    arrayCookie={cookies}
                                    themeConfig={props.themeConfig}
                                    setConfig={setConfig}
                                    saveCookies={saveCookie}
                                />
                            )
                        }
                    </CookieCardContainer>
                </CookieBackground>
            }
        </>
    )
}

