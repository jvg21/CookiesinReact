import styled from "styled-components";
import { useRef, useState } from "react";
import { useOutsideClickEvent } from "../../../application/hooks/useoutsideclickevent/useOutsideClickEvent";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieAcceptScreen } from "../../screens/cookieacceptscreen/CookieAcceptScreen";
import { CookieConfigScreen } from "../../screens/cookieconfigscreen/CookieConfigScreen";
import { CookieBackground } from "../cookiebackground/CookieBackground";
import { CookieCloseButton } from "../cookieclosebutton/CookieCloseButton";
import { CookieController } from "../../../application/controller/cookiecontroller/CookieController";
import { CookieInfo } from "../../../application/model/cookieInfo/CookieInfo";
import { Cookie } from "../../../application/model/cookie/Cookie";

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
export function CookiePage(props: { state: boolean, themeConfig: CookieThemeConfig, cookieController: CookieController, cookieInfo: CookieInfo[] }) {
    const [ativo, setAtivo] = useState(props.state || false); //// modal
    const [config, setConfig] = useState(false); /// pagina de config
    const containerRef = useRef(null);
    useOutsideClickEvent(containerRef, () => { ativo ? setAtivo(!ativo) : null });

    let cookieInfo = props.cookieInfo;
    const [CookieActive, setCookieActive] = useState<boolean[]>(fillCookieActive());

    function setCookieValue(id: number, value: boolean) {
        let cookieChange: boolean[] = [];
        for (let i = 0; i < CookieActive.length; i++) {
            if (i == id) {
                cookieChange.push(value)
            } else {
                cookieChange.push(CookieActive[i])
            }
        }
        setCookieActive(cookieChange);
    }

    function fillCookieActive() {
        let CookieActiveArray: boolean[] = []
        props.cookieInfo.forEach(() => {
            CookieActiveArray.push(true)
        })
        return CookieActiveArray;
    }

    function accept() {
        for (let i = 0; i < cookieInfo.length; i++) {
            if(CookieActive[i]){
                props.cookieController.salvar(new Cookie(cookieInfo[i].id, cookieInfo[i].name, cookieInfo[i].description, cookieInfo[i].validity, true))
            }
        }
        setAtivo(false)
    }
    function acceptAll() {
        setCookieActive(fillCookieActive())
        setConfig(false);
    }
    
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
                                    acceptCookies={accept}
                                />
                            )
                            ||
                            (config &&
                                <CookieConfigScreen
                                    themeConfig={props.themeConfig}
                                    setConfig={setConfig}
                                    setAllCokies={acceptAll}
                                    cookieInfo={cookieInfo}
                                    cookieState={CookieActive}
                                    changeCookieStateFunction={setCookieValue}
                                />
                            )
                        }
                    </CookieCardContainer>
                </CookieBackground>
            }
        </>
    )
}

