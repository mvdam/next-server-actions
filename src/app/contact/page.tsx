import { Header } from '@/components/header'
import { prisma } from '@/prisma-client'
import { saveContactFormToDb } from '@/utils/db/in-memory-db'
import { NextResponse } from 'next/server'

export default async function Contact() {
  async function saveContactForm(data: FormData) {
    'use server'

    const name = data.get('name')?.toString() ?? ''
    const email = data.get('email')?.toString() ?? ''
    const message = data.get('message')?.toString() ?? ''

    const result = await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    })

    console.log({ result })
  }

  const forms = await prisma.contactForm.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      {forms.map((f) => (
        <div key={f.id}>{JSON.stringify(f)}</div>
      ))}
      <h1>Contact</h1>
      <form action={saveContactForm}>
        <div className="pb-5">
          <label htmlFor="name" className="pr-5">
            Name:
          </label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="pb-5">
          <label htmlFor="email" className="pr-5">
            E-mail:
          </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="pb-5">
          <label htmlFor="message" className="pr-5">
            Message:
          </label>
          <textarea id="message" cols={50} rows={5} name="message"></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  )
}
