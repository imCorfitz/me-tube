import { hasPermission } from '@/access/hasPermission'
import { amISubscribingToChannel } from '@/hooks/beforeReadChannels'
import type { CollectionConfig } from 'payload'

export const Channels: CollectionConfig = {
  slug: 'channels',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update: hasPermission,
  },
  hooks: {
    beforeRead: [amISubscribingToChannel],
  },
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'text',
      name: 'description',
    },
    {
      type: 'upload',
      relationTo: 'media',
      name: 'logo',
    },
    // We add these here as hidden to include in types and api response
    // We populate these value dynamically using before read hooks
    {
      name: 'subscribing',
      type: 'checkbox',
      access: {
        update: () => false,
        create: () => false,
      },
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'subscribers',
      type: 'number',
      access: {
        update: () => false,
        create: () => false,
      },
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],
}
