"use client";

import { useState } from "react";
import { generateRandomCode } from "@/lib/utils";

interface SecurityOptionsProps {
  password: string;
  setPassword: (pwd: string) => void;
  expiryTime: string;
  setExpiryTime: (time: string) => void;
  customCode: string;
  setCustomCode: (code: string) => void;
  useCustomCode: boolean;
  setUseCustomCode: (use: boolean) => void;
  oneTimeDownload: boolean;
  setOneTimeDownload: (use: boolean) => void;
}

export default function SecurityOptions({
  password,
  setPassword,
  expiryTime,
  setExpiryTime,
  customCode,
  setCustomCode,
  useCustomCode,
  setUseCustomCode,
  oneTimeDownload,
  setOneTimeDownload,
}: SecurityOptionsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [generatingCode, setGeneratingCode] = useState(false);

  const handleGenerateCode = async () => {
    setGeneratingCode(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    const newCode = generateRandomCode();
    setCustomCode(newCode);
    setGeneratingCode(false);
  };

  const isValidCode = customCode === "" || /^[A-Z0-9]{6,12}$/.test(customCode);

  return (
    <div className="space-y-4 pt-6 border-t border-gray-200 animate-fade-in">
      {/* Password Protection */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">Password Protection</p>
            <p className="text-xs text-gray-600">Add extra security</p>
          </div>
        </div>
        <button
          onClick={() => setPassword("")}
          className={`w-12 h-6 rounded-full transition-all duration-300 ${
            password ? "bg-emerald-500" : "bg-gray-300"
          } relative`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
              password ? "translate-x-6" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>

      {password !== "" && (
        <div className="relative animate-slide-down">
          <label className="text-sm text-gray-700 font-semibold block mb-2">
            Enter Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (min 6 chars)"
              className="w-full input-base pr-12"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856A3.375 3.375 0 0012 5c4.478 0 8.268 2.943 9.543 7a10.079 10.079 0 01-9.543 7c-4.477 0-8.268-2.943-9.542-7 .181-.87.53-1.718.996-2.499m0 0a9.968 9.968 0 013.664-5.332m0 0L19 19M9.172 9.172L19 19" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Expiry Time */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">Expiry Time</p>
            <p className="text-xs text-gray-600">Auto-delete after</p>
          </div>
        </div>
        <select
          value={expiryTime}
          onChange={(e) => setExpiryTime(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="3">3 hours</option>
          <option value="8">8 hours</option>
          <option value="12">12 hours</option>
          <option value="24">24 hours</option>
          <option value="36">36 hours</option>
          <option value="72">72 hours</option>
        </select>
      </div>

      {/* Custom Code */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">Custom Code</p>
            <p className="text-xs text-gray-600">6-12 uppercase letters/numbers</p>
          </div>
        </div>
        <button
          onClick={() => setUseCustomCode(!useCustomCode)}
          className={`w-12 h-6 rounded-full transition-all duration-300 ${
            useCustomCode ? "bg-emerald-500" : "bg-gray-300"
          } relative`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
              useCustomCode ? "translate-x-6" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>

      {useCustomCode && (
        <div className="animate-slide-down flex gap-2">
          <div className="flex-1">
            <label className="text-sm text-gray-700 font-semibold block mb-2">
              Enter Code
            </label>
            <input
              type="text"
              value={customCode.toUpperCase()}
              onChange={(e) => setCustomCode(e.target.value.toUpperCase())}
              placeholder="Enter custom code"
              maxLength={12}
              className={`w-full input-base uppercase ${
                !isValidCode ? "border-red-500" : "border-emerald-500"
              }`}
            />
            {!isValidCode && customCode && (
              <p className="text-xs text-red-600 mt-1">
                Use 6-12 uppercase letters/numbers
              </p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-700 font-semibold block mb-2">
              &nbsp;
            </label>
            <button
              onClick={handleGenerateCode}
              disabled={generatingCode}
              className="w-full h-12 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {generatingCode ? (
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {/* One-Time Download */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">One-Time Download</p>
            <p className="text-xs text-gray-600">Link expires after first use</p>
          </div>
        </div>
        <button
          onClick={() => setOneTimeDownload(!oneTimeDownload)}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
            oneTimeDownload
              ? "bg-emerald-500 text-white"
              : "bg-gray-300 text-gray-900"
          }`}
        >
          {oneTimeDownload ? "Enabled" : "Disabled"}
        </button>
      </div>
    </div>
  );
}
