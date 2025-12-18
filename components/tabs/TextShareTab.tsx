"use client";

import { useState } from "react";
import SecurityOptions from "@/components/SecurityOptions";
import SuccessModal from "@/components/SuccessModal";
import { generateShareCode, generateShareLink } from "@/lib/utils";

interface TextShareTabProps {
  onSuccess: (code: string, link: string) => void;
}

export default function TextShareTab({ onSuccess }: TextShareTabProps) {
  const [text, setText] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [password, setPassword] = useState("");
  const [expiryTime, setExpiryTime] = useState("12");
  const [customCode, setCustomCode] = useState("");
  const [useCustomCode, setUseCustomCode] = useState(false);
  const [oneTimeDownload, setOneTimeDownload] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shareCode, setShareCode] = useState("");
  const [shareLink, setShareLink] = useState("");

  const handleShare = async () => {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    setIsSharing(true);
    try {
      // Simulate share delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate share code
      const code = useCustomCode && customCode ? customCode : generateShareCode();
      const link = generateShareLink(code);

      setShareCode(code);
      setShareLink(link);
      setShowSuccess(true);
      onSuccess(code, link);

      // Reset form
      setText("");
      setPassword("");
      setCustomCode("");
      setUseCustomCode(false);
    } catch (error) {
      console.error("Share failed:", error);
      alert("Share failed. Please try again.");
    } finally {
      setIsSharing(false);
    }
  };

  const characterCount = text.length;

  return (
    <>
      <div className="space-y-8">
        {/* Text Area */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Share Your Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full h-48 rounded-xl border-2 border-gray-200 p-4 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all duration-200 resize-none"
          />
          <div className="mt-2 text-sm text-gray-500">
            {characterCount} / 10,000 characters
          </div>
        </div>

        {/* Security Options */}
        <SecurityOptions
          password={password}
          setPassword={setPassword}
          expiryTime={expiryTime}
          setExpiryTime={setExpiryTime}
          customCode={customCode}
          setCustomCode={setCustomCode}
          useCustomCode={useCustomCode}
          setUseCustomCode={setUseCustomCode}
          oneTimeDownload={oneTimeDownload}
          setOneTimeDownload={setOneTimeDownload}
        />

        {/* Submit Button */}
        <button
          onClick={handleShare}
          disabled={!text.trim() || isSharing}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          {isSharing ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Sharing...
            </>
          ) : (
            <>
              Share Text
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          shareCode={shareCode}
          shareLink={shareLink}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}
