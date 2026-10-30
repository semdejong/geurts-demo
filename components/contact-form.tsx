"use client";

import { useState } from "react";
import Link from "next/link";
import { content } from "@/content";

type Errors = Partial<Record<"naam" | "email" | "telefoon" | "privacy", string>>;

export function ContactForm() {
  const { company } = content;
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "");
    const email = String(data.get("email") ?? "");
    const telefoon = String(data.get("telefoon") ?? "");
    const next: Errors = {};
    if (!naam.trim()) next.naam = "Vul uw naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (telefoon.replace(/\D/g, "").length < 8) next.telefoon = "Vul uw telefoonnummer in.";
    if (data.get("privacy") !== "ja") next.privacy = "Vink de privacyverklaring aan.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  if (done) {
    return (
      <div role="status" data-section="bevestiging" className="border-[3px] border-navy p-5">
        <h2 className="text-[2rem]">Uw bericht is hier niet verzonden.</h2>
        <p className="mt-4 max-w-[68ch]">
          Dit is een conceptsite. Er gaat geen e-mail weg en er wordt niets opgeslagen. Bel{" "}
          <a href={company.phoneTel} data-cta="bellen" className="underline decoration-2 underline-offset-4">
            {company.phoneDisplay}
          </a>{" "}
          of mail{" "}
          <a href={`mailto:${company.email}`} data-cta="mailen" className="underline decoration-2 underline-offset-4">
            {company.email}
          </a>
          . Maikel neemt contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate data-section="contactformulier" className="grid gap-4">
      <Field label="Naam" name="naam" required error={errors.naam} autoComplete="name" />
      <Field label="E-mail" name="email" type="email" required error={errors.email} autoComplete="email" />
      <Field label="Telefoon" name="telefoon" type="tel" required error={errors.telefoon} autoComplete="tel" />
      <label className="grid gap-1" htmlFor="toelichting">
        <span>Toelichting</span>
        <textarea id="toelichting" name="toelichting" className="field" />
      </label>
      <label className="flex min-h-11 items-start gap-3">
        <input type="checkbox" name="privacy" value="ja" className="mt-1.5 h-5 w-5 accent-navy" />
        <span>
          Ik heb de{" "}
          <Link href="/privacy" className="underline decoration-2 underline-offset-4">
            privacyverklaring
          </Link>{" "}
          gelezen.
          {errors.privacy ? <span className="mt-1 block font-mono text-sm text-navy">{errors.privacy}</span> : null}
        </span>
      </label>
      <button type="submit" data-cta="offerte" className="btn btn-navy w-full sm:w-auto">
        Verstuur uw vraag
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-fout`;
  return (
    <label className="grid gap-1" htmlFor={name}>
      <span>
        {label}
        {required ? " (verplicht)" : ""}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="field"
      />
      {error ? (
        <span id={errorId} className="font-mono text-sm text-navy">
          {error}
        </span>
      ) : null}
    </label>
  );
}
