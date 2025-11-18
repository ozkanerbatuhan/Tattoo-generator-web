export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, upload photos, or contact support. This may include your name, email address, and uploaded images.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process your tattoo generations</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
        </ul>

        <h2>3. Image Processing</h2>
        <p>
          Images you upload for AR try-on or style transfer are processed locally on your device whenever possible. If cloud processing is required, your images are temporarily stored for processing and then deleted. We do not use your personal photos to train our public AI models without your explicit consent.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services for analytics, payment processing, and hosting. These services have their own privacy policies and we encourage you to review them.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can manage your account settings within the app or contact us for assistance.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@tattoogen.com.
        </p>
      </div>
    </div>
  );
}
