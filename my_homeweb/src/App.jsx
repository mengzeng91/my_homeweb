import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '你好！我是蒙大大的数字分身。你可以问我关于蒙大大的职业、项目或联系方式等问题。'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return
    
    // 添加用户消息
    setMessages([...messages, { role: 'user', content: input }])
    
    // 模拟数字分身回复
    setTimeout(() => {
      let response = ''
      if (input.includes('做什么')) {
        response = '蒙大大现在主要在做文旅策划、文旅AIGC和AI编程相关工作。'
      } else if (input.includes('作品')) {
        response = '蒙大大在文旅行业有丰富的项目经验，擅长文旅策划和AIGC应用。'
      } else if (input.includes('联系')) {
        response = '你可以通过邮件或社交媒体联系蒙大大，具体联系方式可以在个人信息区找到。'
      } else {
        response = '蒙大大是一位从业10+年的互联网产品经理，目前投身文旅行业，华师心理学研究生在读中。'
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 1000)
    
    setInput('')
  }

  const handleQuickQuestion = (question) => {
    setInput(question)
    handleSend()
  }

  return (
    <div className="app">
      <div className="container">
        {/* 左侧个人信息区 */}
        <section className="profile">
          <div className="badge">
            <span className="badge-text">产品经理</span>
            <span className="badge-followers">10+ 年经验</span>
          </div>
          
          <div className="avatar">
            <div className="avatar-placeholder">蒙</div>
          </div>
          
          <h1>蒙大大</h1>
          <p className="title">文旅策划师 / 产品经理 / 华师心理学研究生</p>
          
          <div className="tags">
            <span className="tag">文旅策划</span>
            <span className="tag">AIGC</span>
            <span className="tag">AI编程</span>
            <span className="tag">产品管理</span>
          </div>
          
          <div className="current-focus">
            <h3>当前关注</h3>
            <ul>
              <li>文旅行业AIGC应用</li>
              <li>AI编程技术研究</li>
              <li>华师心理学研究生在读</li>
              <li>文旅策划项目实践</li>
            </ul>
          </div>
        </section>

        {/* 右侧数字分身聊天区 */}
        <section className="chat-section">
          <div className="chat-header">
            <h2>数字分身聊天</h2>
          </div>
          
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="message-avatar">
                      <div className="avatar-small">蒙</div>
                    </div>
                  )}
                  <div className="message-content">{msg.content}</div>
                </div>
              ))}
            </div>
            
            <div className="quick-questions">
              <button onClick={() => handleQuickQuestion('你现在在做什么？')}>Q1</button>
              <button onClick={() => handleQuickQuestion('你有哪些作品？')}>Q2</button>
              <button onClick={() => handleQuickQuestion('怎么联系你？')}>Q3</button>
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
              />
              <button onClick={handleSend} className="send-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            
            <div className="chat-footer">
              <p>Built with ❤️ by 蒙大大的数字分身</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App