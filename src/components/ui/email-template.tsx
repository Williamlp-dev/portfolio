type EmailTemplateProps = {
  name: string
  email: string
  subject: string
  message: string
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "2px solid #007bff",
          paddingBottom: "10px",
        }}
      >
        Nova Mensagem do Portfolio
      </h1>

      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#555", fontSize: "18px", marginBottom: "15px" }}>
          Detalhes do Contato:
        </h2>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            <strong>Nome:</strong> {name}
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            <strong>Email:</strong> {email}
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            <strong>Assunto:</strong> {subject}
          </p>
        </div>

        <h3 style={{ color: "#555", fontSize: "16px", marginBottom: "10px" }}>
          Mensagem:
        </h3>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #dee2e6",
            padding: "15px",
            borderRadius: "5px",
            lineHeight: "1.6",
          }}
        >
          {message.split("\n").map((line, index) => (
            <p
              key={`line-${index}-${line.slice(0, 10)}`}
              style={{ margin: "0 0 10px 0", fontSize: "14px" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
          fontSize: "12px",
          color: "#6c757d",
        }}
      >
        <p style={{ margin: "0" }}>
          Esta mensagem foi enviada através do formulário de contato do seu
          portfolio.
        </p>
      </div>
    </div>
  )
}
