import { usePin } from '@/lib/hooks/usePin'
import { useUser } from '@/lib/hooks/useUser'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWRImmutable from 'swr/immutable'
import useSWRMutation from 'swr/mutation'

export const PinCreatorComponent = () => {
  const user = useUser()
  const router = useRouter()
  const { pin_uuid } = router.query
  const pinDetail = usePin(pin_uuid)
  const creator_uuid = pinDetail?.data?.users?.uuid
  const user_uuid = user?.data?.uuid
  const isFollower = useSWRImmutable(pin_uuid && creator_uuid && `api/user/${pin_uuid}/following/${creator_uuid}`, async () => {
    const response = await supabase
      .from('users_followers')
      .select('count')
      .eq('user_uuid', creator_uuid)
      .eq('follower_uuid', user_uuid)
      .throwOnError()
    const data = response.data[0].count === 0 ? false : true
    return data
  })
  const followAPI = useSWRMutation(`api/user/${pin_uuid}/following/${creator_uuid}`, async () => {
    const response = await supabase
      .from('users_followers')
      .upsert({
        'user_uuid': creator_uuid,
        'follower_uuid': user_uuid
      })
      .select()
      .throwOnError()
    const data = response.data[0]
    return data
  })
  const unfollowAPI = useSWRMutation(`api/user/${pin_uuid}/following/${creator_uuid}`, async () => {
    const response = await supabase
      .from('users_followers')
      .delete()
      .eq('user_uuid', creator_uuid)
      .eq('follower_uuid', user_uuid)
      .select()
      .throwOnError()
    const data = response
    return data
  })

  const followHandler = async () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    await followAPI.trigger()
    await pinDetail.mutate()
  }

  const unfollowHandler = async () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    await unfollowAPI.trigger()
    await pinDetail.mutate()
  }

  return (
    <div className="flex gap-3 w-full flex-wrap">
      {pinDetail.data &&
        <Image
          src={pinDetail.data.users.profile_picture_url}
          alt="pfp"
          height={0}
          width={0}
          sizes="100vw"
          className="w-12 aspect-square rounded-full"
        />}
      {pinDetail.data &&
        <div>
          <div className="font-bold">
            {pinDetail.data.users.username}
          </div>
          <div>
            {pinDetail.data.users.users_followers[0].count} followers
          </div>
        </div>
      }
      <div className="flex-1 text-right">
        {typeof isFollower.data === 'undefined'
          ?
          <button className="btn btn-primary loading text-primary-content rounded-btn max-sm:w-full">
            Loading
          </button>
          : isFollower.data
            ?
            <button className="btn btn-primary text-primary-content rounded-btn max-sm:w-full" onClick={unfollowHandler}>
              Following
            </button>
            :
            <button className="btn btn-primary text-primary-content rounded-btn max-sm:w-full" onClick={followHandler}>
              Follow
            </button>

        }
      </div>
    </div>
  )
}