import React from "react";
import linkedin from "/public/icons/linkedin.svg";
import x from "/public/icons/x.svg";
import facebook from "/public/icons/facebook.svg";
import instagram from "/public/icons/instagram.svg";
import github from "/public/icons/github.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer md:mt-[50px]">
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="w-[45%]">
          <h3 className="text-white-32-500 mb-4">
            Let&apos;s Connect and Collaborate
          </h3>
          <p className="inter-white-20-400 opacity-50 mb-4">
            Reach out to discuss your project or ideas. I&apos;m here to provide
            support and turn your vision into reality.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <a
              href="https://www.linkedin.com/in/ahsan-ali49/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              {/* <FaLinkedin size={24} /> */}
              {/* <Image src={linkedin} alt="linkedin" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M31.5556 31.6889H31.6889V31.5556V22.1333C31.6889 20.5609 31.0642 19.0529 29.9524 17.941C28.8405 16.8291 27.3324 16.2044 25.76 16.2044C24.3381 16.2044 22.7093 16.9955 21.7689 18.2211V16.6756V16.5422H21.6356H16.6756H16.5422V16.6756V31.5556V31.6889H16.6756H21.6356H21.7689V31.5556V22.7911C21.7689 21.4946 22.8127 20.4356 24.1067 20.4356C24.7314 20.4356 25.3305 20.6837 25.7723 21.1255C26.214 21.5672 26.4622 22.1664 26.4622 22.7911V31.5556V31.6889H26.5956H31.5556ZM13.3689 31.6889H13.5022V31.5556V16.6756V16.5422H13.3689H8.44444H8.31111V16.6756V31.5556V31.6889H8.44444H13.3689ZM32.4444 4.13333C33.3521 4.13333 34.2225 4.49389 34.8643 5.13568C35.5061 5.77747 35.8667 6.64793 35.8667 7.55556V32.4444C35.8667 33.3521 35.5061 34.2225 34.8643 34.8643C34.2225 35.5061 33.3521 35.8667 32.4444 35.8667H7.55556C6.64793 35.8667 5.77747 35.5061 5.13568 34.8643C4.49389 34.2225 4.13333 33.3521 4.13333 32.4444V7.55556C4.13333 6.64793 4.49389 5.77747 5.13568 5.13568C5.77747 4.49389 6.64793 4.13333 7.55556 4.13333H32.4444ZM10.8978 14.0178C11.7253 14.0178 12.5188 13.6891 13.104 13.104C13.6891 12.5188 14.0178 11.7253 14.0178 10.8978C14.0178 9.17184 12.6258 7.76 10.8978 7.76C10.0656 7.76 9.26748 8.09059 8.67903 8.67903C8.09059 9.26748 7.76 10.0656 7.76 10.8978C7.76 12.6258 9.17184 14.0178 10.8978 14.0178Z"
                  fill="url(#paint0_radial_9_447)"
                  stroke="#9A9A9A"
                  strokeWidth="0.266667"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_9_447"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.72 5.23076) rotate(134.954) scale(43.4795 117.302)"
                  >
                    <stop offset="0.162337" stopColor="#585858" />
                    <stop offset="1" stopColor="#433D3D" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a
              href="https://x.com/RealisticAhsan"
              target="_blank"
              aria-label="Xing"
              className="hover:text-white"
            >
              {/* <Image src={x} alt="x" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3019 24.2521L9.48811 34.2801H4.89562L16.1877 21.4313L16.2528 21.3572L16.1928 21.279L4.24347 5.7201H14.0653L21.0212 14.8759L21.1101 14.9928L21.207 14.8825L29.2559 5.7201H33.8436L23.2987 17.7209L23.2339 17.7946L23.2932 17.8727L35.7581 34.2801H26.1839L18.4872 24.2582L18.3982 24.1424L18.3019 24.2521ZM27.3848 31.5484L27.4209 31.5953H27.48H30.2H30.4419L30.2956 31.4027L12.742 8.2987L12.7059 8.2513H12.6464H9.728H9.48447L9.63284 8.44441L27.3848 31.5484Z"
                  fill="url(#paint0_radial_9_449)"
                  stroke="#9A9A9A"
                  strokeWidth="0.24"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_9_449"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.72 6.70778) rotate(137.967) scale(41.3592 110.984)"
                  >
                    <stop offset="0.162337" stopColor="#585858" />
                    <stop offset="1" stopColor="#433D3D" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="facebook"
              className="hover:text-white"
            >
              {/* <Image src={facebook} alt="facebook" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M13.4637 24.8521V24.9724H13.584H16.6717V35.6114C9.48407 34.0757 4.08026 27.6939 4.08026 20.0401C4.08026 11.2524 11.2124 4.1203 20.0001 4.1203C28.7878 4.1203 35.9199 11.2524 35.9199 20.0401C35.9199 28.2571 29.7004 35.0099 21.7244 35.8666V24.9724H26.4161H26.5364V24.8521V20.0401V19.9198H26.4161H21.7244V16.8321C21.7244 16.0163 22.3923 15.3484 23.2081 15.3484H26.4161H26.5364V15.2281V10.416V10.2957H26.4161H22.4061C19.2439 10.2957 16.6717 12.8679 16.6717 16.0301V19.9198H13.584H13.4637V20.0401V24.8521Z"
                  fill="url(#paint0_radial_9_451)"
                  stroke="#9A9A9A"
                  strokeWidth="0.240602"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_9_451"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.757 5.23076) rotate(135.026) scale(43.5339 117.449)"
                  >
                    <stop offset="0.162337" stopColor="#585858" />
                    <stop offset="1" stopColor="#433D3D" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white"
            >
              {/* <Image src={instagram} alt="instagram" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <mask id="path-1-inside-1_9_453" fill="white">
                  <path d="M21.6448 4C23.4447 4.0048 24.3583 4.0144 25.1471 4.0368L25.4575 4.048C25.8159 4.0608 26.1695 4.0768 26.5967 4.096C28.299 4.176 29.4606 4.44479 30.4798 4.83998C31.5358 5.24637 32.4253 5.79676 33.3149 6.68474C34.1288 7.48429 34.7584 8.45185 35.1597 9.51987C35.5549 10.539 35.8237 11.7006 35.9037 13.4046C35.9228 13.8302 35.9388 14.1838 35.9516 14.5437L35.9612 14.8541C35.9852 15.6413 35.9948 16.5549 35.998 18.3549L35.9996 19.5484V21.6444C36.0035 22.8114 35.9913 23.9784 35.9628 25.1451L35.9532 25.4555C35.9404 25.8155 35.9244 26.1691 35.9052 26.5947C35.8253 28.2986 35.5533 29.4586 35.1597 30.4794C34.7584 31.5474 34.1288 32.5149 33.3149 33.3145C32.5154 34.1284 31.5478 34.758 30.4798 35.1592C29.4606 35.5544 28.299 35.8232 26.5967 35.9032L25.4575 35.9512L25.1471 35.9608C24.3583 35.9832 23.4447 35.9944 21.6448 35.9976L20.4512 35.9992H18.3569C17.1893 36.0033 16.0218 35.9911 14.8546 35.9624L14.5442 35.9528C14.1644 35.9384 13.7846 35.9219 13.405 35.9032C11.7026 35.8232 10.5411 35.5544 9.52029 35.1592C8.45284 34.7577 7.48585 34.1282 6.68676 33.3145C5.87229 32.5151 5.24217 31.5475 4.8404 30.4794C4.44521 29.4602 4.17642 28.2986 4.09642 26.5947L4.04842 25.4555L4.04042 25.1451C4.01093 23.9784 3.99759 22.8114 4.00042 21.6444V18.3549C3.99599 17.1878 4.00773 16.0208 4.03562 14.8541L4.04682 14.5437C4.05962 14.1838 4.07562 13.8302 4.09482 13.4046C4.17482 11.7006 4.44361 10.5406 4.8388 9.51987C5.2415 8.45141 5.87273 7.48381 6.68836 6.68474C7.48698 5.87123 8.45341 5.24169 9.52029 4.83998C10.5411 4.44479 11.701 4.176 13.405 4.096C13.8306 4.0768 14.1858 4.0608 14.5442 4.048L14.8546 4.0384C16.0212 4.00997 17.1883 3.9977 18.3553 4.0016L21.6448 4ZM20 11.9998C17.8784 11.9998 15.8436 12.8426 14.3433 14.3429C12.8431 15.8432 12.0002 17.8779 12.0002 19.9996C12.0002 22.1213 12.8431 24.1561 14.3433 25.6563C15.8436 27.1566 17.8784 27.9994 20 27.9994C22.1217 27.9994 24.1565 27.1566 25.6568 25.6563C27.157 24.1561 27.9998 22.1213 27.9998 19.9996C27.9998 17.8779 27.157 15.8432 25.6568 14.3429C24.1565 12.8426 22.1217 11.9998 20 11.9998ZM20 15.1997C20.6304 15.1996 21.2545 15.3237 21.8369 15.5648C22.4193 15.8059 22.9485 16.1594 23.3943 16.605C23.8401 17.0507 24.1937 17.5797 24.435 18.162C24.6764 18.7443 24.8006 19.3685 24.8007 19.9988C24.8008 20.6291 24.6768 21.2533 24.4357 21.8357C24.1945 22.4181 23.8411 22.9473 23.3954 23.3931C22.9498 23.8389 22.4207 24.1925 21.8384 24.4338C21.2561 24.6751 20.632 24.7994 20.0016 24.7995C18.7286 24.7995 17.5078 24.2938 16.6076 23.3936C15.7075 22.4935 15.2018 21.2726 15.2018 19.9996C15.2018 18.7266 15.7075 17.5057 16.6076 16.6056C17.5078 15.7054 18.7286 15.1997 20.0016 15.1997M28.4014 9.59986C27.871 9.59986 27.3623 9.81057 26.9873 10.1856C26.6122 10.5607 26.4015 11.0694 26.4015 11.5998C26.4015 12.1302 26.6122 12.6389 26.9873 13.014C27.3623 13.3891 27.871 13.5998 28.4014 13.5998C28.9319 13.5998 29.4405 13.3891 29.8156 13.014C30.1907 12.6389 30.4014 12.1302 30.4014 11.5998C30.4014 11.0694 30.1907 10.5607 29.8156 10.1856C29.4405 9.81057 28.9319 9.59986 28.4014 9.59986Z" />
                </mask>
                <path
                  d="M21.6448 4C23.4447 4.0048 24.3583 4.0144 25.1471 4.0368L25.4575 4.048C25.8159 4.0608 26.1695 4.0768 26.5967 4.096C28.299 4.176 29.4606 4.44479 30.4798 4.83998C31.5358 5.24637 32.4253 5.79676 33.3149 6.68474C34.1288 7.48429 34.7584 8.45185 35.1597 9.51987C35.5549 10.539 35.8237 11.7006 35.9037 13.4046C35.9228 13.8302 35.9388 14.1838 35.9516 14.5437L35.9612 14.8541C35.9852 15.6413 35.9948 16.5549 35.998 18.3549L35.9996 19.5484V21.6444C36.0035 22.8114 35.9913 23.9784 35.9628 25.1451L35.9532 25.4555C35.9404 25.8155 35.9244 26.1691 35.9052 26.5947C35.8253 28.2986 35.5533 29.4586 35.1597 30.4794C34.7584 31.5474 34.1288 32.5149 33.3149 33.3145C32.5154 34.1284 31.5478 34.758 30.4798 35.1592C29.4606 35.5544 28.299 35.8232 26.5967 35.9032L25.4575 35.9512L25.1471 35.9608C24.3583 35.9832 23.4447 35.9944 21.6448 35.9976L20.4512 35.9992H18.3569C17.1893 36.0033 16.0218 35.9911 14.8546 35.9624L14.5442 35.9528C14.1644 35.9384 13.7846 35.9219 13.405 35.9032C11.7026 35.8232 10.5411 35.5544 9.52029 35.1592C8.45284 34.7577 7.48585 34.1282 6.68676 33.3145C5.87229 32.5151 5.24217 31.5475 4.8404 30.4794C4.44521 29.4602 4.17642 28.2986 4.09642 26.5947L4.04842 25.4555L4.04042 25.1451C4.01093 23.9784 3.99759 22.8114 4.00042 21.6444V18.3549C3.99599 17.1878 4.00773 16.0208 4.03562 14.8541L4.04682 14.5437C4.05962 14.1838 4.07562 13.8302 4.09482 13.4046C4.17482 11.7006 4.44361 10.5406 4.8388 9.51987C5.2415 8.45141 5.87273 7.48381 6.68836 6.68474C7.48698 5.87123 8.45341 5.24169 9.52029 4.83998C10.5411 4.44479 11.701 4.176 13.405 4.096C13.8306 4.0768 14.1858 4.0608 14.5442 4.048L14.8546 4.0384C16.0212 4.00997 17.1883 3.9977 18.3553 4.0016L21.6448 4ZM20 11.9998C17.8784 11.9998 15.8436 12.8426 14.3433 14.3429C12.8431 15.8432 12.0002 17.8779 12.0002 19.9996C12.0002 22.1213 12.8431 24.1561 14.3433 25.6563C15.8436 27.1566 17.8784 27.9994 20 27.9994C22.1217 27.9994 24.1565 27.1566 25.6568 25.6563C27.157 24.1561 27.9998 22.1213 27.9998 19.9996C27.9998 17.8779 27.157 15.8432 25.6568 14.3429C24.1565 12.8426 22.1217 11.9998 20 11.9998ZM20 15.1997C20.6304 15.1996 21.2545 15.3237 21.8369 15.5648C22.4193 15.8059 22.9485 16.1594 23.3943 16.605C23.8401 17.0507 24.1937 17.5797 24.435 18.162C24.6764 18.7443 24.8006 19.3685 24.8007 19.9988C24.8008 20.6291 24.6768 21.2533 24.4357 21.8357C24.1945 22.4181 23.8411 22.9473 23.3954 23.3931C22.9498 23.8389 22.4207 24.1925 21.8384 24.4338C21.2561 24.6751 20.632 24.7994 20.0016 24.7995C18.7286 24.7995 17.5078 24.2938 16.6076 23.3936C15.7075 22.4935 15.2018 21.2726 15.2018 19.9996C15.2018 18.7266 15.7075 17.5057 16.6076 16.6056C17.5078 15.7054 18.7286 15.1997 20.0016 15.1997M28.4014 9.59986C27.871 9.59986 27.3623 9.81057 26.9873 10.1856C26.6122 10.5607 26.4015 11.0694 26.4015 11.5998C26.4015 12.1302 26.6122 12.6389 26.9873 13.014C27.3623 13.3891 27.871 13.5998 28.4014 13.5998C28.9319 13.5998 29.4405 13.3891 29.8156 13.014C30.1907 12.6389 30.4014 12.1302 30.4014 11.5998C30.4014 11.0694 30.1907 10.5607 29.8156 10.1856C29.4405 9.81057 28.9319 9.59986 28.4014 9.59986Z"
                  fill="url(#paint0_radial_9_453)"
                />
                <path
                  d="M21.6448 4L21.6454 3.76001L21.6447 3.76001L21.6448 4ZM25.1471 4.0368L25.1558 3.79695L25.1539 3.7969L25.1471 4.0368ZM25.4575 4.048L25.4488 4.28784L25.4489 4.28784L25.4575 4.048ZM26.5967 4.096L26.6079 3.85627L26.6074 3.85625L26.5967 4.096ZM30.4798 4.83998L30.393 5.06374L30.3936 5.06396L30.4798 4.83998ZM33.3149 6.68474L33.1454 6.85459L33.1467 6.85594L33.3149 6.68474ZM35.1597 9.51987L34.935 9.60428L34.9359 9.60663L35.1597 9.51987ZM35.9037 13.4046L36.1434 13.3938L36.1434 13.3933L35.9037 13.4046ZM35.9516 14.5437L36.1915 14.5363L36.1915 14.5352L35.9516 14.5437ZM35.9612 14.8541L36.2011 14.8468L36.2011 14.8467L35.9612 14.8541ZM35.998 18.3549L36.238 18.3545V18.3544L35.998 18.3549ZM35.9996 19.5484H36.2396V19.5481L35.9996 19.5484ZM35.9996 21.6444H35.7597L35.7597 21.6452L35.9996 21.6444ZM35.9628 25.1451L36.2027 25.1525L36.2028 25.1509L35.9628 25.1451ZM35.9532 25.4555L36.1931 25.464L36.1931 25.4629L35.9532 25.4555ZM35.9052 26.5947L36.145 26.6059L36.145 26.6055L35.9052 26.5947ZM35.1597 30.4794L34.9357 30.393L34.935 30.3949L35.1597 30.4794ZM33.3149 33.3145L33.1467 33.1433L33.1437 33.1463L33.3149 33.3145ZM30.4798 35.1592L30.3954 34.9346L30.393 34.9355L30.4798 35.1592ZM26.5967 35.9032L26.6068 36.143L26.6079 36.143L26.5967 35.9032ZM25.4575 35.9512L25.4649 36.1911L25.4676 36.191L25.4575 35.9512ZM25.1471 35.9608L25.1539 36.2007L25.1545 36.2007L25.1471 35.9608ZM21.6448 35.9976L21.6451 36.2376H21.6452L21.6448 35.9976ZM20.4512 35.9992V36.2392H20.4515L20.4512 35.9992ZM18.3569 35.9992V35.7592L18.356 35.7592L18.3569 35.9992ZM14.8546 35.9624L14.8471 36.2023L14.8487 36.2023L14.8546 35.9624ZM14.5442 35.9528L14.5351 36.1927L14.5367 36.1927L14.5442 35.9528ZM13.405 35.9032L13.4168 35.6635L13.4163 35.6635L13.405 35.9032ZM9.52029 35.1592L9.60694 34.9354L9.60478 34.9346L9.52029 35.1592ZM6.68676 33.3145L6.85802 33.1463L6.85487 33.1432L6.68676 33.3145ZM4.8404 30.4794L5.06504 30.3949L5.06416 30.3926L4.8404 30.4794ZM4.09642 26.5947L3.85664 26.6048L3.85669 26.6059L4.09642 26.5947ZM4.04842 25.4555L3.80847 25.4617L3.80864 25.4656L4.04842 25.4555ZM4.04042 25.1451L3.8005 25.1512L3.80051 25.1513L4.04042 25.1451ZM4.00042 21.6444L4.24042 21.645V21.6444H4.00042ZM4.00042 18.3549H4.24042L4.24041 18.3539L4.00042 18.3549ZM4.03562 14.8541L3.79577 14.8455L3.7957 14.8484L4.03562 14.8541ZM4.04682 14.5437L4.28666 14.5524L4.28666 14.5523L4.04682 14.5437ZM4.09482 13.4046L3.85509 13.3933L3.85507 13.3938L4.09482 13.4046ZM4.8388 9.51987L5.06262 9.60652L5.06337 9.60451L4.8388 9.51987ZM6.68836 6.68474L6.85634 6.8562L6.85962 6.85286L6.68836 6.68474ZM9.52029 4.83998L9.60486 5.06459L9.60693 5.06379L9.52029 4.83998ZM13.405 4.096L13.3942 3.85625L13.3937 3.85627L13.405 4.096ZM14.5442 4.048L14.5367 3.80812L14.5356 3.80816L14.5442 4.048ZM14.8546 4.0384L14.8487 3.79847L14.8471 3.79852L14.8546 4.0384ZM18.3553 4.0016L18.3545 4.24159L18.3554 4.24159L18.3553 4.0016ZM20 11.9998V11.7598V11.9998ZM12.0002 19.9996H11.7602H12.0002ZM20 27.9994V27.7594V27.9994ZM27.9998 19.9996H27.7598H27.9998ZM20.0016 24.7995V25.0395H20.0017L20.0016 24.7995ZM21.6442 4.23999C23.444 4.24479 24.3549 4.25439 25.1403 4.2767L25.1539 3.7969C24.3618 3.77441 23.4455 3.76481 21.6454 3.76001L21.6442 4.23999ZM25.1385 4.27664L25.4488 4.28784L25.4662 3.80816L25.1558 3.79696L25.1385 4.27664ZM25.4489 4.28784C25.806 4.30059 26.1584 4.31654 26.5859 4.33575L26.6074 3.85625C26.1806 3.83706 25.8258 3.821 25.4661 3.80816L25.4489 4.28784ZM26.5854 4.33573C28.2653 4.41467 29.401 4.67908 30.393 5.06374L30.5665 4.61622C29.5202 4.2105 28.3327 3.93732 26.6079 3.85627L26.5854 4.33573ZM30.3936 5.06396C31.4197 5.45885 32.2805 5.99129 33.1454 6.85459L33.4845 6.51488C32.5702 5.60222 31.6518 5.03389 30.566 4.616L30.3936 5.06396ZM33.1467 6.85594C33.9357 7.63101 34.546 8.56896 34.935 9.60428L35.3843 9.43545C34.9707 8.33474 34.3219 7.33756 33.4831 6.51353L33.1467 6.85594ZM34.9359 9.60663C35.3206 10.5986 35.585 11.7343 35.6639 13.4158L36.1434 13.3933C36.0623 11.6669 35.7892 10.4794 35.3834 9.4331L34.9359 9.60663ZM35.6639 13.4154C35.6831 13.8412 35.6991 14.1936 35.7118 14.5523L36.1915 14.5352C36.1786 14.1739 36.1626 13.8191 36.1434 13.3938L35.6639 13.4154ZM35.7118 14.5512L35.7214 14.8616L36.2011 14.8467L36.1915 14.5363L35.7118 14.5512ZM35.7214 14.8615C35.7453 15.6449 35.7549 16.5555 35.7581 18.3553L36.238 18.3544C36.2348 16.5543 36.2252 15.6377 36.2011 14.8468L35.7214 14.8615ZM35.7581 18.3552L35.7597 19.5487L36.2396 19.5481L36.238 18.3545L35.7581 18.3552ZM35.7597 19.5484V21.6444H36.2396V19.5484H35.7597ZM35.7597 21.6452C35.7635 22.81 35.7513 23.9748 35.7229 25.1392L36.2028 25.1509C36.2313 23.982 36.2435 22.8128 36.2396 21.6436L35.7597 21.6452ZM35.723 25.1377L35.7134 25.4481L36.1931 25.4629L36.2027 25.1525L35.723 25.1377ZM35.7134 25.447C35.7007 25.8056 35.6847 26.158 35.6655 26.5838L36.145 26.6055C36.1642 26.1801 36.1802 25.8254 36.1931 25.464L35.7134 25.447ZM35.6655 26.5834C35.5866 28.2644 35.3191 29.3987 34.9357 30.393L35.3836 30.5657C35.7874 29.5184 36.0639 28.3328 36.145 26.6059L35.6655 26.5834ZM34.935 30.3949C34.546 31.4303 33.9357 32.3682 33.1467 33.1433L33.4831 33.4857C34.3219 32.6617 34.9707 31.6645 35.3843 30.5638L34.935 30.3949ZM33.1437 33.1463C32.3686 33.9353 31.4307 34.5456 30.3954 34.9346L30.5642 35.3839C31.6649 34.9703 32.6621 34.3215 33.4861 33.4827L33.1437 33.1463ZM30.393 34.9355C29.401 35.3201 28.2653 35.5846 26.5854 35.6635L26.6079 36.143C28.3327 36.0619 29.5202 35.7887 30.5665 35.383L30.393 34.9355ZM26.5866 35.6634L25.4474 35.7114L25.4676 36.191L26.6068 36.143L26.5866 35.6634ZM25.4501 35.7113L25.1397 35.7209L25.1545 36.2007L25.4649 36.1911L25.4501 35.7113ZM25.1403 35.7209C24.3548 35.7432 23.4438 35.7544 21.6444 35.7576L21.6452 36.2376C23.4457 36.2344 24.3619 36.2232 25.1539 36.2007L25.1403 35.7209ZM21.6445 35.7576L20.4509 35.7592L20.4515 36.2392L21.6451 36.2376L21.6445 35.7576ZM20.4512 35.7592H18.3569V36.2392H20.4512V35.7592ZM18.356 35.7592C17.1907 35.7633 16.0254 35.7511 14.8604 35.7225L14.8487 36.2023C16.0181 36.2311 17.1879 36.2433 18.3577 36.2392L18.356 35.7592ZM14.862 35.7225L14.5516 35.7129L14.5367 36.1927L14.8471 36.2023L14.862 35.7225ZM14.5533 35.713C14.1743 35.6987 13.7955 35.6822 13.4168 35.6635L13.3932 36.1429C13.7737 36.1617 14.1544 36.1782 14.5351 36.1926L14.5533 35.713ZM13.4163 35.6635C11.7363 35.5846 10.6006 35.3202 9.60693 34.9354L9.43364 35.3831C10.4815 35.7887 11.6689 36.0619 13.3937 36.143L13.4163 35.6635ZM9.60478 34.9346C8.57001 34.5454 7.63262 33.9351 6.85799 33.1463L6.51553 33.4826C7.33908 34.3213 8.33567 34.9701 9.4358 35.3839L9.60478 34.9346ZM6.85487 33.1432C6.06533 32.3683 5.4545 31.4303 5.06503 30.3949L4.61577 30.5638C5.02983 31.6647 5.67925 32.6619 6.51865 33.4858L6.85487 33.1432ZM5.06416 30.3926C4.67951 29.4006 4.4151 28.2649 4.33615 26.5834L3.85669 26.6059C3.93774 28.3323 4.21091 29.5198 4.61664 30.5661L5.06416 30.3926ZM4.3362 26.5845L4.2882 25.4454L3.80864 25.4656L3.85664 26.6048L4.3362 26.5845ZM4.28834 25.4493L4.28034 25.1389L3.80051 25.1513L3.80851 25.4617L4.28834 25.4493ZM4.28034 25.139C4.2509 23.9746 4.23759 22.8098 4.24042 21.645L3.76043 21.6438C3.75759 22.813 3.77095 23.9823 3.8005 25.1512L4.28034 25.139ZM4.24042 21.6444V18.3549H3.76043V21.6444H4.24042ZM4.24041 18.3539C4.23599 17.1891 4.24771 16.0243 4.27555 14.8599L3.7957 14.8484C3.76775 16.0173 3.75599 17.1865 3.76043 18.3558L4.24041 18.3539ZM4.27546 14.8628L4.28666 14.5524L3.80698 14.5351L3.79578 14.8455L4.27546 14.8628ZM4.28666 14.5523C4.29941 14.1936 4.31536 13.8412 4.33457 13.4154L3.85507 13.3938C3.83588 13.8191 3.81983 14.1739 3.80698 14.5352L4.28666 14.5523ZM4.33455 13.4158C4.41349 11.7343 4.67789 10.6002 5.06261 9.60651L4.61499 9.43322C4.20933 10.481 3.93614 11.6669 3.85509 13.3933L4.33455 13.4158ZM5.06337 9.60451C5.45375 8.56876 6.06566 7.63078 6.85631 6.85617L6.5204 6.5133C5.67981 7.33684 5.02926 8.33406 4.61423 9.43522L5.06337 9.60451ZM6.85962 6.85286C7.6338 6.06426 8.57064 5.45399 9.60486 5.06458L9.43572 4.61538C8.33619 5.02938 7.34017 5.6782 6.5171 6.51661L6.85962 6.85286ZM9.60693 5.06379C10.6007 4.67907 11.7348 4.41467 13.4162 4.33573L13.3937 3.85627C11.6673 3.93732 10.4815 4.21051 9.43364 4.61617L9.60693 5.06379ZM13.4158 4.33575C13.8416 4.31654 14.1957 4.30059 14.5527 4.28784L14.5356 3.80816C14.1759 3.821 13.8195 3.83706 13.3942 3.85625L13.4158 4.33575ZM14.5516 4.28788L14.862 4.27828L14.8471 3.79852L14.5367 3.80812L14.5516 4.28788ZM14.8604 4.27832C16.0249 4.24995 17.1897 4.2377 18.3545 4.24159L18.3561 3.76161C17.1868 3.7577 16.0176 3.77 14.8487 3.79848L14.8604 4.27832ZM18.3554 4.24159L21.6449 4.23999L21.6447 3.76001L18.3552 3.76161L18.3554 4.24159ZM20 11.7598C17.8147 11.7598 15.7189 12.6279 14.1736 14.1732L14.513 14.5126C15.9683 13.0574 17.942 12.2398 20 12.2398V11.7598ZM14.1736 14.1732C12.6284 15.7185 11.7602 17.8143 11.7602 19.9996H12.2402C12.2402 17.9416 13.0578 15.9678 14.513 14.5126L14.1736 14.1732ZM11.7602 19.9996C11.7602 22.1849 12.6284 24.2808 14.1736 25.826L14.513 25.4866C13.0578 24.0314 12.2402 22.0576 12.2402 19.9996H11.7602ZM14.1736 25.826C15.7189 27.3713 17.8147 28.2394 20 28.2394V27.7594C17.942 27.7594 15.9683 26.9419 14.513 25.4866L14.1736 25.826ZM20 28.2394C22.1854 28.2394 24.2812 27.3713 25.8265 25.826L25.487 25.4866C24.0318 26.9419 22.0581 27.7594 20 27.7594V28.2394ZM25.8265 25.826C27.3717 24.2808 28.2398 22.1849 28.2398 19.9996H27.7598C27.7598 22.0576 26.9423 24.0314 25.487 25.4866L25.8265 25.826ZM28.2398 19.9996C28.2398 17.8143 27.3717 15.7185 25.8265 14.1732L25.487 14.5126C26.9423 15.9678 27.7598 17.9416 27.7598 19.9996H28.2398ZM25.8265 14.1732C24.2812 12.6279 22.1854 11.7598 20 11.7598V12.2398C22.0581 12.2398 24.0318 13.0574 25.487 14.5126L25.8265 14.1732ZM20.0001 15.4397C20.5989 15.4396 21.1919 15.5575 21.7451 15.7865L21.9287 15.3431C21.3172 15.0899 20.6618 14.9596 20 14.9597L20.0001 15.4397ZM21.7451 15.7865C22.2984 16.0156 22.8011 16.3514 23.2246 16.7747L23.564 16.4353C23.0959 15.9674 22.5402 15.5962 21.9287 15.3431L21.7451 15.7865ZM23.2246 16.7747C23.6481 17.1981 23.9841 17.7007 24.2133 18.2539L24.6568 18.0702C24.4034 17.4587 24.032 16.9032 23.564 16.4353L23.2246 16.7747ZM24.2133 18.2539C24.4426 18.8071 24.5606 19.4 24.5607 19.9989L25.0407 19.9988C25.0406 19.3369 24.9101 18.6816 24.6568 18.0702L24.2133 18.2539ZM24.5607 19.9989C24.5608 20.5977 24.443 21.1906 24.2139 21.7439L24.6574 21.9275C24.9106 21.316 25.0408 20.6606 25.0407 19.9988L24.5607 19.9989ZM24.2139 21.7439C23.9848 22.2972 23.6491 22.7999 23.2257 23.2234L23.5652 23.5628C24.0331 23.0947 24.4042 22.539 24.6574 21.9275L24.2139 21.7439ZM23.2257 23.2234C22.8023 23.6469 22.2997 23.9829 21.7465 24.2121L21.9303 24.6555C22.5417 24.4022 23.0972 24.0308 23.5652 23.5628L23.2257 23.2234ZM21.7465 24.2121C21.1933 24.4414 20.6004 24.5594 20.0016 24.5595L20.0017 25.0395C20.6635 25.0394 21.3189 24.9089 21.9303 24.6555L21.7465 24.2121ZM20.0016 24.5595C18.7923 24.5595 17.6325 24.0791 16.7773 23.2239L16.4379 23.5633C17.3831 24.5085 18.665 25.0395 20.0016 25.0395V24.5595ZM16.7773 23.2239C15.9222 22.3688 15.4417 21.209 15.4417 19.9996H14.9618C14.9618 21.3363 15.4927 22.6182 16.4379 23.5633L16.7773 23.2239ZM15.4417 19.9996C15.4417 18.7903 15.9222 17.6304 16.7773 16.7753L16.4379 16.4359C15.4927 17.381 14.9618 18.663 14.9618 19.9996H15.4417ZM16.7773 16.7753C17.6325 15.9201 18.7923 15.4397 20.0016 15.4397V14.9597C18.665 14.9597 17.3831 15.4907 16.4379 16.4359L16.7773 16.7753ZM28.4014 9.35987C27.8074 9.35987 27.2376 9.59586 26.8176 10.0159L27.157 10.3553C27.487 10.0253 27.9347 9.83986 28.4014 9.83986V9.35987ZM26.8176 10.0159C26.3975 10.436 26.1615 11.0057 26.1615 11.5998H26.6415C26.6415 11.133 26.8269 10.6854 27.157 10.3553L26.8176 10.0159ZM26.1615 11.5998C26.1615 12.1939 26.3975 12.7636 26.8176 13.1837L27.157 12.8443C26.8269 12.5142 26.6415 12.0666 26.6415 11.5998H26.1615ZM26.8176 13.1837C27.2376 13.6038 27.8074 13.8398 28.4014 13.8398V13.3598C27.9347 13.3598 27.487 13.1743 27.157 12.8443L26.8176 13.1837ZM28.4014 13.8398C28.9955 13.8398 29.5652 13.6038 29.9853 13.1837L29.6459 12.8443C29.3159 13.1743 28.8682 13.3598 28.4014 13.3598V13.8398ZM29.9853 13.1837C30.4054 12.7636 30.6414 12.1939 30.6414 11.5998H30.1614C30.1614 12.0666 29.976 12.5142 29.6459 12.8443L29.9853 13.1837ZM30.6414 11.5998C30.6414 11.0057 30.4054 10.436 29.9853 10.0159L29.6459 10.3553C29.976 10.6854 30.1614 11.133 30.1614 11.5998H30.6414ZM29.9853 10.0159C29.5652 9.59586 28.9955 9.35987 28.4014 9.35987V9.83986C28.8682 9.83986 29.3159 10.0253 29.6459 10.3553L29.9853 10.0159Z"
                  fill="#9A9A9A"
                  mask="url(#path-1-inside-1_9_453)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_9_453"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(34.7203 5.23076) rotate(134.955) scale(43.48 117.304)"
                  >
                    <stop offset="0.162337" stopColor="#585858" />
                    <stop offset="1" stopColor="#433D3D" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a
              href="https://github.com/ahsan-ali49"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-white"
            >
              {/* <Image src={github} alt="github" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.8248 25.8943C13.1968 27.047 14.9843 27.5173 16.7323 27.7369C16.3348 28.174 15.9932 28.8421 15.8546 29.7552C15.3851 29.9464 14.605 30.1932 13.7756 30.1213C12.916 30.0467 11.9937 29.6294 11.3014 28.42L11.3014 28.4198L11.2991 28.4158L11.2907 28.4012C11.2834 28.3887 11.2726 28.3708 11.2585 28.3482C11.2303 28.3029 11.1885 28.2387 11.1332 28.1617C11.0229 28.0077 10.8582 27.8014 10.6407 27.5912C10.2064 27.1717 9.5534 26.7296 8.69451 26.6695L8.69452 26.6693L8.68843 26.6692L8.68593 26.7922L8.68834 26.6692L8.68821 26.6692L8.68784 26.6692L8.68667 26.6692L8.68263 26.6691L8.66816 26.6691C8.65581 26.6691 8.63821 26.6692 8.61653 26.6698C8.57328 26.6709 8.51322 26.6738 8.44585 26.6806C8.31601 26.6936 8.14036 26.7229 8.00952 26.7952C7.94286 26.832 7.87568 26.8866 7.83943 26.9678C7.80136 27.0531 7.80647 27.1471 7.84632 27.2413C7.88484 27.3323 7.95707 27.4278 8.06181 27.5299C8.16747 27.6329 8.31176 27.7481 8.5019 27.8776L8.50969 27.8829L8.51789 27.8868L8.51795 27.8869L8.518 27.8869L8.51809 27.8869L8.51821 27.887L8.51923 27.8875L8.52621 27.8911C8.53281 27.8945 8.54321 27.9002 8.55709 27.9081C8.58485 27.9241 8.62652 27.9496 8.67944 27.9862C8.78527 28.0595 8.93617 28.1777 9.11089 28.3544C9.45953 28.707 9.90463 29.2944 10.2753 30.2277L10.2773 30.2339C10.2796 30.2408 10.2829 30.2506 10.2873 30.263C10.2962 30.288 10.3096 30.3237 10.3281 30.3683C10.3652 30.4575 10.4229 30.5826 10.5066 30.7291C10.6739 31.0218 10.9457 31.401 11.3641 31.7485C12.1878 32.4325 13.5618 32.9786 15.7777 32.5349V35.1547C15.7777 35.355 15.7181 35.5566 15.5806 35.6924C15.4487 35.8227 15.2241 35.9128 14.8478 35.8547C8.3916 33.6872 3.72576 27.5866 3.72576 20.3972C3.72576 16.081 5.44037 11.9416 8.49238 8.8896C10.0036 7.37839 11.7976 6.17964 13.7721 5.36178C15.7466 4.54393 17.8628 4.12298 20 4.12298C22.1372 4.12298 24.2534 4.54393 26.2279 5.36178C28.2024 6.17964 29.9964 7.37839 31.5076 8.8896C33.0189 10.4008 34.2176 12.1949 35.0355 14.1693C35.8533 16.1438 36.2743 18.2601 36.2743 20.3972C36.2743 27.5869 31.6244 33.6715 25.1675 35.8551C24.7829 35.9209 24.5549 35.8304 24.4215 35.6985C24.2821 35.5609 24.2223 35.3554 24.2223 35.1547V30.6619C24.2223 29.2707 23.7799 28.2938 23.2407 27.72C24.9945 27.5009 26.7878 27.0383 28.1646 25.8926C29.6154 24.6853 30.5844 22.7364 30.5844 19.5774C30.5844 17.7554 29.9695 16.2845 28.9145 15.1073C29.111 14.5809 29.5957 12.9018 28.7225 10.7585L28.7008 10.7053L28.6462 10.6878L28.6086 10.8049C28.6462 10.6878 28.6461 10.6877 28.6459 10.6877L28.6457 10.6876L28.645 10.6874L28.6433 10.6869L28.6383 10.6854C28.6344 10.6843 28.629 10.6828 28.6223 10.6811C28.6088 10.6777 28.5899 10.6734 28.5653 10.669C28.5162 10.66 28.4447 10.6504 28.3502 10.6459C28.1612 10.6369 27.8808 10.6486 27.5032 10.7275C26.7559 10.8836 25.6291 11.3026 24.0776 12.3438C22.7857 11.9899 21.3844 11.8133 20 11.8133C18.6156 11.8133 17.2144 11.9899 15.9225 12.3438C14.3709 11.3026 13.2441 10.8836 12.4968 10.7275C12.1192 10.6486 11.8388 10.6369 11.6498 10.6459C11.5553 10.6504 11.4839 10.66 11.4347 10.669C11.4102 10.6734 11.3912 10.6777 11.3777 10.6811C11.371 10.6828 11.3657 10.6843 11.3617 10.6854L11.3567 10.6869L11.355 10.6874L11.3544 10.6876L11.3541 10.6877C11.354 10.6877 11.3538 10.6878 11.3915 10.8049L11.3538 10.6878L11.2992 10.7053L11.2776 10.7585C10.4044 12.9018 10.8891 14.5809 11.0855 15.1073C10.0306 16.2845 9.4156 17.7554 9.4156 19.5774C9.4156 22.7281 10.3804 24.6809 11.8248 25.8943Z"
                  fill="url(#paint0_radial_9_455)"
                  stroke="#9A9A9A"
                  strokeWidth="0.245958"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_9_455"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(35.0855 5.23076) rotate(135.657) scale(44.0216 118.734)"
                  >
                    <stop offset="0.162337" stopColor="#585858" />
                    <stop offset="1" stopColor="#433D3D" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-[22%]">
          <h4 className="inter-white-20-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white links">
                About
              </a>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white links">
                Projects
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-white links">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-[22%]">
          <h4 className="inter-white-20-500 mb-4">Get in touch</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:ahsan.shah@gmail.com"
                className="hover:text-white links"
              >
                ahsan.shah330@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-white links">
                +92-316-3319605
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/FCcwbm7C8xoz4fBY8">
                Fortune Tower Sharah e Faisal, Karachi, Pakistan{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" border-t border-[#202020] w-full">
        <p className="inter-white-18-400 opacity-50 md:mt-10">
          © 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
