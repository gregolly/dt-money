import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logo from '../../assets/logo.svg'
import { Root, Trigger } from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  function closeModal(value: boolean) {
    setOpen(value)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Root open={open} onOpenChange={closeModal}>
          <Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Trigger>

          <NewTransactionModal onCloseModal={closeModal} />
        </Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
