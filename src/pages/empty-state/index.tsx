import { EmptyState } from '@/components/empty-state/empty-state'
import { getLayout } from '@/components/layout/layout'

const EmptyStatePage = () => {
  return (
    <>
      <EmptyState />
    </>
  )
}

EmptyStatePage.getLayout = getLayout
export default EmptyStatePage
