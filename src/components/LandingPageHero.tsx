import React from 'react';
import './LandingPageHero.css';

export default function LandingPageHero() {
  return (
    <div className="landing-page-hero" data-name="Landing Page Hero">
      <div className="profile-image">
        <img
          alt="Profile"
          src="data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4="
        />
      </div>
      <h1 className="main-title">
        Hi, I'm Kazuhiro Ito!
      </h1>
      <div className="description">
        <p>Wow, This site is insane. </p>
        <p>Stay foolish. Stay hungry.</p>
        <p>Bye. :/</p>
      </div>
    </div>
  );
}
