import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import privacypolicies from '../assets/privacypolicies.jpg'
const PrivacyPolices = () => {
  return (
    <>

      <Hero title="Privacy Policy" img={privacypolicies} />
      <div className='my-5 container'>
        <h1 class="mb-5 text-center">Privacy Policy</h1>

        <h4>1. Information We Collect</h4>
        <p>We may collect personal information from you when you voluntarily provide it to us while using our website
          and services. This may include your name, email address, phone number, and any other information you
          provide to us.</p>

        <h4>2. How We Use Your Information</h4>
        <p>We may use the information we collect from you for various purposes, including:</p>
        <ul>
          <li>⦁ Providing and maintaining our services</li>
          <li>⦁ Responding to your inquiries and requests</li>
          <li>⦁ Sending you promotional and marketing materials</li>
          <li>⦁ Improving our website and services</li>
          <li>⦁ Personalizing your experience on our website</li>
          <li>⦁ Ensuring the security of our website and services</li>
        </ul>

        <h4>3. Cookies and Similar Technologies</h4>
        <p>We may use cookies and similar tracking technologies to enhance your experience on our website. Cookies
          are small data files that are placed on your computer or device. You can choose to disable cookies
          through your browser settings, but doing so may limit some features of our website.</p>

        <h4>4. Third-Party Services</h4>
        <p>We may use third-party services to help us operate our website and deliver our services. These
          third-party service providers have access to your personal information but are obligated not to disclose
          or use it for any other purpose.</p>

        <h4>5. Data Security</h4>
        <p>We take data security seriously and implement reasonable measures to protect your personal information.
          However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.</p>

        <h4>6. International Data Transfer</h4>
        <p>As an internationally operating business, your personal information may be transferred to and stored on
          servers located outside your country. By using our services, you consent to the transfer of this
          information.</p>

        <h4>7. Children's Privacy</h4>
        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
          information from children. If you are a parent or guardian and believe that your child has provided us
          with personal information, please contact us so that we can take appropriate action.</p>

        <h4>8. Changes to This Privacy Policy</h4>
        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective
          immediately upon posting the revised policy on our website.</p>

        <h4>9. Contact Us</h4>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>


      </div>
    </>
  )
}

export default PrivacyPolices