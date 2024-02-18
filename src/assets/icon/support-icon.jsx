import React from "react";

export const SupportIcon = () => {
  return (
    <div>
      <svg
        width={95}
        height={95}
        viewBox="0 0 95 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width={95} height={95} rx={18} fill="#F9F8F8" />
        <circle cx="54.5" cy="38.5" r="14.5" fill="#FEF1C2" />
        <rect x={25} y={27} width={44} height={44} fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_2_14064" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_2_14064"
            width={100}
            height={100}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};
