"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

export function CareersAccordion() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="careers" className="scroll-mt-28 rounded-lg border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between p-6 text-left md:p-8"
      >
        <div>
          <p className="label-caps mb-1">Careers</p>
          <h3 className="text-xl">Join Archtek Design Studio</h3>
        </div>
        <span
          className={cn(
            "text-2xl text-accent-dark transition-transform duration-200",
            open && "rotate-45"
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div className="border-t border-border px-6 pb-6 md:px-8 md:pb-8">
          {submitted ? (
            <div className="py-6 text-center">
              <p className="font-medium">Application received</p>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll review your profile and be in touch if there&apos;s a fit.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted">
                We&apos;re looking for architects and interior designers passionate about
                craft and collaboration. Upload your resume and portfolio (PDF, max 10MB).
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Name" name="careerName" required />
                  <FormField label="Email" name="careerEmail" type="email" required />
                </div>
                <FormField label="Phone" name="careerPhone" type="tel" required />
                <FormField
                  label="Role applying for"
                  name="careerRole"
                  required
                  placeholder="e.g. Architect, Interior Designer"
                />
                <FormField
                  label="Cover note"
                  name="careerMessage"
                  type="textarea"
                  rows={4}
                  placeholder="Brief introduction and why you'd like to join Archtek"
                />
                <FormField
                  label="Resume & portfolio"
                  name="careerFile"
                  type="file"
                  required
                  accept=".pdf"
                />
                <Button type="submit">Submit application</Button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
