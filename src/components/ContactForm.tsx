"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactIntro, projectTypes, budgetRanges } from "@/content/contact";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// TODO: connect to backend / form service (API route, email provider, or CRM
// webhook). This stub simulates network latency and always succeeds — no
// data leaves the browser.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- signature kept for the future real integration
async function submitInquiry(values: FormValues): Promise<{ ok: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please tell us a little about your project.";
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const result = await submitInquiry(values);
      if (!result.ok) throw new Error("Submission failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-card border border-border bg-surface p-10 text-center shadow-soft"
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Thanks — your inquiry is in.</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          This is a demo submission, so nothing was sent yet. Once the form is connected, our team will get back to you.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 min-h-11 rounded-pill border border-border px-5 text-sm font-semibold hover:bg-surface-alt"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field label="Interested In" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select a product</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget Range" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      {status === "error" ? (
        <div role="alert" className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your inquiry. Please try again.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-pill bg-brand-solid px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-solid-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {status === "loading" ? "Sending…" : contactIntro.submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label} {required ? <span className="text-brand">*</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full min-h-11 rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
    hasError ? "border-red-400" : "border-border"
  );
}
