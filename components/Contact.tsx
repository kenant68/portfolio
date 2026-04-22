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
    <section className="py-24 px-4" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-pixel text-lg text-[#FF2D78] mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="border-2 border-[#111111] p-4 font-sans text-[#111111] bg-white outline-none focus:border-[#FF2D78] transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-2 border-[#111111] p-4 font-sans text-[#111111] bg-white outline-none focus:border-[#FF2D78] transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="border-2 border-[#111111] p-4 font-sans text-[#111111] bg-white outline-none focus:border-[#FF2D78] transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-[#F9FF00] text-[#111111] border-2 border-[#111111] p-4 font-pixel text-xs hover:bg-[#FF2D78] hover:text-white transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
