import { ChannelRole } from '@/config'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      type: 'array',
      name: 'channels',
      fields: [
        {
          name: 'role',
          type: 'select',
          required: true,
          defaultValue: ChannelRole.EDITOR,
          options: [
            {
              label: 'Owner',
              value: ChannelRole.OWNER,
            },
            {
              label: 'Admin',
              value: ChannelRole.ADMIN,
            },
            {
              label: 'Editor',
              value: ChannelRole.EDITOR,
            },
            { label: 'Analyst', value: ChannelRole.ANALYST },
          ],
        },
        {
          name: 'channel',
          type: 'relationship',
          required: true,
          relationTo: 'channels',
          admin: {
            description: 'This field sets which channel this user has access to.',
          },
        },
      ],
    },
  ],
}
