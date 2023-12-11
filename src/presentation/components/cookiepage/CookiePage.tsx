import styled from "styled-components";
import { useContext, useRef } from "react";
import { useOutsideClickEvent } from "../../../application/hooks/useoutsideclickevent/useOutsideClickEvent";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieAcceptScreen } from "../../screens/cookieacceptscreen/CookieAcceptScreen";
import { CookieConfigScreen } from "../../screens/cookieconfigscreen/CookieConfigScreen";
import { CookieBackground } from "../cookiebackground/CookieBackground";
import { CookieCloseButton } from "../cookieclosebutton/CookieCloseButton";
import { CookiePageContext } from "../../../application/context/CookiePageContext";

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

export function CookiePage(props: { themeConfig: CookieThemeConfig }) {
    const { modalCookie, setModalCookie, modalCookieConfig } = useContext(CookiePageContext)

    const containerRef = useRef(null);
    useOutsideClickEvent(containerRef, () => { modalCookie ? setModalCookie(!modalCookie) : null });

    return (
        <>
            {
                modalCookie &&
                <CookieBackground cookiethemeconfig={props.themeConfig}>
                    <CookieCardContainer
                        cookiethemeconfig={props.themeConfig}
                        ref={containerRef}>
                        <CookieCloseButton themeConfig={props.themeConfig} />
                        {
                            (!modalCookieConfig &&
                                <CookieAcceptScreen themeConfig={props.themeConfig}/>
                            )
                            ||
                            (modalCookieConfig &&
                                <CookieConfigScreen themeConfig={props.themeConfig}/>
                            )
                        }
                    </CookieCardContainer>
                </CookieBackground>
            }
        </>
    )
}

