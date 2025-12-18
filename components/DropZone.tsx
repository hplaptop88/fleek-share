"use client";

import { useRef, useState } from "react";

interface DropZoneProps {
  onFileSelected: (file: File) => void;
}

export default function DropZone({ onFileSelected }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFileSelected(droppedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileSelected(selectedFile);
    }
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? "border-emerald-500 bg-emerald-50 scale-105"
            : "border-gray-300 bg-gray-50 hover:border-gray-400"
        }`}
      >
        <div className={`flex flex-col items-center gap-4 ${isDragging ? "animate-bounce" : ""}`}>
          <svg
            className={`w-16 h-16 transition-all duration-300 ${
              isDragging ? "text-emerald-600 scale-110" : "text-emerald-500"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-6-2m6 2l6-2"
            />
          </svg>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drag and drop your file here
            </h3>
            <p className="text-gray-600">or click to browse your files</p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            You can also paste an image from your clipboard
          </p>

          <div className="mt-4 pt-4 border-t border-gray-300 text-xs text-gray-500">
            Maximum file size: 50 MB
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInput}
        className="hidden"
      />
    </>
  );
}
