import React from 'react';

interface HeroGraphicProps {
    className?: string;
}

/**
 * Isolated HeroGraphic Component
 * 
 * Represents the premium fashion editorial orange graphic used in the Hero.
 * - Single, unified SVG path for the asymmetric orange form.
 * - Controlled diagonal movement, wider at top-right, tapering to bottom-center.
 * - 1px editorial construction lines intersecting deliberately.
 * - Transparent background.
 */
export default function HeroGraphic({ className = "" }: HeroGraphicProps) {
    return (
        <div className={`relative ${className}`} aria-hidden="true">
            <svg 
                viewBox="0 0 400 560" 
                preserveAspectRatio="xMidYMid meet" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* 
                  Main Orange Editorial Form 
                  Constructed as a single intentional path:
                  - Top right angled entry
                  - Asymmetric right edge
                  - Tapers gracefully to the bottom shoe area
                  - Sweeping diagonal left edge
                */}
                <path 
                    d="
                      M 220, 40
                      L 340, 60
                      Q 370, 70 360, 120
                      L 320, 380
                      Q 310, 420 260, 460
                      L 180, 530
                      Q 160, 550 150, 520
                      L 130, 250
                      Q 125, 200 160, 150
                      Z
                    " 
                    fill="#FF2400" 
                />

                {/* Editorial Construction Lines */}
                <g stroke="#FF2400" strokeWidth="1" fill="none">
                    {/* Diagonal slicing through the upper composition */}
                    <line x1="40" y1="120" x2="380" y2="350" opacity="0.25" />
                    
                    {/* Diagonal converging toward the lower shoe area */}
                    <line x1="80" y1="300" x2="220" y2="550" opacity="0.35" />
                    
                    {/* Vertical structural anchor line on the right */}
                    <line x1="280" y1="0" x2="280" y2="560" opacity="0.18" />
                    
                    {/* Subtle transverse line intersecting near the bottom */}
                    <line x1="100" y1="500" x2="350" y2="480" opacity="0.22" />
                </g>
            </svg>
        </div>
    );
}
