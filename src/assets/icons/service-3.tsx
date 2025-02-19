import { createIcon, IconProps } from "@chakra-ui/react";

const Service3Icon = createIcon({
  displayName: "Service3Icon",
  path: (
    <>
      <rect width="66" height="42" fill="url(#pattern0_1_202)" />
      <defs>
        <pattern
          id="pattern0_1_202"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_202"
            transform="scale(0.0151515 0.0238095)"
          />
        </pattern>
        <image
          id="image0_1_202"
          width="66"
          height="42"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </>
  ),
});

export const Service3 = (props: IconProps) => {
  return (
    <Service3Icon
      width="66"
      height="42"
      viewBox="0 0 66 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
};
