"use client";

import { useState } from "react";
import QRCode from "qrcode";

interface SuccessModalProps {
  shareCode: string;
  shareLink: string;
  onClose: () => void;
}

export default function SuccessModal({
  shareCode,
  shareLink,
  onClose,
}: SuccessModalProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  // Generate QR code
  QRCode.toDataURL(shareLink, {
    errorCorrectionLevel: "M",
    type: "image/png",
    width: 200,
    margin: 2,
  }).then((url) => setQrCodeUrl(url));

  const copyToClipboard = (text: string, type: "code" | "link") => {
    navigator.clipboard.writeText(text);
    if (type === "code") {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-bounce-entrance">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Upload Complete!
        </h2>
        <p className="text-center text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          Your file is ready to be shared
        </p>

        {/* Share Code */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-6 text-center animate-scale-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Share Code</p>
          <p className="text-3xl font-bold text-emerald-600 font-mono mb-4 tracking-wider">
            {shareCode}
          </p>
          <button
            onClick={() => copyToClipboard(shareCode, "code")}
            className="w-full bg-white hover:bg-gray-50 border border-emerald-300 text-emerald-600 font-semibold py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {copiedCode ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Code
              </>
            )}
          </button>
        </div>

        {/* Share Link */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Shareable Link</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareLink}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-blue-600 truncate"
            />
            <button
              onClick={() => copyToClipboard(shareLink, "link")}
              className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              {copiedLink ? (
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* QR Code */}
        {qrCodeUrl && (
          <div className="flex flex-col items-center mb-6 animate-scale-in" style={{ animationDelay: "0.7s" }}>
            <p className="text-xs font-semibold text-gray-600 uppercase mb-3">QR Code</p>
            <div
              className="w-40 h-40 border border-gray-300 rounded-lg p-2 bg-white bg-cover bg-center"
              style={{ backgroundImage: `url(${qrCodeUrl})` }}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={onClose}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Done
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-all duration-200 active:scale-95"
          >
            Upload Another
          </button>
        </div>
      </div>
    </div>
  );
}
