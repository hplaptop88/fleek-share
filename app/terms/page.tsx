export const metadata = {
  title: "Terms of Service - FleekShare",
  description: "FleekShare Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-base max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the FleekShare website and mobile application, you accept and agree to be 
              bound by and comply with the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on FleekShare for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on FleekShare</li>
              <li>Transferring the materials to another person or &ldquo;mirroring&rdquo; the materials on any other server</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on FleekShare are provided on an &lsquo;as is&rsquo; basis. FleekShare makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall FleekShare or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on FleekShare, even if we or our authorized representative has been 
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on FleekShare could include technical, typographical, or photographic errors. 
              FleekShare does not warrant that any of the materials on FleekShare are accurate, complete, or current. 
              FleekShare may make changes to the materials contained on FleekShare at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitations of Liability</h2>
            <p>
              In no event shall FleekShare or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on FleekShare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Modifications</h2>
            <p>
              FleekShare may revise these terms of service for our website at any time without notice. By using 
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction 
              in which FleekShare operates, and you irrevocably submit to the exclusive jurisdiction of the courts 
              in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@fleekshare.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
