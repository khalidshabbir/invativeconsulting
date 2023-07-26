import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import termsandconditions from '../assets/terms&conditions.jpg'
const TermsConditions = () => {
  return (
    <>
      <Hero title="Terms & Conditions" img={termsandconditions} />

      <div className=' my-5 container'>
        <h1 class="mb-4 text-center">Terms and Conditions</h1>

        <h4>1. Introduction</h4>
        <p>Welcome to IBCI! These Terms and Conditions govern your use of our website and services.
          By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If
          you do not agree with any part of these terms, please do not use our website or services.</p>

        <h4>2. Services</h4>
        <p>Our website offers business consulting services, including but not limited to finance bookkeeping,
          accounting, inventory management, taxation, and other related services.</p>

        <h4>3. Use of Content</h4>
        <p>All content provided on this website, including text, graphics, images, logos, and other materials, is
          the property of IBCI and protected by applicable intellectual property laws. You may not
          use, modify, distribute, or reproduce any content without our prior written consent.</p>

        <h4>4. Confidentiality</h4>
        <p>We understand the importance of maintaining the confidentiality of your sensitive information. We agree
          to keep all client information confidential and not disclose it to any third party without your express
          permission, except as required by law.</p>

        <h4>5. Disclaimer</h4>
        <p>While we strive to provide accurate and up-to-date information on our website, we make no warranties or
          representations about the completeness, reliability, or accuracy of the content. The use of our website
          and services is at your own risk.</p>

        <h4>6. Limitation of Liability</h4>
        <p>IBCI shall not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising out of or in connection with the use of our website or services.</p>

        <h4>7. Governing Law</h4>
        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Nations (UN) and any applicable international laws and treaties, without regard to its conflict of law principles.</p>


        <h4>8. Modifications</h4>
        <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
          Continued use of our website and services after any such changes shall constitute your consent to such
          changes.</p>

        <h4>9. Contact Us</h4>
        <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
      </div>

    </>
  )
}

export default TermsConditions