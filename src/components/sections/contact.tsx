"use client"

import { motion } from "framer-motion"
import { CheckCircle, Mail, Send, User } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section className="relative overflow-hidden py-20" id="contact">
      <div className="container relative z-10 mx-auto px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-3xl text-transparent md:text-4xl lg:text-5xl">
              Vamos Conversar?
            </h2>

            <motion.div
              className="mx-auto mb-8 h-1 w-32 rounded-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ width: "100%" }}
            />

            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed md:text-xl">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Entre em contato!
            </p>
          </motion.div>

          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="rounded-2xl border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <motion.h3
                className="mb-6 flex items-center gap-2 font-semibold text-2xl"
                initial={{ x: -20, opacity: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileInView={{ rotate: 0, scale: 1 }}
                >
                  <Send className="h-6 w-6 text-primary" />
                </motion.div>
                Envie uma Mensagem
              </motion.h3>

              {isSubmitted ? (
                <div className="fade-in-50 scale-in-95 animate-in py-12 text-center duration-300">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h4 className="mb-2 font-semibold text-xl">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Retornarei em breve!
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="name">
                        Nome *
                      </label>
                      <div className="relative">
                        <User className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                        <input
                          className="w-full rounded-md border px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          id="name"
                          name="name"
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                          required
                          type="text"
                          value={formData.name}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-medium text-sm" htmlFor="email">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                        <input
                          className="w-full rounded-md border px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          id="email"
                          name="email"
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                          type="email"
                          value={formData.email}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium text-sm" htmlFor="subject">
                      Assunto *
                    </label>
                    <input
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="subject"
                      name="subject"
                      onChange={handleInputChange}
                      placeholder="Sobre o que você gostaria de conversar?"
                      required
                      type="text"
                      value={formData.subject}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium text-sm" htmlFor="message">
                      Mensagem *
                    </label>
                    <textarea
                      className="w-full resize-none rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="message"
                      name="message"
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto ou ideia..."
                      required
                      rows={5}
                      value={formData.message}
                    />
                  </div>

                  <motion.button
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 disabled:opacity-50"
                    disabled={isSubmitting}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <motion.div
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
