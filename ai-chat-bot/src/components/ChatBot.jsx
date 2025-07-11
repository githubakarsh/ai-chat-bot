import { useState } from 'react'
import { fetchBotReply } from '../api/chatService'
import './ChatBot.css'

function ChatBot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((msgs) => [...msgs, { from: 'user', text }])
    const reply = await fetchBotReply(text)
    setMessages((msgs) => [...msgs, { from: 'bot', text: reply }])
  }

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatBot
