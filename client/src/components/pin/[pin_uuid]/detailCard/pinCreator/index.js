import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { setAsyncV, setSyncV, useAsyncV } from 'use-sync-v'

export const PinCreatorComponent = () => {
  const auth = useAsyncV('auth', { initialState: { loading: true } })
  const pinDetail = useAsyncV('pinDetail')
  const isFollower = useAsyncV('isFollower')
  const creator_uuid = pinDetail?.data?.users?.uuid
  const user_uuid = auth?.data?.user?.id

  useEffect(() => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    setAsyncV('isFollower', async () => {
      const response = await supabase
        .from('users_followers')
        .select('count')
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .throwOnError()
      const data = response.data[0].count === 0 ? false : true
      return data
    })
  }, [pinDetail.data, creator_uuid, user_uuid])

  const followHandler = () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    setAsyncV('followUser', async () => {
      const response = await supabase
        .from('users_followers')
        .upsert({
          'user_uuid': creator_uuid,
          'follower_uuid': user_uuid
        })
        .select()
        .throwOnError()
      const data = response.data[0]
      setSyncV('isFollower.data', true)
      setSyncV('pinDetail.data.users.users_followers[0].count', p => p + 1)
      return data
    })
  }

  const unfollowHandler = () => {
    if (!pinDetail.data || !creator_uuid || !user_uuid) return
    setAsyncV('unfollowUser', async () => {
      const response = await supabase
        .from('users_followers')
        .delete()
        .eq('user_uuid', creator_uuid)
        .eq('follower_uuid', user_uuid)
        .select()
        .throwOnError()
      const data = response
      setSyncV('isFollower.data', false)
      setSyncV('pinDetail.data.users.users_followers[0].count', p => p - 1)
      return data
    })
  }

  return (
    <div className="flex gap-3 w-full flex-wrap">
      {pinDetail.data && <Image
        src={pinDetail.data.users.profile_picture_url}
        alt="pfp"
        height={0}
        width={0}
        sizes="100vw"
        className="w-12 aspect-square rounded-full"
      />}
      {pinDetail.loading &&
                <Skeleton />
      }
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
        {isFollower.data
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