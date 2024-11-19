// components/email-template.jsx (or .tsx if using TypeScript)

import React from "react";

export const EmailTemplate = ({ firstName, email, message }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Hi {firstName},</h2>
      <p>Thank you for reaching out to us. Here’s a summary of your details:</p>

      <ul>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Message:</strong> {message}
        </li>
      </ul>

      <p>
        We will get back to you shortly to assist you with your IT and security
        needs.
      </p>
      <p>
        Best regards,
        <br />
        Ahsan Shah
      </p>
    </div>
  );
};
