import { h, render } from 'preact';
import styled from 'styled-components';

const LogoStyles = styled.div`
  #top,
  #bottom {
    fill: transparent;
    stroke: var(--logo-text-color);
  }
`;

const Logo = () => {
  return(
    <LogoStyles>
      <svg xmlns="http://www.w3.org/2000/svg" id="logo" width="100%" height="auto" viewBox="0 0 25 42">
        <g id="group">
          <rect id="top" x="8.8" y="1.3" width="6.7" height="4.95" fill="#fff" stroke="#000" stroke-width="0.5"/>
          <path id="bottom" d="M23.7,16.2l-1.5-4.9A19.3,19.3,0,0,0,19,12.6c-1.3.6-2.5,1.3-3.7,2v-5H8.9V29.3a13.1,13.1,0,0,1-.3,3.3,3.7,3.7,0,0,1-1.3,1.7,6.5,6.5,0,0,1-2.2,1.1l-3,.5,1.3,4.7a19.2,19.2,0,0,0,4.8-1A10.1,10.1,0,0,0,11.5,38a7.9,7.9,0,0,0,2.9-3.4,11.9,11.9,0,0,0,.9-4.7V19.5l4.9-2.1Z" fill="#fff" stroke="#000" stroke-width="0.5"/>
        </g>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 600 600">
        <g data-name="Layer 1">
          <circle className="logo-bg" cx="300.1" cy="300" r="292" />
          <path className="logo-text-accent" d="M162.2 493.9c20.5-.7 33.1-2.5 37.8-5.5s8.8-12.2 12.2-27.8l64.9-305.8h45.7l-66 310.7q-6.3 29.5-19 44.3-21.3 24.9-65.7 24.9l-7-.3c-2.4-.1-6.2-.5-11.2-1zm171.2-388.6h-45.6l11.1-52.7h45.7zM357.7 153.5h43.4l-9.9 46.9q8.1-13.7 33.1-33.3t52.1-19.7l4.3.3 10.1 1-10.1 48.2a56.3 56.3 0 0 0-7.4-1c-2.2-.2-4.6-.3-7.3-.3q-34.5 0-57.7 22.2c-15.5 14.8-25.3 31.8-29.6 51.1l-32.9 156.2h-45.7z"/>
          <path className="logo-text" d="M145.7 478.9c20.5-.7 33.1-2.5 37.8-5.5s8.8-12.2 12.2-27.8l64.9-305.8h45.7l-66 310.7q-6.3 29.5-19 44.3-21.3 24.9-65.7 24.9l-7-.3c-2.4-.1-6.2-.5-11.2-1zM316.9 90.3h-45.6l11.1-52.7h45.7zM341.2 138.5h43.4l-9.9 46.9q8.1-13.7 33.1-33.3t52.1-19.7l4.3.3 10.1 1-10.1 48.2a56.3 56.3 0 0 0-7.4-1c-2.2-.2-4.6-.3-7.3-.3q-34.5 0-57.7 22.2c-15.5 14.8-25.3 31.8-29.6 51.1l-32.9 156.2h-45.7z"/>
        </g>
      </svg> */}
    </LogoStyles>
  )
};

export default Logo;
