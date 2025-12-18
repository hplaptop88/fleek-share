export const metadata = {
  title: "Privacy Policy - FleekShare",
  description: "FleekShare Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-base max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>
              FleekShare (&ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo;) operates the FleekShare website and mobile application 
              (the &ldquo;Service&rdquo;). This page informs you of our policies regarding the collection, use, and 
              disclosure of personal data when you use our Service and the choices you have associated 
              with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Collection and Use</h2>
            <p>
              We collect different types of information for various purposes to provide and improve 
              our Service to you.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal Data: We may ask for certain personally identifiable information from you 
              when you use our Service, including but not limited to email address and usage data.</li>
              <li>Usage Data: We may also collect information on how the Service is accessed and used 
              (&ldquo;Usage Data&rdquo;). This may include information such as your computer&rsquo;s Internet Protocol 
              address, browser type, pages visited, and the time and date of your visit.</li>
              <li>File Data: Files uploaded to our Service are encrypted and are only accessible by 
              users with the correct share code and password (if set).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission 
              over the Internet or method of electronic storage is 100% secure. While we strive to use 
              commercially acceptable means to protect your personal data, we cannot guarantee its 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &ldquo;effective date&rdquo; at the top 
              of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@fleekshare.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
