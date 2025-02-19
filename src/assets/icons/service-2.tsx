import { createIcon, IconProps } from "@chakra-ui/react";

const Service2Icon = createIcon({
  displayName: "Service2Icon",
  path: (
    <>
      <rect width="57" height="57" fill="url(#pattern0_1_201)" />
      <defs>
        <pattern
          id="pattern0_1_201"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_201" transform="scale(0.0175439)" />
        </pattern>
        <image
          id="image0_1_201"
          width="57"
          height="57"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </>
  ),
});

export const Service2 = (props: IconProps) => {
  return (
    <Service2Icon
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
};
