import React from 'react';
import HeroGraphic from "@/components/HeroGraphic";

export default function GraphicPreview() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] flex items-center justify-center p-8">
      {/* Container simulating mobile hero dimensions for preview */}
      <div className="w-full max-w-[390px] h-[844px] relative border border-[#111111]/10 bg-white overflow-hidden shadow-2xl">
        
        {/* Subtle grid to help visualize transparency and alignment */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* The Isolated Graphic Component */}
        <HeroGraphic className="w-full h-full" />
        
        {/* We keep this completely clean with no character, no text, no buttons as requested */}
      </div>
    </main>
  );
}
