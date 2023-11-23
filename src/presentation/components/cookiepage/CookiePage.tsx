import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { useOutsideClickEvent } from "../../../application/hooks/useoutsideclickevent/useOutsideClickEvent";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieAcceptScreen } from "../../screens/cookieacceptscreen/CookieAcceptScreen";
import { CookieConfigScreen } from "../../screens/cookieconfigscreen/CookieConfigScreen";
import { CookieBackground } from "../cookiebackground/CookieBackground";
import { CookieCloseButton } from "../cookieclosebutton/CookieCloseButton";
import { CookieController } from "../../../application/controller/cookiecontroller/CookieController";
import { Cookie } from "../../../application/model/cookie/Cookie";
import { CookieContext } from "../../../application/context/CookieContext";

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
export function CookiePage(props: { themeConfig: CookieThemeConfig}) {
    const {modalCookie,setModalCookie,modalCookieConfig,setModalCookieConfig,fillCookieActive,cookieInfo,CookieActive,setCookieActive,setCookieValue} = useContext(CookieContext)
    
    const containerRef = useRef(null);
    useOutsideClickEvent(containerRef, () => { modalCookie ? setModalCookie(!modalCookie) : null });

    let cookieController = new CookieController;

    function accept() {
        for (let i = 0; i < cookieInfo.length; i++) {
            console.log(CookieActive);
            if (CookieActive[i]) {
                for (let cookie of cookieInfo[i].cookies) {
                    cookieController.salvar(new Cookie(cookie.id, cookie.name, cookie.content, cookie.validity))
                }
            }
        }
        setModalCookie(false)
    }
    function acceptAll() {
        setCookieActive(fillCookieActive())
        setModalCookieConfig(false);
    }

    return (
        <>
            {
                modalCookie &&
                <CookieBackground cookiethemeconfig={props.themeConfig}>
                    <CookieCardContainer
                        cookiethemeconfig={props.themeConfig}
                        ref={containerRef}>
                        <CookieCloseButton themeConfig={props.themeConfig}  />
                        {
                            (!modalCookieConfig &&
                                <CookieAcceptScreen
                                    themeConfig={props.themeConfig}
                                    acceptCookies={accept}
                                />
                            )
                            ||
                            (modalCookieConfig &&
                                <CookieConfigScreen
                                    themeConfig={props.themeConfig}
                                    setAllCokies={acceptAll}
                                />
                            )
                        }
                    </CookieCardContainer>
                </CookieBackground>
            }
        </>
    )
}

