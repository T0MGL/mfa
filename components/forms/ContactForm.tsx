"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Confetti from "react-confetti";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { COUNTRIES } from "@/lib/constants";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      t("emailSubject", { company: data.company, country: data.country })
    );

    const body = encodeURIComponent(
      [
        `${t("emailName")}: ${data.name}`,
        `${t("emailEmail")}: ${data.email}`,
        `${t("emailCompany")}: ${data.company}`,
        `${t("emailCountry")}: ${data.country}`,
        "",
        `${t("emailMessage")}:`,
        data.message,
      ].join("\n")
    );

    window.location.href = `mailto:juliansandt@gmail.com?subject=${subject}&body=${body}`;

    setSubmitStatus({ type: "success", message: t("success") });
    setShowConfetti(true);
    reset();
    setIsSubmitting(false);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <Card variant="elevated" className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label={t("name")}
            {...register("name")}
            error={errors.name?.message}
            placeholder="John Doe"
          />

          <Input
            label={t("email")}
            type="email"
            {...register("email")}
            error={errors.email?.message}
            placeholder="john@company.com"
          />

          <Input
            label={t("company")}
            {...register("company")}
            error={errors.company?.message}
            placeholder="Your Company Name"
          />

          <Select
            label={t("country")}
            {...register("country")}
            error={errors.country?.message}
            options={COUNTRIES}
          />

          <Textarea
            label={t("message")}
            {...register("message")}
            error={errors.message?.message}
            placeholder="Tell us about your project..."
            rows={6}
          />

          {submitStatus.type && (
            <div
              className={`rounded-lg p-4 ${
                submitStatus.type === "success"
                  ? "bg-mercosur-green/10 text-mercosur-green"
                  : "bg-paraguay-red/10 text-paraguay-red"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : t("submit")}
          </Button>
        </form>
      </Card>
    </>
  );
}
