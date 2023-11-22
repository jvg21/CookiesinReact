import { ChangeEvent } from "react";
import styled from "styled-components";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px 0;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input<{ inputcolor: string; }>`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${(props) => props.inputcolor};

    &:before {
      transform: translate(17.5px, -50%);
    }
  }
  
`;

export function ToggleSwitch(props: { checked: boolean,id:number, setChecked?: (id:number,foo: boolean) => void; cookiethemeconfig: CookieThemeConfig}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.setChecked) {
      (props.setChecked(props.id,e.target.checked))
    }
  };

  return (
    <Label>
      <Input inputcolor={props.cookiethemeconfig.primaryAccentColor} checked={props.checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
}
