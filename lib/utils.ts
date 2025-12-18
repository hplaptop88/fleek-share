/**
 * Generate a random share code (6-12 uppercase letters and numbers)
 */
export function generateShareCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = Math.floor(Math.random() * 7) + 6; // 6-12 characters
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Generate a random code using a simpler algorithm (suitable for custom codes)
 */
export function generateRandomCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Generate a share link from a share code
 */
export function generateShareLink(code: string): string {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://fleekshare.com";
  return `${baseUrl}/download/${code}`;
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password
 */
export function isValidPassword(password: string): boolean {
  return password.length >= 6;
}

/**
 * Validate custom code
 */
export function isValidCustomCode(code: string): boolean {
  const codeRegex = /^[A-Z0-9]{6,12}$/;
  return codeRegex.test(code);
}

/**
 * Convert seconds to human readable time
 */
export function secondsToTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}

/**
 * Get expiry time in milliseconds
 */
export function getExpiryTimeMs(hours: number): number {
  return hours * 60 * 60 * 1000;
}

/**
 * Format expiry time display
 */
export function formatExpiryTime(hours: number): string {
  const expiryTimes: Record<string, string> = {
    "3": "3 hours",
    "8": "8 hours",
    "12": "12 hours",
    "24": "1 day",
    "36": "1.5 days",
    "72": "3 days",
  };
  return expiryTimes[String(hours)] || `${hours} hours`;
}
