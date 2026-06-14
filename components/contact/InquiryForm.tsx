"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { budgetRanges, projectTypes } from "@/data/site";

function InquiryFormInner() {
  const searchParams = useSearchParams();
  const projectPrefill = searchParams.get("project") ?? "";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent-light/30 p-8 text-center">
        <h3 className="text-xl">Thank you for reaching out</h3>
        <p className="mt-3 text-muted">
          We&apos;ve received your inquiry and will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Name" name="name" required placeholder="Your full name" />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        required
        placeholder="+91 XXXXX XXXXX"
      />
      <FormField
        label="Project type"
        name="projectType"
        type="select"
        required
        options={projectTypes}
      />
      <FormField
        label="Location"
        name="location"
        required
        placeholder="City or site location"
      />
      <FormField
        label="Budget range"
        name="budget"
        type="select"
        optional
        options={budgetRanges}
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        required
        placeholder="Tell us about your project, timeline, and any reference projects..."
        rows={6}
      />
      {projectPrefill && (
        <input type="hidden" name="referenceProject" value={projectPrefill} />
      )}
      {projectPrefill && (
        <p className="text-sm text-sage">
          Referencing project: <span className="font-medium text-foreground">{projectPrefill}</span>
        </p>
      )}
      <FormField
        label="Attach brief (PDF, optional)"
        name="brief"
        type="file"
        optional
        accept=".pdf,.doc,.docx"
      />
      <Button type="submit" size="lg">
        Send inquiry
      </Button>
    </form>
  );
}

export function InquiryForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-border/50" />}>
      <InquiryFormInner />
    </Suspense>
  );
}
