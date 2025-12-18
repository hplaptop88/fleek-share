import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download File - FleekShare",
  description: "Download your shared file from FleekShare",
};

export default function DownloadPage({ params }: { params: { code: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Download File</h1>
        <p className="text-gray-600 mb-6">Code: <span className="font-mono font-bold text-emerald-600">{params.code}</span></p>
        <p className="text-gray-500 text-sm">
          This is the download page for share code <span className="font-mono">{params.code}</span>. 
          Full implementation coming soon.
        </p>
      </div>
    </div>
  );
}
