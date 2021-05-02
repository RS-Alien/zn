import React from 'react'
import styled from 'styled-components'
import i18n from '../../i18n'

const IconWrapper = styled.div<{ isActive?: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 0.8 : 0.4)};

  :hover {
    opacity: 1;
  }
`

const StyledToggle = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  color: white;

  :hover {
    text-decoration: none;
  }
`

export interface ToggleProps {
  lang: string
  toggle: (lang: string) => void
}

export default function ToggleLanguage({ lang, toggle }: ToggleProps) {
  const EN = { name: 'English', key: 'en-US', label: 'en' };
  const ZH = { name: '简体中文', key: 'zh-CN', label: 'zh' };
  let isZH = lang == ZH.label;
  let change = (language) => {
    i18n.changeLanguage(language.key);
    toggle(language.label);
  }
  return (
    <StyledToggle >
      <span>
        <IconWrapper isActive={isZH} onClick={() => { change(ZH) }}>
          简体中文
        </IconWrapper>
      </span>
      <span style={{ padding: '0 .5rem' }}>{' / '}</span>
      <span>
        <IconWrapper isActive={!isZH} onClick={() => { change(EN) }}>
          English
        </IconWrapper>
      </span>
    </StyledToggle>
  )
}
