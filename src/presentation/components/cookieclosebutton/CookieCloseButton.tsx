import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { CookieCloseButtonType } from "../../../application/types/components/cookieclosebuttontype/CookieCloseButtonType";

const CookieExitButtonContainer = styled.div`
    position:absolute;
    top: 2vh;
    right: 1.5vw;
`;

const CookieCloseButtonElement = styled.button<{ buttonhovercolor: string }>`
    color: gray;
    font-size: 28px;
    border: none;
    background-color: none; 
    transition: ease-in-out .25s;

    &:hover {
        color: ${(props) => props.buttonhovercolor};
    }
`;

export function CookieCloseButton(props: CookieCloseButtonType) {
    return (
        <CookieExitButtonContainer>
            <CookieCloseButtonElement
                buttonhovercolor={props.themeConfig.primaryAccentColor} 
                onClick={() => props.setActive(!props.isActive)}
            >
                <RxCross2 />
            </CookieCloseButtonElement>
        </CookieExitButtonContainer>
    );
}