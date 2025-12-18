"use client";

import { useState, useRef } from "react";
import DropZone from "@/components/DropZone";
import SecurityOptions from "@/components/SecurityOptions";
import SuccessModal from "@/components/SuccessModal";
import { generateShareCode, generateShareLink } from "@/lib/utils";

interface FileUploadTabProps {
  onSuccess: (code: string, link: string) => void;
}

export default function FileUploadTab({ onSuccess }: FileUploadTabProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [password, setPassword] = useState("");
  const [expiryTime, setExpiryTime] = useState("12");
  const [customCode, setCustomCode] = useState("");
  const [useCustomCode, setUseCustomCode] = useState(false);
  const [oneTimeDownload, setOneTimeDownload] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shareCode, setShareCode] = useState("");
  const [shareLink, setShareLink] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    if (selectedFile.size > 50 * 1024 * 1024) {
      alert("File size must be less than 50MB");
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setIsUploading(true);
    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate share code
      const code = useCustomCode && customCode ? customCode : generateShareCode();
      const link = generateShareLink(code);

      setShareCode(code);
      setShareLink(link);
      setShowSuccess(true);
      onSuccess(code, link);

      // Reset form
      setFile(null);
      setPassword("");
      setCustomCode("");
      setUseCustomCode(false);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="space-y-8">
        {/* Drop Zone or File Preview */}
        {!file ? (
          <DropZone onFileSelected={handleFile} />
        ) : (
          <div className="border-2 border-emerald-200 rounded-2xl p-8 bg-emerald-50 animate-scale-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={() => setFile(null)}
                className="p-2 hover:bg-emerald-200 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

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
          onClick={handleUpload}
          disabled={!file || isUploading}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
        >
          {isUploading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Uploading...
            </>
          ) : (
            <>
              Upload File
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

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            handleFile(selectedFile);
          }
        }}
      />
    </>
  );
}
