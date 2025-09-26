import { Resend } from "resend"
import { EmailTemplate } from "@/components/ui/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "API key do Resend não configurada" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    const requiredFields = [name, email, subject, message]
    const hasEmptyField = requiredFields.some((field) => !field)

    if (hasEmptyField) {
      return Response.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["williamlp.dev@gmail.com"],
      subject: `Nova mensagem do portfolio: ${subject}`,
      react: EmailTemplate({ name, email, subject, message }),
      replyTo: email,
    })

    if (error) {
      return Response.json(
        {
          error: "Erro ao enviar mensagem",
          details: error,
          message: "Verifique a configuração do Resend",
        },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
      data,
    })
  } catch (error) {
    return Response.json(
      {
        error: "Erro interno do servidor",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    )
  }
}
