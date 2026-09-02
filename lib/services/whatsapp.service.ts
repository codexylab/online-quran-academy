/**
 * @file whatsapp.service.ts
 * @description Business logic service for WhatsApp link generation, message templates, and input sanitization.
 */

import { SITE_CONFIG } from '../config/site.config';
import { AdmissionFormData } from '../types/academy.types';

export class WhatsAppService {
  /**
   * Sanitizes phone numbers to standard international digits only.
   */
  public static sanitizePhoneNumber(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  /**
   * Generates a safe WhatsApp URL with custom pre-filled message.
   */
  public static createWhatsAppUrl(messageText: string, customPhone?: string): string {
    const phone = this.sanitizePhoneNumber(customPhone || SITE_CONFIG.contact.whatsappNumber);
    const encoded = encodeURIComponent(messageText.trim());
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  /**
   * Generates standard quick inquiry URL.
   */
  public static getGeneralInquiryUrl(): string {
    const text = 'Assalamu Alaikum! I would like to inquire about online Quran classes with Qari Sadiq Naeem.';
    return this.createWhatsAppUrl(text);
  }

  /**
   * Generates trial booking URL with specific course and country pre-fill.
   */
  public static getTrialBookingUrl(courseName?: string, countryName?: string): string {
    let text = 'Assalamu Alaikum! I would like to book a Free Trial Quran Class.';
    if (courseName) text += `\nCourse: ${courseName}`;
    if (countryName) text += `\nCountry: ${countryName}`;
    return this.createWhatsAppUrl(text);
  }

  /**
   * Formats structured admission application data into a professional WhatsApp text message.
   */
  public static formatAdmissionMessage(data: AdmissionFormData): string {
    const lines = [
      '*Assalamu Alaikum Qari Sadiq Naeem Online Academy!*',
      '',
      'I have submitted an application for a *Free Trial Class* with the following details:',
      '',
      `👤 *Student Name:* ${data.studentName || 'Not Provided'}`,
      `🎂 *Age & Gender:* ${data.age || 'N/A'} years (${data.gender})`,
      `👨‍👩‍👦 *Parent/Guardian:* ${data.parentName || 'Self'}`,
      `📖 *Selected Course:* ${data.course}`,
      `🌍 *Country:* ${data.country}`,
      `🕒 *Timezone:* ${data.timezone || 'Local Time'}`,
      `📊 *Current Level:* ${data.level}`,
      `⏰ *Preferred Time:* ${data.preferredTime}`,
      `📝 *Notes/Requests:* ${data.message || 'Please arrange a free trial class at your earliest convenience.'}`,
      '',
      'JazakAllahu Khairan!',
    ];

    return lines.join('\n');
  }

  /**
   * Generates WhatsApp redirect URL for a completed admission form.
   */
  public static getAdmissionSubmissionUrl(data: AdmissionFormData): string {
    const message = this.formatAdmissionMessage(data);
    return this.createWhatsAppUrl(message);
  }
}
