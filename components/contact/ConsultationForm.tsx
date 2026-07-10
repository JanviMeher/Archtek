"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import {
  budgetRanges,
  configurations,
  possessionStatuses,
  projectStatuses,
} from "@/data/site";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent-light/30 p-8 text-center">
        <h3 className="text-xl">Thank you for booking</h3>
        <p className="mt-3 text-muted">
          A dedicated ARCHTEK expert will reach out within one business day.
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
        label="Contact Number"
        name="phone"
        type="tel"
        required
        placeholder="+91 XXXXX XXXXX"
      />
      <FormField
        label="Project Status"
        name="projectStatus"
        type="select"
        required
        options={projectStatuses}
      />
      <FormField
        label="Estimated Budget"
        name="budget"
        type="select"
        required
        options={budgetRanges}
      />
      <FormField
        label="Configuration"
        name="configuration"
        type="select"
        required
        options={configurations}
      />
      <FormField
        label="Carpet Area"
        name="carpetArea"
        required
        placeholder="e.g. 1,200 sq ft"
      />
      <FormField label="Address" name="address" required placeholder="Project location" />
      <FormField
        label="Possession Status"
        name="possession"
        type="select"
        required
        options={possessionStatuses}
      />
      <Button type="submit" size="lg">
        Book consultation
      </Button>
    </form>
  );
}
