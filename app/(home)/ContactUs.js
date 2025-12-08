"use client"

import { useState } from 'react'

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validatePhone = (phone) => {
    const re = /^[+]?[0-9]{10,15}$/
    return re.test(phone.replace(/\s/g, ''))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'الموضوع مطلوب'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'يجب أن تكون الرسالة 10 أحرف على الأقل'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async () => {
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send to n8n webhook
      const response = await fetch('https://workflows.ibrlabs.dev/webhook/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          subject: '',
          message: ''
        })

        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory via-offwhite to-ivory py-32 px-4 sm:px-6 lg:px-8" dir="rtl" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-[fadeInUp_1s_ease-out_forwards]">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            تواصل معنا
          </h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتكم وتقديم الاستشارات القانونية المتخصصة
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mt-8"></div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold/20 animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0">
          <div className="p-8 md:p-12 bg-gradient-to-br from-white to-gold/5 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-gold to-navy"></div>

            <div className="space-y-8" onKeyPress={handleKeyPress}>
              {/* Name Field */}
              <div className="transform transition-all duration-300">
                <label htmlFor="name" className="block text-sm font-bold text-navy mb-2 tracking-wide">
                  الاسم الكامل <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-offwhite border-2 rounded-xl text-navy placeholder-navy/40 
                    transition-all duration-300 ease-in-out font-medium
                    focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold focus:bg-white focus:scale-[1.01]
                    hover:border-gold/50 hover:bg-white hover:shadow-md
                    ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 animate-pulse">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="transform transition-all duration-300">
                <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2 tracking-wide">
                  رقم الهاتف <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-offwhite border-2 rounded-xl text-navy placeholder-navy/40 
                    transition-all duration-300 ease-in-out font-medium
                    focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold focus:bg-white focus:scale-[1.01]
                    hover:border-gold/50 hover:bg-white hover:shadow-md
                    ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="+966 50 123 4567"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 animate-pulse">{errors.phone}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="transform transition-all duration-300">
                <label htmlFor="subject" className="block text-sm font-bold text-navy mb-2 tracking-wide">
                  الموضوع <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-offwhite border-2 rounded-xl text-navy placeholder-navy/40 
                    transition-all duration-300 ease-in-out font-medium
                    focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold focus:bg-white focus:scale-[1.01]
                    hover:border-gold/50 hover:bg-white hover:shadow-md
                    ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="موضوع الاستشارة أو الاستفسار"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 animate-pulse">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="transform transition-all duration-300">
                <label htmlFor="message" className="block text-sm font-bold text-navy mb-2 tracking-wide">
                  الرسالة <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-offwhite border-2 rounded-xl text-navy placeholder-navy/40 
                    transition-all duration-300 ease-in-out resize-none font-medium
                    focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold focus:bg-white focus:scale-[1.01]
                    hover:border-gold/50 hover:bg-white hover:shadow-md
                    ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                  placeholder="اكتب رسالتك هنا..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 animate-pulse">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-5 px-8 rounded-xl font-bold text-lg text-white
                    transition-all duration-300 ease-in-out tracking-wide cursor-pointer
                    transform hover:scale-[1.01] active:scale-[0.99]
                    shadow-xl hover:shadow-2xl overflow-hidden relative group
                    ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-navy via-navy-light to-navy hover:from-gold hover:via-gold-light hover:to-gold'
                    }
                    focus:outline-none focus:ring-4 focus:ring-gold/30`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        جاري الإرسال...
                      </>
                    ) : (
                      'إرسال الرسالة'
                    )}
                  </span>
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-5 bg-green-50 border-2 border-green-500 rounded-xl animate-[fadeInUp_0.5s_ease-out_forwards]">
                  <div className="flex items-center gap-3">
                    <svg className="w-7 h-7 text-green-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-900 font-bold text-base">
                      تم إرسال رسالتك بنجاح! سنتواصل معك قريباً
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-6 p-5 bg-red-50 border-2 border-red-500 rounded-xl animate-[fadeInUp_0.5s_ease-out_forwards]">
                  <div className="flex items-center gap-3">
                    <svg className="w-7 h-7 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-900 font-bold text-base">
                      عذراً، حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}