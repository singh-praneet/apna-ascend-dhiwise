import React from "react";

import { Img, Text } from "components";

type AscendWebLandingPageFaq1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "eligibilitytext" | "eligibilitydescription"
> &
  Partial<{ eligibilitytext: string; eligibilitydescription: string }>;

const AscendWebLandingPageFaq1: React.FC<AscendWebLandingPageFaq1Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-gray-900 w-full"
            size="txtManropeMedium16Gray900"
          >
            {props?.eligibilitytext}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[501px] md:max-w-full text-base text-black-900_7f tracking-[0.10px]"
            size="txtManropeRegular16"
          >
            {props?.eligibilitydescription}
          </Text>
        </div>
        <div className="bg-blue_gray-400 flex flex-col h-4 items-center justify-start p-[3px] rounded w-4">
          <Img
            className="h-px my-1"
            src="images/img_vector_gray_100_01.svg"
            alt="vector_One"
          />
        </div>
      </div>
    </>
  );
};

AscendWebLandingPageFaq1.defaultProps = {
  eligibilitytext: "What is the eligibility criteria?",
  eligibilitydescription:
    "To get admission in the telecaller certification training, you have to qualify an interview with apna Admissions manager. You have to secure your seat 5 days before the batch start date.",
};

export default AscendWebLandingPageFaq1;
