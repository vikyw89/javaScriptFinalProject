import { Page } from '@/common/layout/page'
import { DetailCardComponent } from '@/components/pin/[pin_uuid]/detailCard'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePin } from '@/lib/hooks/usePin'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr/immutable'

const PinDetail = () => {
  const auth = useAuth()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinData = usePin(pin_uuid)
  console.log("🚀 ~ file: index.js:14 ~ PinDetail ~ pinData:", pinData.data)

  return (
    <Page>
      {auth.data && pin_uuid && pinData &&
        <DetailCardComponent />
      }
    </Page>
  )
}

export default PinDetail