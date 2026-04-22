'use client'

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:tekbask8@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-24 px-8 md:px-16" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl text-ink font-normal tracking-[0.12em] uppercase mb-16">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-2xl">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-transparent border-b border-ink text-ink font-sans py-3 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-transparent border-b border-ink text-ink font-sans py-3 outline-none focus:border-amber placeholder:text-ink/30 transition-colors"
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="bg-transparent border-b border-ink text-ink font-sans py-3 outline-none focus:border-amber placeholder:text-ink/30 transition-colors resize-none"
          />
          <button
            type="submit"
            className="self-start bg-burgundy text-cream font-serif italic text-lg px-10 py-4 hover:bg-ink transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
