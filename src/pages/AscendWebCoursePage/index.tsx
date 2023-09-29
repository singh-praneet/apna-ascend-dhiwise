import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AscendWebLandingPageFaq from "components/AscendWebLandingPageFaq";
import AscendWebLandingPageFaq1 from "components/AscendWebLandingPageFaq1";

const AscendWebCoursePagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[108px] items-center justify-start mx-auto w-full">
        <header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
          <div className="flex flex-row font-manrope gap-12 items-start justify-start md:ml-[0] ml-[100px] md:mt-0 my-[35px] w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtManropeBold20"
            >
              Home
            </Text>
            <Text
              className="text-white-A700_cc text-xl w-auto"
              size="txtManropeRegular20"
            >
              Course
            </Text>
          </div>
          <Text
            className="mb-[33px] md:ml-[0] ml-[296px] md:mt-0 mt-[42px] text-white-A700 text-xl tracking-[0.30px]"
            size="txtFiraSansSemiBold20"
          >
            <span className="text-white-A700 font-firasans text-left font-semibold">
              apna
            </span>
            <span className="text-orange-300 font-firasans text-left font-semibold">
              Ascend
            </span>
            <span className="text-white-A700 font-firasans text-left font-semibold">
              {" "}
              Placement Program
            </span>
          </Text>
          <div className="flex sm:flex-col flex-row font-firasans gap-[11.36px] items-center justify-start mb-9 md:ml-[0] ml-[323px] mr-[100px] md:mt-0 mt-[39px] w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_computer.svg"
              alt="computer"
            />
            <Line className="bg-gradient  h-6 sm:h-px sm:w-full w-px" />
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-[5.62px] items-center justify-start w-auto">
                <Img
                  className="h-[21px] md:h-auto object-cover w-[21px]"
                  src="images/img_frame1171277489.png"
                  alt="frame1171277489"
                />
                <div className="md:h-4 h-5 py-[2.81px] relative w-[72px]">
                  <Text
                    className="absolute bottom-[1%] left-[0] text-[12.65px] text-white-A700 tracking-[0.11px] w-auto"
                    size="txtFiraSansSemiBold1265"
                  >
                    apna
                  </Text>
                  <Text
                    className="absolute bg-clip-text bg-gradient1  h-max inset-y-[0] my-auto right-[0] text-[12.65px] text-transparent tracking-[0.11px] w-auto"
                    size="txtFiraSansSemiBold1265Orange300"
                  >
                    Ascend
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start max-w-[1440px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[83px] items-center justify-start max-w-[1040px] mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-12 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center tracking-[0.30px] w-auto"
                  size="txtManropeBold48"
                >
                  Telecalling Course
                </Text>
                <Text
                  className="max-w-[435px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f tracking-[0.30px]"
                  size="txtManropeRegular32"
                >
                  Training & placement in top companies
                </Text>
              </div>
              <Input
                name="price"
                placeholder="Join course for ₹9,999  20,000  🔥"
                className="font-medium p-0 placeholder:text-white-A700 text-base text-center w-full"
                wrapClassName="w-[71%]"
              ></Input>
            </div>
            <div className="bg-gray-100_01 border-[3px] border-gray-100_01 border-solid flex md:flex-1 flex-col items-center justify-start p-[106px] md:px-10 sm:px-5 rounded-[14px] w-1/2 md:w-full">
              <Img
                className="h-20 mb-2 w-20"
                src="images/img_adsplaycirclefilled_white_a700.svg"
                alt="adsplaycirclefi"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start overflow-auto w-auto md:w-full">
              <div className="flex flex-col items-center justify-start md:px-5 w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 tracking-[0.30px] w-auto"
                  size="txtManropeBold32"
                >
                  Training by leaders from
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[1852px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[206px] w-full">
                  <List
                    className="flex flex-col gap-4 items-center w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-[61px] my-0 w-[96%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 rounded shadow-bs1 w-[8%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto my-0.5 object-cover w-full"
                          src="images/img_image32_15x80.png"
                          alt="imageThirtyTwo"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-0.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image30.png"
                          alt="imageThirty"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image24.png"
                          alt="imageTwentyFour"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] p-2 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[96%]"
                          src="images/img_image25.png"
                          alt="imageTwentyFive"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto my-0.5 object-cover w-full"
                          src="images/img_image32_15x80.png"
                          alt="imageThirtyTwo_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-0.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image30.png"
                          alt="imageThirty_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image24.png"
                          alt="imageTwentyFour_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] p-2 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[96%]"
                          src="images/img_image25.png"
                          alt="imageTwentyFive_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto my-0.5 object-cover w-full"
                          src="images/img_image32_15x80.png"
                          alt="imageThirtyTwo_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-0.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image30.png"
                          alt="imageThirty_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image24.png"
                          alt="imageTwentyFour_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[132px] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto my-0.5 object-cover w-full"
                          src="images/img_image32_15x80.png"
                          alt="imageThirtyTwo_Three"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start sm:px-5 px-[21px] rounded shadow-bs1 w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[97%]"
                          src="images/img_image27.png"
                          alt="imageTwentySeven"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[17px] p-2.5 rounded shadow-bs1 w-[8%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-full"
                          src="images/img_image31_18x80.png"
                          alt="imageThirtyOne"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[15px] rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded w-full"
                          src="images/img_image28.png"
                          alt="imageTwentyEight"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image29_40x71.png"
                          alt="imageTwentyNine"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] sm:px-5 px-[21px] rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[97%]"
                          src="images/img_image27.png"
                          alt="imageTwentySeven_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[17px] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-full"
                          src="images/img_image31_18x80.png"
                          alt="imageThirtyOne_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[15px] rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded w-full"
                          src="images/img_image28.png"
                          alt="imageTwentyEight_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image29_40x71.png"
                          alt="imageTwentyNine_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] sm:px-5 px-[21px] rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[97%]"
                          src="images/img_image27.png"
                          alt="imageTwentySeven_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[17px] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-full"
                          src="images/img_image31_18x80.png"
                          alt="imageThirtyOne_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[15px] rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded w-full"
                          src="images/img_image28.png"
                          alt="imageTwentyEight_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] px-3.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-[99%]"
                          src="images/img_image29_40x71.png"
                          alt="imageTwentyNine_Two"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[133px] p-2.5 rounded w-[8%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-full"
                          src="images/img_image31_18x80.png"
                          alt="imageThirtyOne_Three"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 flex flex-col items-center justify-start p-[61px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1040px] mb-[26px] mx-auto w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-center text-gray-900_7f tracking-[0.30px] w-auto"
                    size="txtManropeSemiBold16"
                  >
                    OVERVIEW
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 tracking-[0.30px] w-auto"
                    size="txtManropeBold32"
                  >
                    Key features of this course
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 w-1/2 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs1 hover:w-full w-full">
                      <div className="bg-white-A700 flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] shadow-bs1 w-40">
                        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                          <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border2 flex flex-col h-20 md:h-auto items-center justify-center p-[10.9px] rounded-[50%] w-20">
                            <Img
                              className="h-8 md:h-auto object-cover w-8"
                              src="images/img_adseducationfilled.png"
                              alt="adseducationfil"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start w-[95px]">
                            <Text
                              className="text-base text-center text-gray-900 w-full"
                              size="txtManropeBold16"
                            >
                              Experts
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                              size="txtManropeRegular14"
                            >
                              guidance
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border3 flex flex-col h-20 md:h-auto items-center justify-center p-[174px] md:px-10 sm:px-5 rounded-[50%] w-20">
                          <Img
                            className="h-[41px] md:h-auto object-cover w-[41px]"
                            src="images/img_adsdone.png"
                            alt="adsdone"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <Text
                            className="text-base text-center text-gray-900 w-full"
                            size="txtManropeBold16"
                          >
                            Achiever Tick
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                            size="txtManropeRegular14"
                          >
                            guidance
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border4 flex flex-col h-20 md:h-auto items-center justify-center p-2 rounded-[50%] w-20">
                          <Img
                            className="h-[26px] md:h-auto object-cover w-[23px]"
                            src="images/img_vector_26x23.png"
                            alt="vector"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-[95px]">
                          <Text
                            className="text-base text-center text-gray-900 w-full"
                            size="txtManropeBold16"
                          >
                            Guaranteed
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                            size="txtManropeRegular14"
                          >
                            interviews
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] shadow-bs1 w-40">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                      <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border5 flex flex-col h-20 md:h-auto items-center justify-center p-2 rounded-[50%] w-20">
                        <div className="flex flex-row items-start justify-start w-auto">
                          <Text
                            className="bg-clip-text bg-gradient7  sm:text-[31.65px] md:text-[37.65px] text-[41.65px] text-transparent w-[17px]"
                            size="txtRobotoRomanRegular4165"
                          >
                            1
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient7  sm:text-[22.03px] md:text-[24.03px] text-[26.03px] text-transparent tracking-[0.26px] w-[23px]"
                            size="txtFiraSansRegular2603"
                          >
                            st
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-[95px]">
                        <Text
                          className="text-base text-center text-gray-900 w-full"
                          size="txtManropeBold16"
                        >
                          HR Priority
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                          size="txtManropeRegular14"
                        >
                          in applications
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-4 grid grid-cols-2 w-[33%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border6 flex flex-col h-20 md:h-auto items-center justify-center p-2 rounded-[50%] w-20">
                          <Img
                            className="h-[26px] md:h-auto object-cover w-[26px]"
                            src="images/img_vector_26x26.png"
                            alt="vector"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <Text
                            className="text-base text-center text-gray-900 w-full"
                            size="txtManropeBold16"
                          >
                            Direct Calls
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                            size="txtManropeRegular14"
                          >
                            from companies
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-40 md:h-auto items-center justify-center p-2 rounded-[14px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="border border-solid deep_purple_A200_01_light_blue_A400_01_border7 flex flex-col h-20 md:h-auto items-center justify-center p-2 rounded-[50%] w-20">
                          <Img
                            className="h-[26px] md:h-auto object-cover w-[18px]"
                            src="images/img_bxrupeesvg.png"
                            alt="vector"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <Text
                            className="text-base text-center text-gray-900 w-full"
                            size="txtManropeBold16"
                          >
                            2-6 lakhs
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-center text-sm tracking-[0.10px] w-full"
                            size="txtManropeRegular14"
                          >
                            salary per year
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[64.8px] items-center justify-start max-w-[1040px] mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-[48.6px] items-center justify-start max-w-[801px] w-full">
                <div className="flex flex-col gap-[24.3px] items-center justify-start w-full">
                  <Text
                    className="text-[16.2px] text-center text-gray-900_7f tracking-[0.30px] w-full"
                    size="txtManropeSemiBold162"
                  >
                    BENEFITS
                  </Text>
                  <div className="flex flex-col gap-[16.2px] items-center justify-start w-full">
                    <Text
                      className="sm:text-[28.4px] md:text-[30.4px] text-[32.4px] text-black-900 text-center tracking-[0.30px] w-full"
                      size="txtManropeBold324"
                    >
                      What will you learn
                    </Text>
                    <Text
                      className="sm:text-[20.3px] md:text-[22.3px] text-[24.3px] text-black-900_7f text-center tracking-[0.30px] w-full"
                      size="txtManropeRegular243"
                    >
                      Sub-heading
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[267px] sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-center"
                  shape="round"
                  color="gray_900_01"
                >
                  Download Syllabus 🚀
                </Button>
              </div>
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center min-h-[auto] w-full">
                <div className="md:h-[181px] h-[203px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        Business communications
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Build communication skills.Learn cold calling and email
                        ettiquettes and practice with trainers and experts
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[5%] p-[9.29px] rounded-[9px] shadow-bs3 top-[0] w-[50px]">
                    <Button
                      className="flex items-center justify-center rounded-[16px] w-[33px]"
                      variant="outline"
                      color="deep_purple_A200_01_light_blue_A400_01"
                    >
                      <Img src="images/img_bxrupeesvg.png" alt="bxrupeesvg" />
                    </Button>
                  </div>
                </div>
                <div className="md:h-[181px] h-[204px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        Telecalling aptitude
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Learn problem solving, customer handling, logical
                        reasoning, customer & telesales fundamentals
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col font-firasans items-center justify-start left-[5%] p-2 rounded-[9px] shadow-bs3 top-[0] w-[16%]">
                    <div className="h-[26px] md:h-[29px] my-1 relative w-[95%]">
                      <Img
                        className="absolute bottom-[0] h-[21px] object-cover right-[0]"
                        src="images/img_vector.png"
                        alt="vector"
                      />
                      <Text
                        className="absolute bg-clip-text bg-gradient5  bg-white-A700 border border-solid deep_purple_A200_02_light_blue_A400_02_border2 flex h-[19px] items-center justify-center left-[0] rounded-[9px] text-[9.3px] text-center text-transparent top-[0] w-[19px]"
                        size="txtFiraSansRegular93"
                      >
                        28
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="md:h-[181px] h-[203px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        Industry knowledge
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Understand telesales and customer support in major
                        industries: Banking & finance, E-commerce & Ed-Tech
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="absolute flex items-center justify-center left-[5%] rounded-[9px] shadow-bs3 top-[0] w-[16%]"
                    color="white_A700"
                  >
                    <Img
                      src="images/img_frame1171277893.png"
                      alt="frame1171277893"
                    />
                  </Button>
                </div>
                <div className="md:h-[181px] h-[203px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        CRM & computer aptitutde
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Learn basic computer skills, MS Excel and CRM. Build
                        your computer aptitude to get right skills to get a
                        promotion.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[5%] p-[9.29px] rounded-[9px] shadow-bs3 top-[0] w-[50px]">
                    <Button
                      className="flex items-center justify-center rounded-[16px] w-[33px]"
                      variant="outline"
                      color="deep_purple_A200_01_light_blue_A400_01"
                    >
                      <Img src="images/img_bxrupeesvg.png" alt="bxrupeesvg" />
                    </Button>
                  </div>
                </div>
                <div className="md:h-[181px] h-[204px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        Placement Preparation
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Learn basic computer skills, MS Excel and CRM. Build
                        your computer aptitude to get right skills to get a
                        promotion.
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col font-firasans items-center justify-start left-[5%] p-2 rounded-[9px] shadow-bs3 top-[0] w-[16%]">
                    <div className="h-[26px] md:h-[29px] my-1 relative w-[95%]">
                      <Img
                        className="absolute bottom-[0] h-[21px] object-cover right-[0]"
                        src="images/img_vector.png"
                        alt="vector"
                      />
                      <Text
                        className="absolute bg-clip-text bg-gradient5  bg-white-A700 border border-solid deep_purple_A200_02_light_blue_A400_02_border3 flex h-[19px] items-center justify-center left-[0] rounded-[9px] text-[9.3px] text-center text-transparent top-[0] w-[19px]"
                        size="txtFiraSansRegular93"
                      >
                        28
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="md:h-[181px] h-[203px] relative w-full">
                  <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pb-6 pt-10 sm:px-5 px-6 rounded-[9px] w-[330px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900 w-auto"
                        size="txtManropeSemiBold2025"
                      >
                        Industry knowledge
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[294px] md:max-w-full text-[16.2px] text-black-900"
                        size="txtManropeRegular162"
                      >
                        Understand telesales and customer support in major
                        industries: Banking & finance, E-commerce & Ed-Tech
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="absolute flex items-center justify-center left-[5%] rounded-[9px] shadow-bs3 top-[0] w-[16%]"
                    color="white_A700"
                  >
                    <Img
                      src="images/img_frame1171277893.png"
                      alt="frame1171277893"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start max-w-[1040px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-12 items-start justify-start w-[400px] sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-center text-gray-900_7f tracking-[0.30px] w-auto"
                    size="txtManropeSemiBold16"
                  >
                    3 EASY STEPS
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start w-[400px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.30px] w-full"
                      size="txtManropeBold32Black900"
                    >
                      Everything is planned
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_7f sm:text-xl tracking-[0.30px] w-full"
                      size="txtManropeRegular24"
                    >
                      Week by week plan of the course
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[196px] text-center text-xl"
                  shape="round"
                  color="gray_900_01"
                >
                  Get started 🚀
                </Button>
              </div>
              <div className="bg-gray-50_01 flex md:flex-1 flex-col items-center justify-start p-[35px] sm:px-5 w-[56%] md:w-full">
                <div className="sm:h-[1465px] md:h-[582px] h-[585px] my-3.5 relative w-full">
                  <Line className="bg-gradient8  h-[490px] ml-[183px] my-auto w-px" />
                  <List
                    className="absolute flex flex-col gap-[39.44px] h-[585px] inset-[0] items-start m-auto w-[502px] md:w-full"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row gap-[32.87px] items-center justify-start my-0 w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-bold rounded-[13px] text-[16.43px] text-center tracking-[1.64px] w-[111px]"
                        color="white_A700"
                        size="md"
                      >
                        DAY 1{" "}
                      </Button>
                      <div className="bg-white-A700 border border-solid deep_purple_A200_05_light_blue_A400_04_border flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[39px]"
                          src="images/img_iconapplication.png"
                          alt="iconapplication"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.57px] items-start justify-start w-[246px]">
                        <Text
                          className="text-gray-900_01 text-xl w-full"
                          size="txtManropeSemiBold20Gray90001"
                        >
                          Application
                        </Text>
                        <Text
                          className="text-base text-gray-900_7f_01 w-full"
                          size="txtManropeRegular16Gray9007f01"
                        >
                          process complete!
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[32.87px] items-center justify-start my-0 w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-bold rounded-[13px] text-[16.43px] text-center tracking-[1.64px] w-[111px]"
                        color="white_A700"
                        size="md"
                      >
                        DAY 1 - 20
                      </Button>
                      <div className="bg-white-A700 border border-solid deep_purple_A200_06_light_blue_A400_05_border flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[39px]"
                          src="images/img_iconlearn.png"
                          alt="iconlearn"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.57px] items-start justify-start w-[246px]">
                        <Text
                          className="text-gray-900_01 text-xl w-full"
                          size="txtManropeSemiBold20Gray90001"
                        >
                          Learn
                        </Text>
                        <Text
                          className="leading-[26.00px] text-base text-gray-900_7f_01"
                          size="txtManropeRegular16Gray9007f01"
                        >
                          <>
                            with hiring managers
                            <br />
                            and trainers
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[32.87px] items-center justify-start my-0 w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-bold rounded-[13px] text-[16.43px] text-center tracking-[1.64px] w-[111px]"
                        color="white_A700"
                        size="md"
                      >
                        DAY 21
                      </Button>
                      <div className="bg-white-A700 border border-solid deep_purple_A200_07_light_blue_400_01_border flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[39px]"
                          src="images/img_iconpasstest.png"
                          alt="iconpasstest"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.57px] items-start justify-start w-[246px]">
                        <Text
                          className="text-gray-900_01 text-xl w-full"
                          size="txtManropeSemiBold20Gray90001"
                        >
                          Get certified
                        </Text>
                        <Text
                          className="text-base text-gray-900_7f_01 w-full"
                          size="txtManropeRegular16Gray9007f01"
                        >
                          by passing the achievement test
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[32.87px] items-center justify-start my-0 w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-bold rounded-[13px] text-[16.43px] text-center tracking-[1.64px] w-[111px]"
                        color="white_A700"
                        size="md"
                      >
                        DAY 21 - 28
                      </Button>
                      <div className="bg-white-A700 border border-solid deep_purple_A200_08_light_blue_400_02_border flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[39px]"
                          src="images/img_iconfixinterview.png"
                          alt="iconfixintervie"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.57px] items-start justify-start w-[246px]">
                        <Text
                          className="text-gray-900_01 text-xl w-full"
                          size="txtManropeSemiBold20Gray90001"
                        >
                          Fix interviews
                        </Text>
                        <Text
                          className="text-base text-gray-900_7f_01 w-full"
                          size="txtManropeRegular16Gray9007f01"
                        >
                          in placement drive
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[32.87px] items-center justify-start my-0 w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-bold rounded-[13px] text-[16.43px] text-center tracking-[1.64px] w-[111px]"
                        color="white_A700"
                        size="md"
                      >
                        DAY 28
                      </Button>
                      <div className="bg-white-A700 border border-solid deep_purple_A200_09_blue_400_01_border flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                        <Img
                          className="h-[39px] md:h-auto object-cover w-[39px]"
                          src="images/img_iconjobyoulove.png"
                          alt="iconjobyoulove"
                        />
                      </div>
                      <div className="flex flex-col gap-[6.57px] items-start justify-start w-[246px]">
                        <Text
                          className="text-gray-900_01 text-xl w-full"
                          size="txtManropeSemiBold20Gray90001"
                        >
                          Get a job
                        </Text>
                        <Text
                          className="text-base text-gray-900_7f_01 w-full"
                          size="txtManropeRegular16Gray9007f01"
                        >
                          of your choice!
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 flex flex-col items-center justify-end p-[5px] w-full">
              <div className="flex flex-col justify-start max-w-[1333px] mt-[31px] mx-auto md:px-5 w-full">
                <div className="bg-deep_orange-500 h-[3px] md:ml-[0] ml-[740px] mr-[590px] rounded-[1px] w-[3px]"></div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                  <Img
                    className="h-4 mb-[281px] md:mt-0 mt-[153px] rounded-[1px] w-4"
                    src="images/img_star2_16x16.svg"
                    alt="starTwo"
                  />
                  <div className="bg-deep_orange-500 h-[3px] mb-[57px] md:mt-0 mt-[390px] rounded-[1px] w-[3px]"></div>
                  <Img
                    className="h-[19px] md:ml-[0] ml-[54px] md:mt-0 mt-[37px] rounded-[3px]"
                    src="images/img_question_indigo_a200.svg"
                    alt="question"
                  />
                  <div className="border border-deep_purple-A700_01 border-solid h-1.5 md:ml-[0] ml-[13px] md:mt-0 mt-[296px] rounded-[50%] w-1.5"></div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[33px] md:mt-0 mt-0.5 w-[39%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-[46px] justify-start sm:mt-0 mt-[22px] w-[30%] sm:w-full">
                        <div className="bg-deep_orange-500 h-[3px] md:ml-[0] ml-[111px] mr-[37px] rounded-[1px] w-[3px]"></div>
                        <div className="h-[375px] pb-[33.01px] pt-[11px] px-[11px] relative w-[151px]">
                          <div className="absolute bottom-[9%] flex h-[359px] md:h-[375px] inset-x-[0] justify-end mx-auto w-full">
                            <div className="bg-gradient9  h-[375px] mt-auto mx-auto rounded-tl-[137px] rounded-tr-[137px] w-full"></div>
                            <div className="absolute bottom-[9%] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-[135px]">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-auto">
                                <Text
                                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[0.41px] w-auto"
                                  size="txtManropeBold24Gray900"
                                >
                                  Rs. 25,000
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-900_7f tracking-[0.41px] w-auto"
                                  size="txtManropeSemiBold16"
                                >
                                  salary per month
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Img
                                  className="h-[27px] md:h-auto object-cover w-[99px]"
                                  src="images/img_image29_31x112.png"
                                  alt="imageTwentyNine"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col gap-[5.5px] inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                            <div className="relative w-[130px]">
                              <Img
                                className="absolute h-[50px] object-cover right-[0] top-[0] w-[55px] sm:w-full"
                                src="images/img_crown1.png"
                                alt="crownOne"
                              />
                              <Img
                                className="h-[129px] mt-auto mx-auto relative rounded-[50%] w-[129px]"
                                src="images/img_ellipse412.png"
                                alt="ellipse412"
                              />
                            </div>
                            <Text
                              className="text-center text-gray-900 text-xl w-full"
                              size="txtManropeSemiBold20Gray900"
                            >
                              Shubham
                            </Text>
                            <Text
                              className="text-base text-center text-gray-900_7f w-full"
                              size="txtManropeMedium16"
                            >
                              Senior Telecaller
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[436px] md:h-[447px] mb-[11px] pb-[36.38px] pt-[12.13px] px-[12.13px] relative w-[166px]">
                        <div className="absolute bottom-[8%] flex h-[418px] md:h-[436px] inset-x-[0] justify-end mx-auto w-full">
                          <div className="bg-gradient9  h-[436px] mt-auto mx-auto rounded-tl-[151px] rounded-tr-[151px] w-full"></div>
                          <div className="absolute bottom-[17%] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-[142px]">
                            <div className="flex flex-col gap-3 items-start justify-start w-auto">
                              <Text
                                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[0.45px] w-auto"
                                size="txtManropeExtraBold24"
                              >
                                Rs. 25,000
                              </Text>
                              <Text
                                className="text-base text-center text-gray-900_7f tracking-[0.45px] w-auto"
                                size="txtManropeSemiBold16"
                              >
                                salary per month
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Img
                                className="h-[30px] md:h-auto object-cover w-[109px]"
                                src="images/img_image29_31x112.png"
                                alt="imageTwentyNine_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col gap-[6.06px] inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                          <div className="relative w-36">
                            <Img
                              className="absolute h-14 object-cover right-[0] top-[0] w-[60px] sm:w-full"
                              src="images/img_crown1.png"
                              alt="crownOne_One"
                            />
                            <Img
                              className="h-[142px] mt-auto mx-auto relative rounded-[50%] w-[142px]"
                              src="images/img_ellipse412_142x142.png"
                              alt="ellipse412_One"
                            />
                          </div>
                          <Text
                            className="text-center text-gray-900 text-xl w-full"
                            size="txtManropeSemiBold20Gray900"
                          >
                            Shubham
                          </Text>
                          <Text
                            className="text-base text-center text-gray-900_7f w-full"
                            size="txtManropeMedium16"
                          >
                            Senior Telecaller
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[37px] items-center justify-start sm:mt-0 mt-[15px] w-[30%] sm:w-full">
                        <Img
                          className="h-[19px] rounded-[3px]"
                          src="images/img_home.svg"
                          alt="home_One"
                        />
                        <div className="h-[375px] pb-[33.01px] pt-[11px] px-[11px] relative w-[151px]">
                          <div className="absolute bottom-[9%] flex h-[359px] md:h-[375px] inset-x-[0] justify-end mx-auto w-full">
                            <div className="bg-gradient9  h-[375px] mt-auto mx-auto rounded-tl-[137px] rounded-tr-[137px] w-full"></div>
                            <div className="absolute bottom-[9%] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-[135px]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                                <Text
                                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[0.41px] w-auto"
                                  size="txtManropeBold24Gray900"
                                >
                                  Rs. 25,000
                                </Text>
                                <Text
                                  className="text-base text-center text-gray-900_7f tracking-[0.41px] w-auto"
                                  size="txtManropeSemiBold16"
                                >
                                  salary per month
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Img
                                  className="h-[27px] md:h-auto object-cover w-[99px]"
                                  src="images/img_image29_31x112.png"
                                  alt="imageTwentyNine_Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col gap-[5.5px] inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                            <div className="relative w-[130px]">
                              <Img
                                className="absolute h-[50px] object-cover right-[0] top-[0] w-[55px] sm:w-full"
                                src="images/img_crown1.png"
                                alt="crownOne_Two"
                              />
                              <Img
                                className="h-[129px] mt-auto mx-auto relative rounded-[50%] w-[129px]"
                                src="images/img_ellipse412_129x129.png"
                                alt="ellipse412_Two"
                              />
                            </div>
                            <Text
                              className="text-center text-gray-900 text-xl w-full"
                              size="txtManropeSemiBold20Gray900"
                            >
                              Shubham
                            </Text>
                            <Text
                              className="text-base text-center text-gray-900_7f w-full"
                              size="txtManropeMedium16"
                            >
                              Senior Telecaller
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_purple-A700_02 h-[3px] mb-[313px] ml-7 md:ml-[0] md:mt-0 mt-[134px] rounded-[1px] w-[3px]"></div>
                  <div className="flex md:flex-1 flex-col justify-start ml-16 md:ml-[0] w-[43%] md:w-full">
                    <div className="border border-pink-A400 border-solid h-1.5 md:ml-[0] ml-[425px] rounded-[50%] w-1.5"></div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[13px] w-full">
                      <div className="bg-gray-500 h-[3px] mb-[9px] sm:mt-0 mt-[242px] rounded-[1px] w-[3px]"></div>
                      <div className="flex flex-col sm:ml-[0] ml-[26px] relative w-[70%] sm:w-full">
                        <div className="flex flex-col gap-12 items-start justify-start m-auto w-[400px] sm:w-full">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                            <Text
                              className="text-base text-center text-gray-900_7f tracking-[0.30px] w-auto"
                              size="txtManropeSemiBold16"
                            >
                              OUR STUDENTS
                            </Text>
                            <div className="flex flex-col gap-4 items-start justify-start w-[400px] sm:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.30px] w-full"
                                size="txtManropeBold32Black900"
                              >
                                Success stories
                              </Text>
                              <Text
                                className="max-w-[400px] md:max-w-full text-2xl md:text-[22px] text-black-900_7f sm:text-xl tracking-[0.30px]"
                                size="txtManropeRegular24"
                              >
                                30,000+ students placed across India...
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[19px] rounded-[3px]"
                            src="images/img_question.svg"
                            alt="question_One"
                          />
                          <Button
                            className="cursor-pointer font-medium min-w-[196px] text-center text-xl"
                            shape="round"
                            color="gray_900_01"
                          >
                            Get started 🚀
                          </Button>
                        </div>
                        <div className="bg-orange-500 h-[3px] ml-auto mr-[155px] mt-[-0.25px] rounded-[1px] w-[3px] z-[1]"></div>
                      </div>
                      <div className="bg-orange-700 h-[3px] mb-[87px] sm:ml-[0] ml-[117px] sm:mt-0 mt-[164px] rounded-[1px] w-[3px]"></div>
                      <div className="bg-teal-400_01 h-[3px] mb-[209px] sm:ml-[0] ml-[19px] sm:mt-0 mt-[42px] rounded-[1px] w-[3px]"></div>
                    </div>
                    <div className="border border-green-A700 border-solid h-1.5 md:ml-[0] ml-[397px] mt-[63px] rounded-[50%] w-1.5"></div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[9px] mt-[31px] w-[97%] md:w-full">
                      <Img
                        className="h-4 mb-3.5 rounded-[1px] w-4"
                        src="images/img_star1_1.svg"
                        alt="starOne"
                      />
                      <Img
                        className="h-[19px] mt-[11px]"
                        src="images/img_cursor.svg"
                        alt="cursor"
                      />
                    </div>
                    <div className="bg-pink-A200 h-[3px] md:ml-[0] ml-[259px] mr-[311px] mt-2 rounded-[1px] w-[3px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1040px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[792px] w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="text-base text-center text-gray-900_7f tracking-[0.30px] w-full"
                    size="txtManropeSemiBold16"
                  >
                    APPRECIATION
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[0.30px] w-full"
                      size="txtManropeBold32Black900"
                    >
                      Listen to our employers
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_7f text-center sm:text-xl tracking-[0.30px] w-full"
                      size="txtManropeRegular24"
                    >
                      See what top managers are saying about our Ascend students
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1040px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col h-[275px] md:h-auto items-start justify-start p-4 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-20 md:h-auto object-cover rounded-lg w-20"
                        src="images/img_photo.png"
                        alt="photo"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtManropeSemiBold20Gray900"
                        >
                          Mr. Pushkar Dhami
                        </Text>
                        <Text
                          className="text-base text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtManropeRegular16Gray900"
                        >
                          Senior HR
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-5 md:h-auto object-cover w-[72px]"
                            src="images/img_image29_31x112.png"
                            alt="imageTwentyNine"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[20.00px] text-gray-900_7f text-sm"
                      size="txtManropeRegular14Gray9007f"
                    >
                      <>
                        To get admission in the telecaller certification
                        training, you have to qualify an interview with apna
                        Admissions manager. <br />
                        <br />
                        You have to secure your seat 5 days before the batch
                        start date.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col h-[275px] md:h-auto items-start justify-start p-4 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-20 md:h-auto object-cover rounded-lg w-20"
                        src="images/img_photo.png"
                        alt="photo"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtManropeSemiBold20Gray900"
                        >
                          Mr. Pushkar Dhami
                        </Text>
                        <Text
                          className="text-base text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtManropeRegular16Gray900"
                        >
                          Senior HR
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-5 md:h-auto object-cover w-[72px]"
                            src="images/img_image29_31x112.png"
                            alt="imageTwentyNine"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[20.00px] text-gray-900_7f text-sm"
                      size="txtManropeRegular14Gray9007f"
                    >
                      <>
                        To get admission in the telecaller certification
                        training, you have to qualify an interview with apna
                        Admissions manager. <br />
                        <br />
                        You have to secure your seat 5 days before the batch
                        start date.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col h-[275px] md:h-auto items-start justify-start p-4 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Img
                        className="h-20 md:h-auto object-cover rounded-lg w-20"
                        src="images/img_photo.png"
                        alt="photo"
                      />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtManropeSemiBold20Gray900"
                        >
                          Mr. Pushkar Dhami
                        </Text>
                        <Text
                          className="text-base text-center text-gray-900 tracking-[0.10px] w-auto"
                          size="txtManropeRegular16Gray900"
                        >
                          Senior HR
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-5 md:h-auto object-cover w-[72px]"
                            src="images/img_image29_31x112.png"
                            alt="imageTwentyNine"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[20.00px] text-gray-900_7f text-sm"
                      size="txtManropeRegular14Gray9007f"
                    >
                      <>
                        To get admission in the telecaller certification
                        training, you have to qualify an interview with apna
                        Admissions manager. <br />
                        <br />
                        You have to secure your seat 5 days before the batch
                        start date.
                      </>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between max-w-[1040px] mx-auto md:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-12 items-start justify-start w-[400px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-[400px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.30px] w-full"
                      size="txtManropeBold32Black900"
                    >
                      1200+ openings
                    </Text>
                    <Text
                      className="max-w-[400px] md:max-w-full text-2xl md:text-[22px] text-black-900_7f sm:text-xl tracking-[0.30px]"
                      size="txtManropeRegular24"
                    >
                      500+ candidates registered last week. You’re next, come
                      join us...!
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[196px] text-center text-xl"
                  shape="round"
                  color="gray_900_01"
                >
                  Get started 🚀
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-col md:gap-10 gap-16 items-center justify-start w-[576px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[437px] sm:w-full">
                    <div className="flex flex-col items-center justify-start w-[437px] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.30px] w-full"
                            size="txtManropeBold24"
                          >
                            Frequently asked questions
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <AscendWebLandingPageFaq className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-[34px] items-start justify-between px-3 py-4 rounded-lg w-full" />
                  <AscendWebLandingPageFaq1 className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-col flex-row gap-[35px] items-start justify-start px-3 py-4 rounded-lg w-full" />
                  <List
                    className="flex flex-col gap-2 items-center w-full"
                    orientation="vertical"
                  >
                    {new Array(3).fill({}).map((props, index) => (
                      <React.Fragment key={`AscendWebLandingPageFaq${index}`}>
                        <AscendWebLandingPageFaq
                          className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-row gap-[34px] items-start justify-between px-3 py-4 rounded-lg w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start max-w-[1440px] w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtManropeRegular16Black900"
              >
                Made in India with ❤️
              </Text>
              <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[61px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start max-w-[1040px] mt-0.5 mx-auto w-full">
                  <div className="flex md:flex-col flex-row font-firasans md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <div className="flex flex-row gap-[14.77px] items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_computer.svg"
                          alt="computer_One"
                        />
                        <Line className="bg-gradient  h-[31px] w-px" />
                        <div className="flex flex-col items-center justify-start w-auto">
                          <div className="flex flex-row gap-[7.31px] items-center justify-start w-auto">
                            <Img
                              className="h-[27px] md:h-auto object-cover w-[27px]"
                              src="images/img_frame1171277489.png"
                              alt="frame1171277489_One"
                            />
                            <div className="md:h-5 h-[27px] py-[3.65px] relative w-[93px]">
                              <Text
                                className="absolute bottom-[0] left-[0] text-[16.44px] text-white-A700 tracking-[0.14px] w-auto"
                                size="txtFiraSansSemiBold1644"
                              >
                                apna
                              </Text>
                              <Text
                                className="absolute bg-clip-text bg-gradient1  h-max inset-y-[0] my-auto right-[0] text-[16.44px] text-transparent tracking-[0.14px] w-auto"
                                size="txtFiraSansSemiBold1644Orange300"
                              >
                                Ascend
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start w-auto">
                        <Button
                          className="flex h-12 items-center justify-center rounded-[50%] w-12"
                          shape="circle"
                          color="white_A700"
                        >
                          <Img
                            className="h-6"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                        </Button>
                        <Button
                          className="flex h-12 items-center justify-center rounded-[50%] w-12"
                          shape="circle"
                          color="white_A700"
                        >
                          <Img
                            className="h-6"
                            src="images/img_play_gray_900_01.svg"
                            alt="play"
                          />
                        </Button>
                        <Button
                          className="flex h-12 items-center justify-center rounded-[50%] w-12"
                          shape="circle"
                          color="white_A700"
                        >
                          <Img
                            className="h-6"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </Button>
                        <Button
                          className="flex h-12 items-center justify-center rounded-[50%] w-12"
                          shape="circle"
                          color="white_A700"
                        >
                          <Img
                            className="h-6"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </Button>
                        <Img
                          className="h-12 rounded-[50%] w-12"
                          src="images/img_frame1171277933.svg"
                          alt="frame1171277933"
                        />
                      </div>
                      <div className="flex flex-col font-manrope gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700 text-xs tracking-[0.06px] w-auto"
                          size="txtManropeSemiBold12"
                        >
                          DOWNLOAD OUR APP
                        </Text>
                        <Img
                          className="h-11 w-[286px]"
                          src="images/img_frame1171277937.svg"
                          alt="frame1171277937"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col flex-row font-manrope sm:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-16 grid grid-cols-2 w-[67%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-6 items-start justify-start w-[116px]">
                          <Text
                            className="text-white-A700 text-xs tracking-[0.06px] w-full"
                            size="txtManropeBold12"
                          >
                            POPULAR COURSES
                          </Text>
                          <div className="flex flex-col gap-4 items-start justify-start w-full">
                            <Text
                              className="text-white-A700_7f text-xs tracking-[0.06px] w-full"
                              size="txtManropeMedium12"
                            >
                              Telecalling Course
                            </Text>
                            <Text
                              className="text-white-A700_7f text-xs tracking-[0.06px] w-full"
                              size="txtManropeMedium12"
                            >
                              Computer Course
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-start w-auto">
                          <Text
                            className="text-white-A700 text-xs tracking-[0.06px] w-auto"
                            size="txtManropeBold12"
                          >
                            POPULAR COURSES
                          </Text>
                          <div className="flex flex-col gap-4 items-start justify-start w-auto">
                            <Text
                              className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                              size="txtManropeMedium12"
                            >
                              Telecalling Course
                            </Text>
                            <Text
                              className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                              size="txtManropeMedium12"
                            >
                              Computer Course
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700 text-xs tracking-[0.06px] w-auto"
                          size="txtManropeBold12"
                        >
                          ABOUT US
                        </Text>
                        <div className="flex flex-col gap-4 items-start justify-start w-auto">
                          <Text
                            className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                            size="txtManropeMedium12"
                          >
                            Meet our team
                          </Text>
                          <Text
                            className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                            size="txtManropeMedium12"
                          >
                            Hiring
                          </Text>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                          >
                            <Text size="txtManropeMedium12">Contact us</Text>
                          </a>
                          <Text
                            className="text-white-A700_7f text-xs tracking-[0.06px] w-auto"
                            size="txtManropeMedium12"
                          >
                            Refund Policy
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-white-A700_7f text-xs tracking-[0.06px]"
                    size="txtManropeSemiBold12WhiteA7007f"
                  >
                    2022 Apna | All rights reserved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AscendWebCoursePagePage;
