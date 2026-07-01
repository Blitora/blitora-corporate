import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Blitora Contact Form <hello@blitora.com>',
      to: ['asayyed@blitora.com'],
      replyTo: email,
      subject: `New contact from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D1B3E; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New message from blitora.com</h2>
          </div>
          <div style="background: #F5F6FA; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #718096; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 8px 0; color: #0D1B3E; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 8px 0; color: #0D1B3E; font-size: 15px;"><a href="mailto:${email}" style="color: #E8560A;">${email}</a></td>
              </tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td><td style="padding: 8px 0; color: #0D1B3E; font-size: 15px;">${company}</td></tr>` : ''}
              ${phone ? `<tr><td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td><td style="padding: 8px 0; color: #0D1B3E; font-size: 15px;">${phone}</td></tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #E0E3ED;">
              <div style="color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Message</div>
              <div style="color: #1A202C; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 32px; padding: 16px; background: #fff; border-radius: 8px; border: 1px solid #E0E3ED;">
              <p style="margin: 0; color: #718096; font-size: 12px;">Sent from blitora.com/contact · Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
