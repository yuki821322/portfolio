'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HandwritingText.module.css';

interface HandwritingTextProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export default function HandwritingText({
  className,
  duration = 250,
  delay = 300,
}: HandwritingTextProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let vivusInstance: any = null;

    const initVivus = async () => {
      if (!svgRef.current) return;

      // Dynamic import for client-side only
      const Vivus = (await import('vivus')).default;

      setTimeout(() => {
        if (svgRef.current) {
          vivusInstance = new Vivus(svgRef.current, {
            type: 'oneByOne',
            duration: duration,
            animTimingFunction: Vivus.EASE_OUT,
          });
          setIsReady(true);
        }
      }, delay);
    };

    initVivus();

    return () => {
      if (vivusInstance && vivusInstance.destroy) {
        vivusInstance.destroy();
      }
    };
  }, [duration, delay]);

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 800 150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Welcome to my portfolio"
      >
        {/* 筆記体 "Welcome" - 連続した曲線 */}
        <path
          d="M20 90
             Q 25 40, 40 90
             Q 45 110, 55 90
             Q 60 70, 70 90
             Q 75 110, 85 90
             Q 90 70, 100 90
             Q 108 110, 115 85
             Q 125 50, 140 85
             Q 150 110, 165 80
             Q 175 55, 165 45
             Q 155 40, 150 55
             Q 145 75, 160 90
             Q 175 105, 195 85
             Q 210 65, 195 50
             Q 180 40, 175 60
             Q 170 80, 185 95
             Q 200 110, 220 90
             Q 235 70, 250 90
             Q 260 105, 275 85
             Q 285 70, 270 55
             Q 255 45, 250 65
             Q 245 85, 265 100
             Q 285 115, 310 90"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 筆記体 "to" */}
        <path
          d="M330 50
             L 330 100
             Q 335 115, 350 100
             Q 360 85, 370 100
             Q 380 115, 370 100
             Q 355 75, 375 70
             Q 395 65, 380 100"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* t のクロスバー */}
        <path
          d="M320 65 L 340 65"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 筆記体 "My" */}
        <path
          d="M410 100
             L 410 40
             Q 420 80, 440 40
             Q 460 80, 470 40
             L 470 100
             Q 480 120, 500 90
             Q 510 70, 520 100
             Q 530 130, 515 140"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 筆記体 "Portfolio" */}
        <path
          d="M550 100
             L 550 35
             Q 580 35, 580 55
             Q 580 75, 550 75
             Q 560 90, 580 100
             Q 595 110, 610 85
             Q 620 65, 605 55
             Q 590 50, 590 70
             Q 590 90, 610 100
             Q 630 110, 650 85
             Q 660 70, 645 60
             Q 630 55, 630 75
             Q 630 95, 650 100
             Q 665 105, 675 70
             L 675 100
             Q 680 115, 695 95
             Q 705 75, 690 65
             Q 675 60, 680 80
             Q 685 100, 710 95
             Q 730 90, 720 70
             Q 710 55, 710 80
             Q 710 105, 735 95
             Q 755 85, 750 65
             Q 745 50, 735 70
             Q 725 90, 750 100
             Q 775 110, 780 90"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
