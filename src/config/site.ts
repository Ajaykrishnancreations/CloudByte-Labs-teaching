// Central place for business/contact configuration.
// Replace placeholder values with real, approved business data before launch.
export const siteConfig = {
  name: 'CloudByteLabs',
  domain: 'cloudbytelabs.com',
  tagline: 'Learn Technology From People Who Actually Build With It.',

  // Contact — sourced from env vars so this file never needs code changes.
  phone: import.meta.env.VITE_PHONE_NUMBER || '+916382124970',
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || '+91 63821 24970',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '916382124970',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@cloudbytelabs.com',

  // Placeholder business hours — replace with real hours when supplied.
  businessHours: 'Mon–Sat, 9:00 AM – 7:00 PM IST',

  address: 'Coimbatore, Tamil Nadu, India',

  social: {
    linkedin: 'https://linkedin.com/company/cloudbytelabs',
    instagram: 'https://instagram.com/cloudbytelabs',
    youtube: 'https://youtube.com/@cloudbytelabs',
  },

  whatsappMessage: "Hi CloudByteLabs, I'm interested in learning more about your courses.",
} as const

export const whatsappUrl = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telUrl = () => `tel:${siteConfig.phone}`
