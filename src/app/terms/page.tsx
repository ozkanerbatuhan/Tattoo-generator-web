export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground/80">
        <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-6">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Tattoo Generator website and mobile application (the "Service") operated by Tattoo Generator ("us", "we", or "our").
        </p>
        <p className="mb-6">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p className="mb-4">
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Tattoo Generator and its licensors. The Service is protected by copyright, trademark, and other laws of both the country of origin and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Tattoo Generator.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">2.1 User Generated Content</h3>
        <p className="mb-4">
          You retain ownership of any images or text prompts you upload to the Service ("User Content"). However, by uploading User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with operating and providing the Service, including for the purpose of training and improving our artificial intelligence models.
        </p>
        <p className="mb-4">
          You represent and warrant that: (i) you own the User Content or have the right to grant the license set forth in this section, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Subscriptions and Payments</h2>
        <p className="mb-4">
          Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
        </p>
        <p className="mb-4">
          At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Tattoo Generator cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Tattoo Generator customer support team.
        </p>
        <p className="mb-4">
          <strong>Refunds:</strong> Except when required by law, paid Subscription fees are non-refundable.
        </p>
        <p className="mb-4">
          <strong>Fee Changes:</strong> Tattoo Generator, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Limitation of Liability</h2>
        <p className="mb-4 uppercase font-bold">
          IN NO EVENT SHALL TATTOO GENERATOR, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">6. Disclaimer</h2>
        <p className="mb-4 uppercase font-bold">
          YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE.
        </p>
        <p className="mb-4">
          Tattoo Generator its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">7. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the Company is established, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">8. Changes</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us via email at: legal@tattoogen.com
        </p>
      </div>
    </div>
  );
}
