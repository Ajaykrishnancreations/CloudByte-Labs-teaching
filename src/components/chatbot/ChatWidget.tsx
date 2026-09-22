import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Send, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getBotResponse, quickActions } from './chatbotKnowledge'
import { whatsappUrl, telUrl, siteConfig } from '../../config/site'

interface ChatMessage {
  id: string
  role: 'bot' | 'user'
  text: string
}

export default function ChatWidget() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greet', role: 'bot', text: t('chatbot.greeting') },
  ])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, thinking])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { id: `${Date.now()}-u`, role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setThinking(true)
    window.setTimeout(() => {
      const reply = getBotResponse(text)
      setMessages((prev) => [...prev, { id: `${Date.now()}-b`, role: 'bot', text: reply }])
      setThinking(false)
    }, 500)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-slate-950 sm:inset-auto sm:bottom-24 sm:right-4 sm:h-[560px] sm:w-[380px] sm:rounded-2xl sm:border sm:border-slate-200 sm:dark:border-white/10 sm:shadow-2xl md:right-6"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            role="dialog"
            aria-label="CloudByteLabs chat assistant"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-3 sm:rounded-t-2xl">
              <div>
                <p className="font-heading text-sm font-semibold text-white">CloudByte Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t('chatbot.online')}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Minimise chat"
                  className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <Minus size={18} />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-white dark:bg-slate-950 px-4 py-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'bot'
                      ? 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-100'
                      : 'ml-auto bg-gradient-to-br from-indigo-500 to-cyan-500 text-white'
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {thinking && (
                <div className="max-w-[70%] rounded-2xl bg-slate-100 dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-600 dark:text-slate-400">
                  {t('chatbot.thinking')}
                </div>
              )}

              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickActions.map((qa) => (
                    <button
                      key={qa.key}
                      onClick={() => send(qa.label)}
                      className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-300"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20"
                >
                  {t('common.whatsapp')}
                </a>
                <a
                  href={telUrl()}
                  className="rounded-full bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/20"
                >
                  {t('common.call')} · {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-3 sm:rounded-b-2xl"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chatbot.placeholder') ?? ''}
                className="flex-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white transition hover:opacity-90"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 md:bottom-6 md:right-6"
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  )
}
