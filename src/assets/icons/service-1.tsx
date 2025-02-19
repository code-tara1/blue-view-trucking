import { createIcon, IconProps } from "@chakra-ui/react";

const Service1Icon = createIcon({
  displayName: "Service1Icon",
  path: (
    <>
      <rect width="63" height="51" fill="url(#pattern0_1_200)" />
      <defs>
        <pattern
          id="pattern0_1_200"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_200"
            transform="scale(0.015873 0.0196078)"
          />
        </pattern>
        <image
          id="image0_1_200"
          width="63"
          height="51"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </>
  ),
});

export const Service1 = (props: IconProps) => {
  return (
    <Service1Icon
      width="63"
      height="51"
      viewBox="0 0 63 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
};
