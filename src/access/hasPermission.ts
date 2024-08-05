import { hasChannelPermission, isAdmin } from '@/utils'
import { Access } from 'payload'

export const hasPermission: Access = async ({ req: { user }, id }) => {
  // allow if admin
  if (isAdmin(user)) return true

  return id ? hasChannelPermission(user, id) : false
}
