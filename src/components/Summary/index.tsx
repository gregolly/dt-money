import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from './styles'
import { formatPrice } from '../../utils/formatPrice'
import { useSummary } from '../../hooks/useSummary'

// interface TransactionProps {
//   transactions: Transaction[]
// }

// { transactions }: TransactionProps
// console.log(transactions)

export function Summary() {
  const summary = useSummary()

  const formattedIncome = formatPrice(summary.income)
  const formattedOutcome = formatPrice(summary.outcome)
  const formattedTotal = formatPrice(summary.total)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{formattedIncome}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formattedOutcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{formattedTotal}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
