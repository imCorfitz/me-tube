import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'relationship',
      name: 'channel',
      relationTo: 'channels',
      admin: {
        position: 'sidebar',
      },
    },
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
      name: 'video',
    },
  ],
}
