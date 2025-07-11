import responses from './responses.json'

export function fetchBotReply(message) {
  const entry = responses.find(
    (r) => r.user.toLowerCase() === message.toLowerCase(),
  )
  const reply = entry ? entry.bot : "I'm not sure how to respond to that."
  return new Promise((resolve) => {
    setTimeout(() => resolve(reply), 500)
  })
}
