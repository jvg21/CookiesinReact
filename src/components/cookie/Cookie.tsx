import styled from "styled-components";
import Biscoito from '../images/biscoito.png'
import { RxCross2 } from "react-icons/rx";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { useOutsideClickEvent } from "../../hooks/useOutsideClickEvent";
import { ToggleSwitch } from "./ToggleSwitch";
import { Theme } from "./ColorPalette";


const CookieBackground = styled.div`
    background-color:${Theme.blurredBackGround};
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

`;
const CookieContainer = styled.div`
    background-color: ${Theme.lightBackGround};
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999999;
    width: 450px;
    min-width: 280px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 3px 3px 15px -3px rgba(0,0,0,0.75);
    overflow: hidden;

    @media screen and (max-width: 450px) {
        margin: 0 2vw;;
    }
   
`;
const CookieExitButtonContainer = styled.div`
    position:absolute;
    top: 2vh;
    right: 1.5vw;

    & button{
        color: gray;
        font-size: 28px;
        border: none;
        background-color: none;
    }
    & button :hover{
        color: ${Theme.errorRed};
    }

`;
const CookieBody = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 90%;
    overflow-y:auto;
    /* SCROLLBAR MOD */
        &::-webkit-scrollbar {
            background: ${Theme.blackBackGround};
            width: 3px;
            height: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${Theme.primaryAccendColor};
        }

        /* SELECTION MOD */
        &::-moz-selection { /* Code for Firefox */
            color: black;
            background: ${Theme.blackBackGround};
        }
        
        &::selection {
            color: red;
            background: orange;
        }

`;
const CookieImageContainer = styled.div`
    & img{
        height: 150px;
        width: 160px;
    }
`;
const CookieTitle = styled.h2`
    font-size: 30px;
    margin: 5px 0 5px 0;
    text-align: center;
`;
const CookieDescription = styled.p<{ FontSize?: number, TextAlign?: string }>`
    padding: 1.2vw;
    font-size: ${props => props.FontSize ? props.FontSize : 20}px;
    text-align: ${props => props.TextAlign ? props.TextAlign : "left"};
    
`;
const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const Button = styled.button<{ BackGround?: string, TextColor?: string, HoverBgColor?: string }>`
    background-color: ${props => props.BackGround ? props.BackGround : "white"};
    color: ${props => props.TextColor ? props.TextColor : "black"};
    width: 80%;
    height: 40px;
    margin: 1% 0;
    border: none;
    border-radius: 5px;
    font-size: larger;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
    overflow: hidden;
    
    &:hover{
        background-color: ${props => props.HoverBgColor ? props.HoverBgColor : " "};
    }
`;

const Link = styled.a`
    color: ${Theme.primaryAccendColor};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

const CookieOptionList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 88%;
    margin-bottom: 2vh;
`;

const CookieOptionLi = styled.li`
    padding: 0.85px 0;
    width: 95%;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type:none;
    border-bottom: 0.5px solid lightgray;
`;
const CookieLiSubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    
`;
const OptionText = styled.p`
    font-size: 20px;
    font-weight: bolder;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CookieAcceptScreen(props: { setConfig: (foo: boolean) => void }) {
    return (
        <CookieBody>
            <CookieImageContainer >
                <img src={Biscoito} alt="Cookie"></img>

            </CookieImageContainer>
            <CookieTitle>
                Cookies e Privaciadade
            </CookieTitle>
            <CookieDescription TextAlign="center">
                Esse WebSite Utiliza Cookies Para Garantir a Melhor Experiência do Usuário.
                <br /><Link href="./termos" target="_blank">Termos de Uso</Link>
            </CookieDescription>
            <ButtonDiv>
                <Button BackGround={Theme.primaryAccendColor} TextColor="white" HoverBgColor={Theme.HoverPrimaryAccendColor}>Aceitar Cookies</Button>
                <Button TextColor="#757575" HoverBgColor="lightgray" onClick={() => props.setConfig(true)}>Configurar Cookies</Button>
            </ButtonDiv>
        </CookieBody>
    )
}

function CookieToggleOption(props: { name: string, title: string, switchState?: boolean, switchFunction?: (foo: boolean) => void }) {
    return (
        <CookieOptionLi>
            <CookieLiSubContainer>
                <OptionText>{props.name}</OptionText>
                <BsFillInfoCircleFill title={props.title} />
            </CookieLiSubContainer>

            <ToggleSwitch checked={props.switchState || false} setChecked={props.switchFunction} />
        </CookieOptionLi>
    )
}
function CookieConfigScreen(props: { setConfig: (foo: boolean) => void }) {
    const [operacionais, setOperacionais] = useState(true);
    const [analiticos, setAnaliticos] = useState(true);
    return (
        <CookieBody>
            <CookieTitle>
                Sobre os Cokies Nesse Site
            </CookieTitle>
            <CookieDescription TextAlign="justify">
                Nosso website utiliza cookies para garantir suas funcionalidades
                básicas e para melhorar a experiência online do usuário.
                Cookies utilizados no site são categorizados e abaixo você pode ativar ou desativar alguns deles.
                Para Mais Detalhes, leia: <Link href="https://abdconst.com.br/politicas-de-cookie" target="_blank">Politicas de Cookies</Link>
            </CookieDescription>
            <CookieOptionList>
                <CookieToggleOption
                    name="Cookies Operacionais"
                    title="blalallalalalla"
                    switchState={operacionais}
                    switchFunction={setOperacionais}
                />
                <CookieToggleOption name="Cookies Analíticos" title="blalal" switchState={analiticos} switchFunction={setAnaliticos} />
            </CookieOptionList>
            <ButtonDiv>
                <Button BackGround="#ebaf24" TextColor="white" HoverBgColor={Theme.HoverPrimaryAccendColor}>Aceitar Todos os Cookies</Button>
                <Button TextColor="#757575" HoverBgColor="lightgray" onClick={() => props.setConfig(false)}>Salvar Configurações</Button>
            </ButtonDiv>
        </CookieBody>
    )
}

export function CookieModal(props: { state: boolean }) {
    const [ativo, setAtivo] = useState(props.state || false);
    const [config, setConfig] = useState(false);

    const containerRef = useRef(null);
    useOutsideClickEvent(containerRef, () => { ativo ? setAtivo(!ativo) : null });
    return (
        <>
            {
                ativo &&
                <CookieBackground>
                    <CookieContainer ref={containerRef}>
                        <CookieExitButtonContainer>
                            <button onClick={() => setAtivo(false)}>
                                <RxCross2 />
                            </button>
                        </CookieExitButtonContainer>

                        {
                            (!config && <CookieAcceptScreen setConfig={setConfig} />) || (config && <CookieConfigScreen setConfig={setConfig} />)

                        }


                    </CookieContainer>

                </CookieBackground>}
        </>

    )


}

// CookieModal.Option = CookieAcceptScreen;