import { useState } from "react";
import { useI18n } from "../i18n/Context";
import "./ContactForm.css";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulação do backend de email (ex: formspree)
    setTimeout(() => {
      setStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" required placeholder={t.contact.formName} />
      </div>
      <div className="form-group">
        <input type="email" name="email" required placeholder={t.contact.formEmail} />
      </div>
      <div className="form-group">
        <textarea name="message" required rows={4} placeholder={t.contact.formMessage}></textarea>
      </div>
      <button type="submit" className="btn-primary form-submit" disabled={status === "sending"}>
        {status === "sending" ? t.contact.formSending : status === "success" ? t.contact.formSuccess : t.contact.formSubmit}
      </button>
    </form>
  );
}
