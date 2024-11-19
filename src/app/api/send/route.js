import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName, email, message } = await req.json();
    console.log(firstName);
    console.log(email);
    console.log(message);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ahsan.shah330@gmail.com"],
      subject: "Contact Email",
      react: EmailTemplate({
        firstName,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
