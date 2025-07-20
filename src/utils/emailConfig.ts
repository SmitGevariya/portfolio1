// EmailJS Configuration Guide
// 
// To make the contact form work, you need to:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values in Contact.tsx
//
// Example EmailJS template variables:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email
// - {{subject}} - email subject
// - {{message}} - email message
// - {{to_email}} - your email address
//
// Template example:
// Subject: New Contact Form Message: {{subject}}
// 
// You have received a new message from your portfolio contact form:
//
// Name: {{from_name}}
// Email: {{from_email}}
// Subject: {{subject}}
//
// Message:
// {{message}}
//
// Reply to: {{from_email}}

export const emailConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'service_your_service_id',
  templateId: 'template_your_template_id', 
  publicKey: 'your_public_key'
};