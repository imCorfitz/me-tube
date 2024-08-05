import { CollectionBeforeReadHook } from 'payload'

export const amISubscribingToChannel: CollectionBeforeReadHook = async ({
  req,
  req: { payload },
  doc,
}) => {
  // check if I am subscribing to the channel
  const subscribing = await payload.db.findOne({
    collection: 'subscribers',
    req,
    where: {
      // subscriber: currentChannel.id, // ! Challenge: How do we get the current channel?
      subscription: doc.id,
    },
  })

  doc.subscribing = !!subscribing?.id

  // Check number of subscribers
  // ? Question: Is this the best way to get the number of subscribers?
  const subscribers = await payload.db.count({
    collection: 'subscribers',
    req,
    where: {
      subscription: doc.id,
    },
  })
  doc.subscribers = subscribers.totalDocs

  return doc
}
