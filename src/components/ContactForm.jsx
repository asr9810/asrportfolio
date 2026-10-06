import { useState } from "react";

// Web3Forms sends submissions straight to your email — no backend needed.
// Get a free access key at https://web3forms.com (takes ~30 seconds,
// just verify the email you want submissions sent to) and paste it below.
const WEB3FORMS_ACCESS_KEY = "764b3ca0-e4a1-4eb9-a381-9edeeabe46ab";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-sm border border-line bg-ink px-3 py-2 text-[14px] text-paper placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-6 text-center">
        <p className="font-mono text-[13px] text-accent">
          message sent — thanks, I'll get back to you soon
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      {/* honeypot — hidden from real users, trips up spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div>
        <label htmlFor="name" className="font-mono text-[12px] text-muted">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={`${inputClasses} mt-1`}
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-[12px] text-muted">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={`${inputClasses} mt-1`}
        />
      </div>

      <div>
        <label htmlFor="reason" className="font-mono text-[12px] text-muted">
          looking to
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue="Hire — full-time"
          className={`${inputClasses} mt-1`}
        >
          <option>Hire — full-time</option>
          <option>Hire — freelance / contract</option>
          <option>Just connecting</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[12px] text-muted">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you looking to build?"
          className={`${inputClasses} mt-1 resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent/20 disabled:opacity-50"
      >
        {status === "sending" ? "sending..." : "send message"}
      </button>

      {status === "error" && (
        <p className="font-mono text-[12px] text-accent2">
          something went wrong — try again, or email me directly below.
        </p>
      )}
    </form>
  );
}
