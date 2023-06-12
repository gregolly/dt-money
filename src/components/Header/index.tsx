import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logo from '../../assets/logo.svg'
import { Root, Trigger } from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Root>
          <Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Trigger>

          <NewTransactionModal />
        </Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
