import React from "react";

import { Img, Text } from "components";

type AscendWebLandingPageFaqProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "eligibilitytext"
> &
  Partial<{ eligibilitytext: string }>;

const AscendWebLandingPageFaq: React.FC<AscendWebLandingPageFaqProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtManropeMedium16Gray900"
          >
            {props?.eligibilitytext}
          </Text>
        </div>
        <div className="bg-gray-100_01 flex flex-col h-4 items-center justify-start p-[3px] rounded w-4">
          <Img
            className="h-[9px] w-[9px]"
            src="images/img_plus.svg"
            alt="plus"
          />
        </div>
      </div>
    </>
  );
};

AscendWebLandingPageFaq.defaultProps = {
  eligibilitytext: "What is the eligibility criteria?",
};

export default AscendWebLandingPageFaq;
