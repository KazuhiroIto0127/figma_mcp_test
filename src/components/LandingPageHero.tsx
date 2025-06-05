import React from 'react';

export default function LandingPageHero() {
  return (
    <div className="bg-white relative w-full h-screen min-h-[500px]" data-name="Landing Page Hero">
      <div className="absolute left-[75px] md:left-5 top-[59px] md:top-10 w-[90px] md:w-[70px] h-[90px] md:h-[70px]">
        <img
          alt="Profile"
          className="block max-w-none w-full h-full rounded-full object-cover"
          src="data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4="
        />
      </div>
      <h1 className="absolute left-[75px] md:left-5 top-[162px] md:top-32 font-['Inter'] font-bold text-[40px] md:text-[28px] text-black text-left whitespace-nowrap md:whitespace-normal m-0 leading-normal">
        Hi, I'm Kazuhiro Ito!
      </h1>
      <div className="absolute left-[75px] md:left-5 top-[229px] md:top-45 w-[378px] md:w-[calc(100%-2.5rem)] h-[181px] font-['Inter'] font-bold text-[28px] md:text-[20px] text-black text-left leading-[38px] md:leading-7">
        <p className="block m-0">Wow, This site is insane. </p>
        <p className="block m-0">Stay foolish. Stay hungry.</p>
        <p className="block m-0">Bye. :/</p>
      </div>
    </div>
  );
}
