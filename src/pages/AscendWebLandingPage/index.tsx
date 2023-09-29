import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AscendWebLandingPageFaq from "components/AscendWebLandingPageFaq";
import AscendWebLandingPageFaq1 from "components/AscendWebLandingPageFaq1";

const AscendWebLandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
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
          <div className="flex sm:flex-col flex-row font-firasans gap-[11.36px] items-center justify-start mb-9 md:ml-[0] ml-[323px] mr-[98px] md:mt-0 mt-[39px] w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_computer.svg"
              alt="computer"
            />
            <Line className="bg-gradient  h-6 sm:h-px sm:w-full w-px" />
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-[5.62px] items-center justify-start w-auto">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
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
        <div className="flex flex-col md:gap-10 gap-[108px] h-[5811px] md:h-auto items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[200px] w-full">
          <div className="bg-gradient2  md:h-[341px] sm:h-[512px] h-[654px] pt-16 md:px-5 relative w-full">
            <div className="absolute flex flex-col gap-12 inset-x-[0] items-center justify-start mx-auto top-[10%] w-auto">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="text-black-900_7f text-center text-xl w-full"
                  size="txtManropeSemiBold20"
                >
                  100% Guarenteed Job in 28 days
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtManropeExtraBold32"
                >
                  Top companies are hiring, are you ready?
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[218px] text-center text-xl"
                shape="round"
                color="gray_900_01"
              >
                Get hired now 🔥
              </Button>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[341px] h-[511px] sm:h-[512px] inset-x-[0] mx-auto pt-[131px] md:px-10 sm:px-5 px-[131px] w-full"
              style={{ backgroundImage: "url('images/img_group8.png')" }}
            >
              <div className="absolute bottom-[0] md:h-[341px] h-[345px] sm:h-[512px] inset-x-[0] mx-auto w-[55%] md:w-full">
                <div className="absolute bottom-[0] h-[327px] md:h-[341px] sm:h-[512px] inset-x-[0] mx-auto w-[99%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="h-[234px] md:h-[236px] relative w-[30%] sm:w-full">
                        <Img
                          className="h-[236px] m-auto object-cover w-full"
                          src="images/img_shutterstock1297143553.png"
                          alt="shutterstock129"
                        />
                        <div className="absolute bg-white-A700 border border-solid border-white-A700 bottom-[23%] flex flex-col items-center justify-start left-[0] px-3 py-1 rotate-[-14deg] rounded-lg w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Img
                              className="h-[45px] md:h-auto object-cover w-[85px] sm:w-full"
                              src="images/img_image29.png"
                              alt="imageTwentyNine"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-[9px] left-[6%] rounded-sm top-[7%] w-2.5"
                          src="images/img_map.svg"
                          alt="map"
                        />
                      </div>
                      <div className="h-[235px] md:h-[236px] relative w-[27%] sm:w-full">
                        <Img
                          className="h-[236px] m-auto object-cover w-full"
                          src="images/img_shutterstock666486763.png"
                          alt="shutterstock666"
                        />
                        <div className="absolute bg-white-A700 border border-solid border-white-A700 bottom-[14%] flex flex-col items-center justify-start left-[15%] px-3 py-1 rotate-[8deg] rounded-lg w-auto">
                          <Img
                            className="h-[41px] md:h-auto object-cover w-[75px] sm:w-full"
                            src="images/img_image40.png"
                            alt="imageForty"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex h-[327px] md:h-[341px] inset-[0] justify-end m-auto rotate-[3deg] w-[46%]">
                    <Img
                      className="h-[341px] mt-auto mx-auto object-cover w-full"
                      src="images/img_shutterstock26.png"
                      alt="shutterstockTwentySix"
                    />
                    <div className="absolute flex flex-row items-start justify-start left-[2%] top-[3%] w-[70%]">
                      <div className="bg-deep_orange-A200 h-1 mb-[93px] mt-[158px] rounded-[50%] w-1"></div>
                      <div className="flex flex-col md:gap-10 gap-[188px] justify-start ml-[98px] w-[36%]">
                        <Img
                          className="h-2.5 ml-6 md:ml-[0] rounded-[1px] w-2.5"
                          src="images/img_play.svg"
                          alt="play"
                        />
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-start justify-start px-3 py-1 rotate-[16deg] rounded-lg w-auto">
                          <Img
                            className="h-[42px] md:h-auto object-cover w-[63px] sm:w-full"
                            src="images/img_image40_42x63.png"
                            alt="imageForty_One"
                          />
                        </div>
                      </div>
                      <div className="bg-deep_orange-A400 h-0.5 mb-[70px] ml-[54px] mt-[183px] rounded-[50%] w-0.5"></div>
                    </div>
                    <div className="absolute bg-deep_purple-A700 h-1 left-[0] rounded-[50%] top-[1%] w-1"></div>
                  </div>
                </div>
                <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[12%] top-[11%] w-[65%]">
                  <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-start justify-start sm:mt-0 mt-[29px] px-3 py-1 rotate-[12deg] rounded-lg w-auto">
                    <Img
                      className="h-[39px] md:h-auto object-cover w-[86px] sm:w-full"
                      src="images/img_image40_39x86.png"
                      alt="imageForty_Two"
                    />
                  </div>
                  <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-start justify-start mb-[22px] sm:ml-[0] ml-[214px] px-3 py-1 rotate-[-15deg] rounded-lg w-auto">
                    <Img
                      className="h-11 md:h-auto object-cover w-[83px] sm:w-full"
                      src="images/img_image40_44x83.png"
                      alt="imageForty_Three"
                    />
                  </div>
                  <Img
                    className="h-2 mb-[63px] sm:ml-[0] ml-[59px] sm:mt-0 mt-2.5 rounded-[1px] w-2"
                    src="images/img_star1.svg"
                    alt="starOne"
                  />
                </div>
                <Button
                  className="absolute flex h-[63px] items-center justify-center left-[12%] rounded-[31px] top-[0] w-[63px]"
                  color="white_A700"
                >
                  <Img
                    className="h-10"
                    src="images/img_adstrendingup.svg"
                    alt="adstrendingup"
                  />
                </Button>
                <div className="absolute md:h-[61px] h-[65px] right-[0] rotate-[-15deg] top-[14%] w-[8%]">
                  <div className="absolute bg-white-A700 bottom-[0] h-[61px] inset-x-[0] mx-auto rounded-[30px] w-[61px]"></div>
                  <div className="absolute md:h-[38px] h-[52px] right-[8%] rotate-[-14deg] top-[0] w-[73%]">
                    <div className="absolute md:h-[38px] h-[42px] right-[0] top-[0] w-[89%]">
                      <div className="absolute h-[37px] left-[0] top-[0] w-[88%]">
                        <div className="absolute flex flex-col items-center justify-start right-[0] top-[5%] w-1/2">
                          <div className="flex flex-row items-start justify-evenly w-full">
                            <Img
                              className="h-2 mb-[5px] w-2"
                              src="images/img_play_cyan_200.svg"
                              alt="play_One"
                            />
                            <Img
                              className="h-2 mt-[5px] w-2"
                              src="images/img_send.svg"
                              alt="send"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-[37px] inset-[0] justify-center m-auto"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[38px] right-[0]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                    <div className="absolute bg-amber-300_01 bottom-[0] md:h-3.5 h-[31px] left-[0] p-1 rounded-[15px] w-[31px]">
                      <div className="absolute bg-amber-400 md:h-3.5 h-[21px] inset-[0] justify-center m-auto pr-[3px] py-[3px] rounded-[10px] w-[21px]">
                        <Img
                          className="absolute h-3.5 inset-[0] justify-center m-auto w-3.5"
                          src="images/img_adsstar.svg"
                          alt="adsstar"
                        />
                        <Img
                          className="absolute bottom-[14%] h-2.5 left-[0] w-2.5"
                          src="images/img_vector10.svg"
                          alt="vectorTen"
                        />
                      </div>
                      <Img
                        className="absolute h-2.5 right-[13%] top-[26%] w-[11px]"
                        src="images/img_vector11.svg"
                        alt="vectorEleven"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 border border-solid border-white-A700 bottom-[38%] flex flex-col items-center justify-start left-[26%] px-3 py-2 rotate-[26deg] rounded-lg w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Img
                    className="h-[51px] md:h-auto object-cover w-[79px] sm:w-full"
                    src="images/img_image31.png"
                    alt="imageThirtyOne"
                  />
                </div>
              </div>
              <div className="absolute bottom-[12%] flex flex-col justify-start right-[9%] w-[12%]">
                <div className="bg-deep_orange-A200 h-1 md:ml-[0] ml-[55px] mr-[110px] rounded-[50%] w-1"></div>
                <div className="flex flex-row items-start justify-between mt-[52px] w-full">
                  <div className="bg-deep_purple-A700 h-1 mb-3 mt-[58px] rounded-[50%] w-1"></div>
                  <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-start justify-start px-3 py-2 rotate-[26deg] rounded-lg w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Img
                        className="h-12 md:h-auto object-cover w-[79px] sm:w-full"
                        src="images/img_image32.png"
                        alt="imageThirtyTwo"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="h-2.5 md:ml-[0] ml-[72px] mt-[72px] rounded-[1px] w-2.5"
                  src="images/img_play_blue_a100.svg"
                  alt="play_Two"
                />
              </div>
              <div className="absolute flex flex-row items-start justify-between right-[37%] top-[30%] w-[9%]">
                <Img
                  className="h-[9px] mt-1 rounded-sm w-2.5"
                  src="images/img_fire.svg"
                  alt="fire"
                />
                <div className="border border-solid border-teal-400 h-1 rounded-[50%] w-1"></div>
              </div>
              <Img
                className="absolute h-2.5 left-[23%] rounded-[1px] top-[26%] w-2.5"
                src="images/img_play_blue_a100.svg"
                alt="play_Three"
              />
              <div className="absolute bg-deep_purple-A700 bottom-[30%] h-1 left-[18%] rounded-[50%] w-1"></div>
              <Img
                className="absolute h-2 left-[20%] rounded-[1px] top-[44%] w-2"
                src="images/img_star2.svg"
                alt="starTwo"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start overflow-auto w-auto md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start md:px-5 w-auto sm:w-full">
              <Text
                className="text-base text-center text-gray-900_7f tracking-[0.30px] w-auto"
                size="txtManropeSemiBold16"
              >
                OUR CLIENTELE
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 tracking-[0.30px] w-auto"
                size="txtManropeBold32"
              >
                100+ companies hiring from us
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start max-w-[1040px] mx-auto w-full">
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
                    Join apnaAscend now...!
                  </Text>
                  <Text
                    className="max-w-[400px] md:max-w-full text-2xl md:text-[22px] text-black-900_7f sm:text-xl tracking-[0.30px]"
                    size="txtManropeRegular24"
                  >
                    Super easy to quickly grab your dream job
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
            <div className="bg-gray-50_01 md:h-[248px] sm:h-[445px] h-[684px] p-[25px] sm:px-5 relative w-[56%] md:w-full">
              <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[4%] top-[4%] w-[87%]">
                <div className="flex flex-col justify-start">
                  <div className="bg-light_blue-800 h-[3px] md:ml-[0] ml-[345px] mr-[75px] rounded-[1px] w-[3px]"></div>
                  <div className="flex flex-row gap-[147px] items-start justify-start md:ml-[0] ml-[35px] w-[41%] md:w-full">
                    <div className="bg-teal-400_01 h-[3px] mb-4 rounded-[1px] w-[3px]"></div>
                    <Img
                      className="h-[19px] rounded-[3px]"
                      src="images/img_question.svg"
                      alt="question"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[26px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[321px] rounded-[12px] shadow-bs2"
                      leftIcon={
                        <div className="mr-[19px] outline-[2px] outline bg-white-A700 deep_purple_A200_light_blue_A400_border">
                          <Img src="images/img_10.png" alt="10" />
                        </div>
                      }
                      color="white_A700"
                      size="lg"
                    >
                      <div className="!text-black-900 font-medium text-left text-xl">
                        Take Apna Achiever’s Test
                      </div>
                    </Button>
                    <div className="bg-amber-300 flex flex-col h-[76px] items-center justify-start mb-1 sm:mt-0 mt-2 pt-0.5 rounded-[50%] w-[76px]">
                      <Img
                        className="h-[74px] md:h-auto object-cover rounded-tl-[38px] rounded-tr-[38px] w-full"
                        src="images/img_shutterstock18.png"
                        alt="shutterstockEighteen"
                      />
                    </div>
                    <div className="border border-solid border-yellow-A700 h-1.5 rounded-[50%] w-1.5"></div>
                  </div>
                </div>
                <div className="bg-blue-400 h-[3px] mb-[99px] sm:mt-0 mt-9 rounded-[1px] w-[3px]"></div>
              </div>
              <div className="absolute bottom-[12%] flex flex-col gap-[30px] justify-start left-[4%] w-[54%]">
                <Img
                  className="h-[19px] md:ml-[0] ml-[179px] rounded-[3px]"
                  src="images/img_home.svg"
                  alt="home_One"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start px-[17.6px] py-[19.2px] rounded-[12px] shadow-bs2 w-auto">
                  <div className="flex flex-row gap-[19.2px] items-center justify-start w-auto">
                    <Img
                      className="h-[51px] md:h-auto object-cover w-[33px]"
                      src="images/img_3.png"
                      alt="Three"
                    />
                    <Text
                      className="leading-[32.00px] max-w-[220px] md:max-w-full text-black-900 text-xl"
                      size="txtManropeMedium20"
                    >
                      Get direct calls from Companies
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col justify-start right-[4%] top-[29%] w-[58%]">
                <div className="bg-light_blue-800 h-[3px] ml-72 md:ml-[0] mr-[43px] rounded-[1px] w-[3px]"></div>
                <Img
                  className="h-[19px] md:ml-[0] ml-[140px] mt-4 rounded-[3px]"
                  src="images/img_question_indigo_a200.svg"
                  alt="question_One"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start mt-10 px-4 py-[19.2px] rounded-[12px] shadow-bs2 w-auto">
                  <div className="flex flex-row gap-[19.2px] items-center justify-start w-auto">
                    <Img
                      className="h-[51px] md:h-auto object-cover w-[33px]"
                      src="images/img_9.png"
                      alt="Nine"
                    />
                    <Text
                      className="leading-[32.00px] max-w-[249px] md:max-w-full text-black-900 text-xl"
                      size="txtManropeMedium20"
                    >
                      Qualify & become Apna Achiever
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col justify-start left-[9%] top-[27%] w-[26%]">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Img
                    className="h-[129px] md:h-auto mb-[54px] object-cover"
                    src="images/img_vector144.png"
                    alt="vector144"
                  />
                  <div className="bg-orange-A200 flex flex-col h-[76px] items-center justify-start mt-[107px] px-[5px] rounded-[50%] w-[76px]">
                    <Img
                      className="h-[76px] md:h-auto object-cover w-full"
                      src="images/img_shutterstock18_76x66.png"
                      alt="shutterstockEighteen_One"
                    />
                  </div>
                </div>
                <div className="bg-light_blue-800 h-[3px] md:ml-[0] ml-[107px] mr-[39px] mt-3 rounded-[1px] w-[3px]"></div>
                <div className="border border-pink-A400 border-solid h-1.5 ml-1.5 md:ml-[0] mt-[43px] rounded-[50%] w-1.5"></div>
              </div>
              <div className="absolute bottom-[4%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[9%] w-[72%]">
                <Img
                  className="h-[19px] mb-0.5"
                  src="images/img_cursor.svg"
                  alt="cursor"
                />
                <div className="bg-light_blue-800 h-[3px] sm:ml-[0] ml-[169px] sm:mt-0 mt-[19px] rounded-[1px] w-[3px]"></div>
                <Img
                  className="h-4 mb-1 sm:ml-[0] ml-[206px] rounded-[1px] w-4"
                  src="images/img_star1_16x16.svg"
                  alt="starOne_One"
                />
              </div>
              <div className="absolute bottom-[13%] flex flex-col justify-start right-[9%] w-[30%]">
                <Img
                  className="h-28 md:h-auto md:ml-[0] ml-[65px] object-cover"
                  src="images/img_vector145.png"
                  alt="vector145"
                />
                <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                  <div className="bg-teal-400 flex flex-col h-[76px] items-center justify-start rounded-[50%] w-[76px]">
                    <Img
                      className="h-[76px] md:h-auto rounded-[50%] w-[76px]"
                      src="images/img_shutterstock18_76x76.png"
                      alt="shutterstockEighteen_Two"
                    />
                  </div>
                  <div className="bg-teal-A700 h-[3px] mb-[73px] rounded-[1px] w-[3px]"></div>
                </div>
                <div className="bg-deep_orange-500 h-[3px] md:ml-[0] ml-[76px] mr-[92px] rounded-[1px] w-[3px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[64.76px] items-center justify-start max-w-[1040px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start max-w-[801px] w-full">
              <div className="flex flex-col gap-[24.29px] items-center justify-start w-full">
                <Text
                  className="text-[16.19px] text-center text-gray-900_7f tracking-[0.30px] w-full"
                  size="txtManropeSemiBold1619"
                >
                  OUR RESOURCES
                </Text>
                <div className="flex flex-col gap-[16.19px] items-center justify-start w-full">
                  <Text
                    className="sm:text-[28.380000000000003px] md:text-[30.380000000000003px] text-[32.38px] text-black-900 text-center tracking-[0.30px] w-full"
                    size="txtManropeBold3238"
                  >
                    Our Courses
                  </Text>
                  <Text
                    className="sm:text-[20.29px] md:text-[22.29px] text-[24.29px] text-black-900_7f text-center tracking-[0.30px] w-full"
                    size="txtManropeRegular2429"
                  >
                    Have a look at our amazing courses
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[36.71px] grid md:grid-cols-1 grid-cols-2 h-[245px] justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-gradient3  flex flex-col items-center justify-end p-[11px] rounded-[12px] w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                  <div className="bg-gray-50_02 flex sm:flex-1 flex-col items-center justify-end pt-[11px] px-[11px] rounded-md w-[30%] sm:w-full">
                    <Img
                      className="h-[157px] md:h-auto mt-[52px] object-cover w-full"
                      src="images/img_feedbacklady.png"
                      alt="feedbacklady"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[69%] sm:w-full">
                    <div className="flex flex-col gap-[12.14px] items-start justify-start w-[325px]">
                      <Text
                        className="sm:text-[20.29px] md:text-[22.29px] text-[24.29px] text-black-900 w-auto"
                        size="txtManropeSemiBold2429"
                      >
                        Telecalling Course
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[325px] md:max-w-full text-[16.19px] text-black-900_7f"
                        size="txtManropeRegular1619"
                      >
                        Some random description of the course & some details
                        which need to come here.
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between w-full">
                      <div className="flex flex-col gap-[16.19px] items-start justify-start w-auto">
                        <div className="flex flex-row gap-[6.12px] items-start justify-start w-auto">
                          <Button
                            className="flex h-6 items-center justify-center w-6"
                            shape="circle"
                            color="gray_900_01"
                            size="xs"
                            variant="outline"
                          >
                            <Img src="images/img_signal.svg" alt="signal" />
                          </Button>
                          <Text
                            className="text-[18.36px] text-gray-900_01 w-auto"
                            size="txtManropeRegular1836"
                          >
                            Upto 4LPA
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.12px] items-start justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_jobs.svg"
                            alt="jobs"
                          />
                          <Text
                            className="text-[18.36px] text-gray-900_01 w-auto"
                            size="txtManropeRegular1836"
                          >
                            150+ Jobs
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[134px] mt-[29px] rounded-md"
                        rightIcon={
                          <Img
                            className="h-[21px] ml-1.5 my-0.5"
                            src="images/img_arrowright.svg"
                            alt="arrow_right"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                      >
                        <div className="font-medium text-[18.36px] text-center">
                          See more
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient4  flex flex-col items-center justify-end p-[11px] rounded-[12px] w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                  <div className="bg-gray-50_02 flex sm:flex-1 flex-col items-center justify-end pt-[11px] px-[11px] rounded-md w-[30%] sm:w-full">
                    <Img
                      className="h-[157px] md:h-auto mt-[52px] object-cover w-full"
                      src="images/img_feedbacklady.png"
                      alt="feedbacklady"
                    />
                  </div>
                  <div className="flex sm:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[69%] sm:w-full">
                    <div className="flex flex-col gap-[12.14px] items-start justify-start w-[325px]">
                      <Text
                        className="sm:text-[20.29px] md:text-[22.29px] text-[24.29px] text-black-900 w-auto"
                        size="txtManropeSemiBold2429"
                      >
                        Telecalling Course
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[325px] md:max-w-full text-[16.19px] text-black-900_7f"
                        size="txtManropeRegular1619"
                      >
                        Some random description of the course & some details
                        which need to come here.
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between w-full">
                      <div className="flex flex-col gap-[16.19px] items-start justify-start w-auto">
                        <div className="flex flex-row gap-[6.12px] items-start justify-start w-auto">
                          <Button
                            className="flex h-6 items-center justify-center w-6"
                            shape="circle"
                            color="gray_900_01"
                            size="xs"
                            variant="outline"
                          >
                            <Img src="images/img_signal.svg" alt="signal" />
                          </Button>
                          <Text
                            className="text-[18.36px] text-gray-900_01 w-auto"
                            size="txtManropeRegular1836"
                          >
                            Upto 4LPA
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.12px] items-start justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_jobs.svg"
                            alt="jobs"
                          />
                          <Text
                            className="text-[18.36px] text-gray-900_01 w-auto"
                            size="txtManropeRegular1836"
                          >
                            150+ Jobs
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[134px] mt-[29px] rounded-md"
                        rightIcon={
                          <Img
                            className="h-[21px] ml-1.5 my-0.5"
                            src="images/img_arrowright.svg"
                            alt="arrow_right"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                      >
                        <div className="font-medium text-[18.36px] text-center">
                          See more
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col md:gap-10 gap-[64.8px] items-center justify-start max-w-[1039px] mx-auto w-full">
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
                    Join apnaAscend now...!
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
                className="cursor-pointer font-medium min-w-[198px] sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-center"
                shape="round"
                color="gray_900_01"
              >
                Get started 🚀
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[27.88px] items-end justify-start w-auto md:w-full">
              <div className="md:h-[141px] h-[167px] relative w-[32%] md:w-full">
                <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col gap-3 inset-x-[0] items-start justify-center mx-auto p-4 rounded-[9px] w-full">
                  <Text
                    className="mt-5 sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900"
                    size="txtManropeSemiBold2025"
                  >
                    Guarenteed Salary
                  </Text>
                  <Text
                    className="leading-[24.00px] text-[16.2px] text-black-900 w-full"
                    size="txtManropeRegular162"
                  >
                    Easily get a job with a starting salary of Rs. 15,000 - Rs.
                    30,000/ Per month
                  </Text>
                </div>
                <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[5%] p-[9.29px] rounded-[9px] shadow-bs3 top-[0] w-[52px]">
                  <Button
                    className="flex items-center justify-center rounded-[16px] w-[33px]"
                    variant="outline"
                    color="deep_purple_A200_01_light_blue_A400_01"
                  >
                    <Img src="images/img_bxrupeesvg.png" alt="bxrupeesvg" />
                  </Button>
                </div>
              </div>
              <div className="md:h-[141px] h-[168px] relative w-[32%] md:w-full">
                <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col gap-3.5 inset-x-[0] items-start justify-center mx-auto p-4 rounded-[9px] w-full">
                  <Text
                    className="mt-[18px] sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900"
                    size="txtManropeSemiBold2025"
                  >
                    Quick & committed
                  </Text>
                  <Text
                    className="leading-[24.00px] text-[16.2px] text-black-900 w-full"
                    size="txtManropeRegular162"
                  >
                    Easily get a job with a starting salary of Rs. 15,000 - Rs.
                    30,000/ Per month
                  </Text>
                </div>
                <div className="absolute bg-white-A700 flex flex-col font-firasans h-[52px] items-center justify-start left-[5%] p-[9px] rounded-[9px] shadow-bs3 top-[0] w-[52px]">
                  <div className="h-[26px] md:h-[27px] my-[3px] relative w-[98%]">
                    <Img
                      className="absolute bottom-[0] h-[21px] object-cover right-[0]"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                    <Text
                      className="absolute bg-clip-text bg-gradient5  bg-white-A700 border border-solid deep_purple_A200_02_light_blue_A400_02_border flex h-[19px] items-center justify-center left-[0] rounded-[9px] text-[9.3px] text-center text-transparent top-[0] w-[19px]"
                      size="txtFiraSansRegular93"
                    >
                      28
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[141px] h-[168px] relative w-[32%] md:w-full">
                <div className="absolute bg-gray-50_02 bottom-[0] flex flex-col gap-3.5 inset-x-[0] items-start justify-center mx-auto p-4 rounded-[9px] w-full">
                  <Text
                    className="mt-[18px] sm:text-[16.25px] md:text-[18.25px] text-[20.25px] text-black-900"
                    size="txtManropeSemiBold2025"
                  >
                    Small Effective Batches
                  </Text>
                  <Text
                    className="leading-[24.00px] text-[16.2px] text-black-900 w-full"
                    size="txtManropeRegular162"
                  >
                    Easily get a job with a starting salary of Rs. 15,000 - Rs.
                    30,000/ Per month
                  </Text>
                </div>
                <Button
                  className="absolute flex h-[52px] items-center justify-center left-[5%] rounded-[9px] shadow-bs3 top-[0] w-[52px]"
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
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1040px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start max-w-[792px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-base text-center text-gray-900_7f tracking-[0.30px] w-full"
                  size="txtManropeSemiBold16"
                >
                  OUR COMMITMENT
                </Text>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[0.30px] w-full"
                    size="txtManropeBold32Black900"
                  >
                    Just 28 days!
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_7f text-center sm:text-xl tracking-[0.30px] w-full"
                    size="txtManropeRegular24"
                  >
                    Ready to ride our transformational journey
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-end py-[26px] rounded-[5px] w-full">
                    <Img
                      className="h-[141px] md:h-auto object-cover w-full"
                      src="images/img_screenshot20220718.png"
                      alt="screenshot20220"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Learn directly from managers
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="bg-gray-50 flex flex-col items-center justify-start rounded-[5px] w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover rounded-[5px] w-full"
                      src="images/img_cert21.png"
                      alt="certTwentyOne"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Certificate recognised by top employers
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-end py-[22px] rounded-[5px] w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-full"
                      src="images/img_screenshot20220723.png"
                      alt="screenshot20220"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Practice support & guidance from trainers
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                    <div className="flex flex-row items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-48 md:h-auto object-cover w-[46%]"
                        src="images/img_screenshot20220727.png"
                        alt="screenshot20220"
                      />
                      <Img
                        className="h-[194px] md:h-auto object-cover w-[55%]"
                        src="images/img_screenshot20220727_194x121.png"
                        alt="screenshot20220_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Learning experience crafted with ❤️
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-end py-1 rounded-[5px] w-full">
                    <div className="md:h-[137px] h-[186px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[137px] object-cover right-[0] w-[64%]"
                        src="images/img_screenshot20220727_137x186.png"
                        alt="screenshot20220"
                      />
                      <Img
                        className="absolute h-[115px] left-[0] object-cover top-[0] w-[69%]"
                        src="images/img_screenshot20220727_115x202.png"
                        alt="screenshot20220_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Multiple interviews till you get placed
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-3 rounded-[11px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-end py-2.5 rounded-[5px] w-full">
                    <Img
                      className="h-[174px] md:h-auto object-cover rounded-tl-[5px] rounded-tr-[5px] w-full"
                      src="images/img_screenshot20220806.png"
                      alt="screenshot20220"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[295px]">
                    <Text
                      className="max-w-[295px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      3-months post placement support
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[295px] md:max-w-full text-base text-black-900_7f"
                      size="txtManropeRegular16"
                    >
                      Some random description of the course & some details which
                      need to come here.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1040px] mx-auto w-full">
            <div className="flex flex-col gap-12 items-center justify-start max-w-[792px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-base text-center text-gray-900_7f tracking-[0.30px] w-full"
                  size="txtManropeSemiBold16"
                >
                  OUR STUDENTS
                </Text>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[0.30px] w-full"
                    size="txtManropeBold32Black900"
                  >
                    Success stories
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_7f text-center sm:text-xl tracking-[0.30px] w-full"
                    size="txtManropeRegular24"
                  >
                    30,000+ students placed across India
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
            <List
              className="sm:flex-col flex-row md:gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start p-3 rounded-lg shadow-bs1 w-auto md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[367px] md:h-[380px] relative rounded-lg w-full">
                      <Img
                        className="h-[380px] m-auto object-cover rounded-lg w-full"
                        src="images/img_screenshot20220809.png"
                        alt="screenshot20220"
                      />
                      <div className="absolute bg-gradient6  flex flex-col h-max inset-[0] items-center justify-center m-auto p-[124px] md:px-10 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-16 mb-[39px] mt-7 rounded-lg w-16"
                          src="images/img_adsplaycirclefilled.svg"
                          alt="adsplaycirclefi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-between w-[312px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                        size="txtManropeSemiBold24"
                      >
                        Aarti Devi
                      </Text>
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtManropeRegular16Black900"
                      >
                        Senior Executive
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Img
                        className="h-[31px] md:h-auto object-cover w-28"
                        src="images/img_image29_31x112.png"
                        alt="imageTwentyNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start p-3 rounded-lg shadow-bs1 w-auto md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[367px] md:h-[380px] relative rounded-lg w-full">
                      <Img
                        className="h-[380px] m-auto object-cover rounded-lg w-full"
                        src="images/img_screenshot20220809.png"
                        alt="screenshot20220"
                      />
                      <div className="absolute bg-gradient6  flex flex-col h-max inset-[0] items-center justify-center m-auto p-[124px] md:px-10 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-16 mb-[39px] mt-7 rounded-lg w-16"
                          src="images/img_adsplaycirclefilled.svg"
                          alt="adsplaycirclefi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-between w-[312px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                        size="txtManropeSemiBold24"
                      >
                        Aarti Devi
                      </Text>
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtManropeRegular16Black900"
                      >
                        Senior Executive
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Img
                        className="h-[31px] md:h-auto object-cover w-28"
                        src="images/img_image29_31x112.png"
                        alt="imageTwentyNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start p-3 rounded-lg shadow-bs1 w-auto md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start rounded-lg w-full">
                    <div className="h-[367px] md:h-[380px] relative rounded-lg w-full">
                      <Img
                        className="h-[380px] m-auto object-cover rounded-lg w-full"
                        src="images/img_screenshot20220809_380x312.png"
                        alt="screenshot20220"
                      />
                      <div className="absolute bg-gradient6  flex flex-col h-max inset-[0] items-center justify-center m-auto p-[124px] md:px-10 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-16 mb-[39px] mt-7 rounded-lg w-16"
                          src="images/img_adsplaycirclefilled.svg"
                          alt="adsplaycirclefi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-between w-[312px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                        size="txtManropeSemiBold24"
                      >
                        Aarti Devi
                      </Text>
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtManropeRegular16Black900"
                      >
                        Senior Executive
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Img
                        className="h-[31px] md:h-auto object-cover w-28"
                        src="images/img_image29_31x112.png"
                        alt="imageTwentyNine"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1040px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[0.30px] w-full"
                    size="txtManropeBold32Black900"
                  >
                    Featured in
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_7f text-center sm:text-xl tracking-[0.30px] w-full"
                    size="txtManropeRegular24"
                  >
                    Have a look, who’s talking about us...
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[25px] md:h-auto mb-3.5 mt-[26px] object-cover w-full"
                  src="images/img_image42.png"
                  alt="imageFortyTwo"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[54px] md:h-auto my-[5px] object-cover w-full"
                  src="images/img_image41.png"
                  alt="imageFortyOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[54px] md:h-auto my-[5px] object-cover w-full"
                  src="images/img_image41.png"
                  alt="imageFortyOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[54px] md:h-auto my-[5px] object-cover w-full"
                  src="images/img_image41.png"
                  alt="imageFortyOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[54px] md:h-auto my-[5px] object-cover w-full"
                  src="images/img_image41.png"
                  alt="imageFortyOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[19px] rounded-lg shadow-bs1 w-full">
                <Img
                  className="h-[66px] md:h-auto object-cover w-[99%]"
                  src="images/img_image43.png"
                  alt="imageFortyThree"
                />
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between max-w-[1040px] mx-auto w-full">
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
                    500+ candidates registered last week. You’re next, come join
                    us...!
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
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtManropeRegular16Black900"
            >
              Made in India with ❤️
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[61px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mt-0.5 w-[79%] md:w-full">
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
                          alt="play_Four"
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
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xs tracking-[0.06px] w-auto"
                        size="txtManropeBold12"
                      >
                        ABOUT US
                      </Text>
                      <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xs tracking-[0.06px]"
                          >
                            <Text size="txtManropeMedium12">Meet our team</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xs tracking-[0.06px]"
                          >
                            <Text size="txtManropeMedium12">Hiring</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xs tracking-[0.06px]"
                          >
                            <Text size="txtManropeMedium12">Contact us</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-white-A700_7f text-xs tracking-[0.06px]"
                          >
                            <Text size="txtManropeMedium12">Refund Policy</Text>
                          </a>
                        </li>
                      </ul>
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
        </footer>
      </div>
    </>
  );
};

export default AscendWebLandingPagePage;
