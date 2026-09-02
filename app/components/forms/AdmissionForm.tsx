'use client';

import { useState } from 'react';
import { AdmissionFormData } from '../../../lib/types/academy.types';
import { CORE_COURSES, SPECIAL_PROGRAMS } from '../../../lib/constants/courses.data';
import { COUNTRY_DIRECTORY } from '../../../lib/constants/countries.data';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

interface FormProps {
  defaultCourse?: string;
  defaultCountry?: string;
}

export default function AdmissionForm({ defaultCourse = '', defaultCountry = '' }: FormProps) {
  const allCourses = [
    ...CORE_COURSES.map((c) => c.title),
    ...SPECIAL_PROGRAMS.map((sp) => sp.title),
  ];

  const defaultCountryItem = COUNTRY_DIRECTORY[0];

  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    age: '',
    gender: 'Male',
    parentName: '',
    whatsapp: '',
    email: '',
    country: defaultCountry || defaultCountryItem.country,
    timezone: defaultCountryItem.defaultTimezone,
    course: defaultCourse || CORE_COURSES[0].title,
    level: 'Complete Beginner',
    preferredTime: 'Evening Slot (5:00 PM - 9:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    if (name === 'country') {
      const match = COUNTRY_DIRECTORY.find((c) => c.country === value);
      setFormData((prev) => ({
        ...prev,
        country: value,
        timezone: match ? match.defaultTimezone : prev.timezone,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const generatedWhatsAppUrl = WhatsAppService.getAdmissionSubmissionUrl(formData);

  return (
    <div className="admission-form-wrapper">
      {submitted ? (
        <div className="success">
          <div className="success-icon">✓</div>
          <span className="success-badge">APPLICATION RECEIVED</span>
          <h3>JazakAllahu Khairan!</h3>
          <p>
            Your admission and free trial request for{' '}
            <strong>{formData.studentName || 'the student'}</strong> has been registered.
            To instantly confirm your trial class date and time, please click the green button below
            to message Qari Sadiq Naeem on WhatsApp with your details.
          </p>

          <div className="success-summary-box">
            <div className="ss-row">
              <span>Student:</span> <strong>{formData.studentName} ({formData.age} yrs, {formData.gender})</strong>
            </div>
            <div className="ss-row">
              <span>Course:</span> <strong>{formData.course}</strong>
            </div>
            <div className="ss-row">
              <span>Country:</span> <strong>{formData.country}</strong>
            </div>
            <div className="ss-row">
              <span>Schedule:</span> <strong>{formData.preferredTime}</strong>
            </div>
          </div>

          <div className="success-actions">
            <a
              href={generatedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-direct"
            >
              <span>💬</span> Confirm on WhatsApp (1-Click)
            </a>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        <form className="admission-form" onSubmit={handleSubmit}>
          <div className="form-head">
            <div>
              <span className="form-head-eyebrow">✦ ONLINE ADMISSION PORTAL</span>
              <b>Book Your Free Trial Class</b>
            </div>
            <div className="trial-badge">100% FREE TRIAL</div>
          </div>

          <p className="form-intro-text">
            Fill in the information below to schedule a one-to-one Zoom assessment with Qari Sadiq Naeem.
          </p>

          {/* Section 1: Student Details */}
          <div className="form-section-title">
            <span>1</span> Student Information
          </div>

          <div className="form-row">
            <label>
              Student Full Name *
              <input
                required
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g. Muhammad / Fatima / Sarah"
              />
            </label>
            <label>
              Student Age *
              <input
                required
                type="number"
                name="age"
                min="3"
                max="95"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g. 7"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Gender *
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male (Boy / Brother)</option>
                <option value="Female">Female (Girl / Sister)</option>
              </select>
            </label>
            <label>
              Parent / Guardian / Contact Name *
              <input
                required
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Parent or Guardian name"
              />
            </label>
          </div>

          {/* Section 2: Contact Details */}
          <div className="form-section-title">
            <span>2</span> Contact & Location
          </div>

          <div className="form-row">
            <label>
              WhatsApp Number (with Country Code) *
              <input
                required
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="e.g. +971 50... or +44 7... or +92 300..."
              />
            </label>
            <label>
              Email Address *
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@example.com"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Country of Residence *
              <select
                required
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                {COUNTRY_DIRECTORY.map((c) => (
                  <option key={c.id} value={c.country}>
                    {c.country}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Time Zone / City
              <input
                type="text"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                placeholder="e.g. Dubai Time (GST), London (GMT)"
              />
            </label>
          </div>

          {/* Section 3: Course Selection */}
          <div className="form-section-title">
            <span>3</span> Course & Timings
          </div>

          <div className="form-row">
            <label>
              Select Course Track *
              <select
                required
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                {allCourses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Current Quran Reading Level
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Complete Beginner">Complete Beginner (Starting Qaida)</option>
                <option value="Basic Alphabet Known">Basic Arabic Alphabet Known</option>
                <option value="Can Read Nazra">Can Read Quran (Needs Tajweed Improvement)</option>
                <option value="Starting Hifz">Starting Memorization (Hifz)</option>
                <option value="Adult Refresher">Adult Refresher / Translation</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Preferred Daily Time Slot
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
              >
                <option value="Morning Slot (7:00 AM - 11:00 AM)">Morning Slot (7:00 AM - 11:00 AM)</option>
                <option value="Afternoon Slot (1:00 PM - 4:00 PM)">Afternoon Slot (1:00 PM - 4:00 PM)</option>
                <option value="Evening Slot (5:00 PM - 9:00 PM)">Evening Slot (5:00 PM - 9:00 PM)</option>
                <option value="Night Slot (9:00 PM - 12:00 AM)">Night Slot (9:00 PM - 12:00 AM)</option>
                <option value="Weekends (Saturday & Sunday)">Weekends (Saturday & Sunday)</option>
                <option value="Flexible Schedule">Flexible / Mutual Agreement</option>
              </select>
            </label>
          </div>

          <label>
            Additional Questions, Schedule Preference, or Specific Notes (Optional)
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Focus specifically on pronunciation, preferred start date, or any special requests..."
            ></textarea>
          </label>

          <button className="btn btn-primary full form-submit-btn" type="submit">
            <span>✦</span> Book Free Trial & Submit Application <span>→</span>
          </button>
          
          <div className="form-guarantees">
            <span>🔒 100% Privacy Guaranteed</span>
            <span>•</span>
            <span>⚡ Instant WhatsApp Coordination</span>
            <span>•</span>
            <span>🎥 1-on-1 Zoom HD</span>
          </div>
        </form>
      )}
    </div>
  );
}
