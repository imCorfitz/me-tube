import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  fields: [
    {
      type: 'relationship',
      name: 'commenter',
      relationTo: 'channels',
    },
    {
      type: 'text',
      name: 'comment',
    },
    {
      type: 'relationship',
      relationTo: 'videos',
      name: 'video',
    },
  ],
}
