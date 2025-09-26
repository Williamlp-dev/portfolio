"use client"

import { AnimatePresence, motion } from "framer-motion"
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

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        const errorMessage =
          result.details || result.error || "Erro ao enviar mensagem"
        throw new Error(errorMessage)
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      const CLEAR_FORM_DELAY = 2000
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, CLEAR_FORM_DELAY)
    } catch (error) {
      setIsSubmitting(false)
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente."
      alert(errorMessage)
    }
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
              className="flex h-[600px] flex-col justify-center rounded-2xl border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
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

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center text-center"
                    exit={{ opacity: 0, scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    key="success"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ scale: 1 }}
                      className="mb-8"
                      exit={{ scale: 0.8 }}
                      initial={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
                    </motion.div>

                    <h4 className="mb-6 font-semibold text-3xl text-green-600">
                      Mensagem Enviada!
                    </h4>

                    <p className="max-w-md text-gray-600 text-xl">
                      Obrigado pelo contato. Retornarei em breve!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    animate={{ opacity: 1 }}
                    className="flex h-full flex-col justify-center space-y-6"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key="form"
                    onSubmit={handleSubmit}
                    transition={{ duration: 0.3 }}
                  >
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
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
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
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
