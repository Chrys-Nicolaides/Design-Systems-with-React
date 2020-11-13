import React from "react";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "../buttons";

const ButtonsTab = () => {
  return (
    <div>
      <div style={{ margin: "0 16px 0 46px", paddingTop: "40px", display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
        }}>
          <PrimaryButton style={{
            margin: "0 16px 60px 0",
          }}>Primary Button</PrimaryButton>
          <PrimaryButton style={{
            margin: "0 16px 24px 0"
          }} modifiers={['success']}>Primary Button</PrimaryButton>
          <PrimaryButton style={{
            margin: "0 16px 24px 0"
          }} modifiers={['warning']}>Primary Button</PrimaryButton>
          <PrimaryButton style={{
            margin: "0 16px 24px 0"
          }} modifiers={['error']}>Primary Button</PrimaryButton>
          <PrimaryButton style={{
            margin: "0 16px 24px 0"
          }} modifiers={['disabled']}>Primary Button</PrimaryButton>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <SecondaryButton style={{
            margin: "0 16px 60px"
          }}> Secondary Button</SecondaryButton>
          < SecondaryButton style={{
            margin: "0 16px 24px"
          }} modifiers={['SecondaryButtonSuccess']}>Secondary Button</SecondaryButton>
          <SecondaryButton style={{
            margin: "0 16px 24px"
          }} modifiers={['SecondaryButtonWarning']}> Secondary Button</SecondaryButton>
          <SecondaryButton style={{
            margin: "0 16px 24px"
          }} modifiers={['SecondaryButtonError']}> Secondary Button</SecondaryButton>
          <SecondaryButton style={{
            margin: "0 16px 24px"
          }} modifiers={['disabled']}> Secondary Button</SecondaryButton>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
        }}>
          <TertiaryButton style={{
            margin: "0 16px 60px"
          }}>Tertiary Button</TertiaryButton>
          <TertiaryButton style={{
            margin: "0 16px 24px"
          }} modifiers={['disabled']}>Tertiary Button</TertiaryButton>
        </div>
      </div>
    </div>
  )
}


export default ButtonsTab;