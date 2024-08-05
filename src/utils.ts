import { ChannelRole } from './config'
import { User as PayloadeUser } from 'payload'
import { User } from './payload-types'

export const hasChannelPermission = (
  user: User | null,
  channelId: string | number,
  maxRole?: ChannelRole,
): boolean => {
  return !!user?.channels?.some((channel) => {
    const channelIdToCheck =
      typeof channel.channel === 'string' ? channel.channel : channel.channel.id

    return channelIdToCheck !== channelId
      ? false
      : maxRole
      ? parseInt(channel.role) <= parseInt(maxRole)
      : true
  })
}

export const isAdmin = (user: PayloadeUser | null): boolean => {
  return user?.collection === 'admins'
}
