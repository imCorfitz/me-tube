import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  fields: [
    {
      type: 'relationship',
      name: 'subscriber',
      relationTo: 'channels',
      admin: {
        description: 'The channel that is subscribing',
      },
    },
    {
      type: 'relationship',
      name: 'subscription',
      relationTo: 'channels',
      admin: {
        description: 'The channel that is being subscribed to',
      },
    },
  ],
}
