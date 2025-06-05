import React from 'react';

function BackgroundImage28({ children }: React.PropsWithChildren) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function HeroSectionBackgroundImage({ children }: React.PropsWithChildren) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

type HeroSectionBackgroundImageAndTextProps = {
  text: string;
};

function HeroSectionBackgroundImageAndText({
  text,
}: HeroSectionBackgroundImageAndTextProps) {
  return (
    <div className="bg-gray-100 relative rounded-[20px] shrink-0 size-10">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-10">
        <div className="font-['Inter'] font-bold leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
          <p className="block leading-[19.2px] whitespace-pre">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-[#ffffff] relative w-full h-auto" data-name="Hero Section">
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center px-[120px] py-20 relative w-full">
          <HeroSectionBackgroundImage>
            <div className="font-['Montserrat'] font-bold leading-[0] relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap">
              <p className="block leading-[28.8px] whitespace-pre">PORTFOLIO</p>
            </div>
            <div className="relative shrink-0" data-name="Navigation">
              <div className="box-border content-stretch flex flex-row font-['Inter'] font-medium gap-8 items-center justify-end leading-[0] not-italic p-0 relative text-[16px] text-gray-600 text-left text-nowrap">
                <div className="relative shrink-0">
                  <p className="block leading-[19.2px] text-nowrap whitespace-pre">
                    Work
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="block leading-[19.2px] text-nowrap whitespace-pre">
                    About
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="block leading-[19.2px] text-nowrap whitespace-pre">
                    Services
                  </p>
                </div>
                <div className="relative shrink-0">
                  <p className="block leading-[19.2px] text-nowrap whitespace-pre">
                    Contact
                  </p>
                </div>
              </div>
            </div>
          </HeroSectionBackgroundImage>
          <HeroSectionBackgroundImage>
            <div
              className="relative shrink-0 w-[500px]"
              data-name="Text Content"
            >
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-[500px]">
                <div className="font-['Inter'] font-semibold leading-[0] not-italic relative shrink-0 text-[18px] text-blue-500 text-left text-nowrap">
                  <p className="block leading-[21.6px] whitespace-pre">{`HELLO, I'M`}</p>
                </div>
                <div className="font-['Playfair_Display'] font-bold leading-[0] relative shrink-0 text-[64px] text-gray-900 text-left text-nowrap">
                  <p className="block leading-[76.8px] whitespace-pre">
                    John Doe
                  </p>
                </div>
                <div
                  className="font-['Inter'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-gray-600 text-left"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[30px]">{`Creative designer & developer focused on crafting clean & user-friendly experiences`}</p>
                </div>
                <BackgroundImage28>
                  <div
                    className="bg-blue-500 h-[52px] relative rounded-lg shrink-0 w-40"
                    data-name="Primary Button"
                  >
                    <div className="box-border content-stretch flex flex-row h-[52px] items-center justify-center p-0 relative w-40">
                      <div className="font-['Inter'] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                        <p className="block leading-[19.2px] whitespace-pre">
                          View Work
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffffff] h-[52px] relative rounded-lg shrink-0 w-40"
                    data-name="Secondary Button"
                  >
                    <div className="absolute border border-blue-500 border-solid inset-0 pointer-events-none rounded-lg" />
                    <div className="box-border content-stretch flex flex-row h-[52px] items-center justify-center p-0 relative w-40">
                      <div className="font-['Inter'] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-blue-500 text-left text-nowrap">
                        <p className="block leading-[19.2px] whitespace-pre">
                          Contact Me
                        </p>
                      </div>
                    </div>
                  </div>
                </BackgroundImage28>
              </div>
            </div>
            <div
              className="bg-gray-100 relative rounded-2xl shrink-0 w-[500px] h-[500px] bg-cover"
              data-name="Image Container"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <div
                className="absolute h-[100px] left-4 top-4 bg-black bg-opacity-50 rounded-lg p-4"
                data-name="Image Placeholder"
              >
                <div className="box-border content-stretch flex flex-row h-full items-center justify-center p-0 relative">
                  <div className="font-['Inter'] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-white text-left text-nowrap">
                    <p className="block leading-[19.2px] whitespace-pre">
                      Portfolio Image
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HeroSectionBackgroundImage>
          <div className="relative shrink-0 w-full" data-name="Social Links">
            <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
              <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-gray-500 text-left text-nowrap">
                <p className="block leading-[19.2px] whitespace-pre">
                  Follow me:
                </p>
              </div>
              <BackgroundImage28>
                <HeroSectionBackgroundImageAndText text="in" />
                <HeroSectionBackgroundImageAndText text="X" />
                <HeroSectionBackgroundImageAndText text="Dr" />
                <HeroSectionBackgroundImageAndText text="GH" />
              </BackgroundImage28>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
