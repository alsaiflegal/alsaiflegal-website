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
            from: `"موقع الصيف للمحاماة" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: undefined,
            subject: `رسالة جديدة: ${subject}`,
            html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a2332 0%, #2a3a4e 100%); padding: 30px; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 24px;">رسالة جديدة من الموقع</h1>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; background: #e9ecef; border-radius: 8px 8px 0 0; font-weight: bold; color: #1a2332; width: 120px;">الاسم</td>
                <td style="padding: 12px 16px; background: #e9ecef; border-radius: 8px 8px 0 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #1a2332;">الهاتف</td>
                <td style="padding: 12px 16px; color: #333;" dir="ltr">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background: #e9ecef; font-weight: bold; color: #1a2332;">الموضوع</td>
                <td style="padding: 12px 16px; background: #e9ecef; color: #333;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #dee2e6;">
              <h3 style="margin: 0 0 10px 0; color: #1a2332; font-size: 16px;">الرسالة</h3>
              <p style="margin: 0; color: #333; line-height: 1.8; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #888; font-size: 12px; text-align: center;">
              تم الإرسال بتاريخ ${new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' })}
            </p>
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
