import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, phone, subject, message } = await request.json()

    // Server-side validation
    if (!name?.trim() || !phone?.trim() || !subject?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return Response.json(
        { error: 'يجب أن تكون الرسالة 10 أحرف على الأقل' },
        { status: 400 }
      )
    }

    // Create transporter with SMTP config
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Build the email
    const mailOptions = {
      from: `"استفسار جديد من الموقع" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: undefined,
      subject: `رسالة جديدة: ${subject}`,
      html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1px solid #e8e8e8;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0f1724 0%, #1a2b42 50%, #243750 100%); padding: 40px 30px; text-align: center;">
            <div style="margin-bottom: 16px;">
              <span style="display: inline-block; width: 56px; height: 56px; background: rgba(201,168,76,0.15); border-radius: 50%; line-height: 56px; font-size: 26px;">✉️</span>
            </div>
            <h1 style="color: #c9a84c; margin: 0 0 8px 0; font-size: 22px; font-weight: 700; letter-spacing: 0.3px;">رسالة جديدة من الموقع</h1>
            <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 13px;">نموذج التواصل &mdash; شركة إبراهيم بن عبدالعزيز السيف للمحاماة والاستشارات القانونية</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 30px 24px;">

            <!-- Info Cards -->
            <div style="margin-bottom: 12px; padding: 16px 20px; background: #f7f8fa; border-radius: 10px; border-right: 4px solid #c9a84c;">
              <span style="display: block; font-size: 11px; color: #8a8f98; text-transform: uppercase; margin-bottom: 4px; font-weight: 600;">الاسم</span>
              <span style="font-size: 16px; color: #1a2332; font-weight: 600;">${name}</span>
            </div>

            <div style="margin-bottom: 12px; padding: 16px 20px; background: #f7f8fa; border-radius: 10px; border-right: 4px solid #c9a84c;">
              <span style="display: block; font-size: 11px; color: #8a8f98; text-transform: uppercase; margin-bottom: 4px; font-weight: 600;">رقم الهاتف</span>
              <span style="font-size: 16px; color: #1a2332; font-weight: 600;" dir="ltr">${phone}</span>
            </div>

            <div style="margin-bottom: 24px; padding: 16px 20px; background: #f7f8fa; border-radius: 10px; border-right: 4px solid #c9a84c;">
              <span style="display: block; font-size: 11px; color: #8a8f98; text-transform: uppercase; margin-bottom: 4px; font-weight: 600;">الموضوع</span>
              <span style="font-size: 16px; color: #1a2332; font-weight: 600;">${subject}</span>
            </div>

            <!-- Message -->
            <div style="padding: 22px 24px; background: #fafbfc; border-radius: 12px; border: 1px solid #eaedf0;">
              <h3 style="margin: 0 0 12px 0; color: #1a2332; font-size: 14px; font-weight: 700; display: flex; align-items: center;">
                <span style="display: inline-block; width: 6px; height: 6px; background: #c9a84c; border-radius: 50%; margin-left: 8px;"></span>
                الرسالة
              </h3>
              <p style="margin: 0; color: #3d4551; line-height: 1.9; font-size: 15px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 30px; background: #f7f8fa; border-top: 1px solid #eaedf0; text-align: center;">
            <p style="margin: 0 0 4px 0; color: #a0a5ad; font-size: 12px;">
              تم الإرسال بتاريخ ${new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' })}
            </p>
            <p style="margin: 0; color: #c9a84c; font-size: 11px; font-weight: 600; letter-spacing: 0.5px;">شركة إبراهيم بن عبدالعزيز السيف للمحاماة والاستشارات القانونية</p>
          </div>

        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json(
      { error: 'حدث خطأ في إرسال الرسالة' },
      { status: 500 }
    )
  }
}
