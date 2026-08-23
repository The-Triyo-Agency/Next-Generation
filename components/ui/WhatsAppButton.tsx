"use client";

import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  context?: string;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  context, 
  label = "WhatsApp",
  className = ""
}: WhatsAppButtonProps) {
  
  // Generate contextual message
  let message = "Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.";
  
  if (context) {
    message = `Hi Next Generation, I'm interested in the ${context}. Could you please let me know about availability?`;
  }

  const defaultStyles = "bg-[#111111] text-[#F7F5F0] px-8 py-4 rounded-[10px] font-bold text-xs tracking-widest uppercase hover:bg-[#FF2400] transition-colors shadow-lg inline-flex items-center justify-center";
  
  return (
    <Link 
      href={generateWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={className || defaultStyles}
    >
      {label}
    </Link>
  );
}
