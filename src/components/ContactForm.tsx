import { useState } from "react";
import { useI18n } from "../i18n/Context";
import { toast } from "sonner";
import "./ContactForm.css";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulação do backend de email (ex: formspree)
    const promise = new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.promise(promise, {
      loading: t.contact.formSending,
      success: () => {
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
        return t.contact.formSuccess;
      },
      error: 'Error'
    });
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
        {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
      </button>
    </form>
  );
}
