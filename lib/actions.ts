"use server";

import { contactFormSchema, type ContactFormData } from "./validations";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // TODO: In production, send email via service like Resend, SendGrid, etc.
    // For now, just log the data
    console.log("Contact form submission:", validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Failed to submit form" };
  }
}
