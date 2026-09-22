import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { whatsappUrl, telUrl } from '../../config/site'

// WhatsApp + Call floating stack. Sits above the chat bubble (see ChatWidget),
// which occupies the bottom-right corner itself.
export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 md:bottom-28 md:right-6"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
      >
        <MessageCircle size={20} />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.85 }}
        href={telUrl()}
        aria-label="Call CloudByteLabs"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  )
}
