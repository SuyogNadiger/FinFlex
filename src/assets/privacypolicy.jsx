import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      <div className="max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/logo_white_png.png"
            alt="FinFlex Logo"
            className="w-40 h-auto"
          />
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="text-gray-300 text-lg space-y-6 leading-relaxed">
          <p>
            At <span className="font-semibold text-white">FinFlex</span>, we value your trust and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information while using our platform.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and financial data when you use our services. Additionally, we gather non-personal information, such as device details and usage statistics, to improve our app’s performance.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Data</h2>
          <p>
            Your data is used to personalize your experience, improve our services, and ensure the security of your account. We do not sell your data to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
          <p>
            We implement robust security measures to protect your information. However, no online system is completely secure, and we cannot guarantee absolute data protection.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data at any time. Contact us at{" "}
            <a href="mailto:support@finflex.com" className="text-blue-400 underline">
              support@finflex.com
            </a>{" "}
            for assistance.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be communicated through our platform or via email.
          </p>

          <p>
            By using FinFlex, you agree to this Privacy Policy. For questions, please contact us at{" "}
            <a href="mailto:support@finflex.com" className="text-blue-400 underline">
              support@finflex.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
