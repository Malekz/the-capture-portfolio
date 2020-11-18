import React from 'react';
import home1 from '../img/home1.png';

// Styled
//import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
          </Hide>
          <div className="hide">
            <h2>
              your <span>dreams</span>come
            </h2>
          </div>
          <Hide className="hide">
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil
          assumenda officia repudiandae. Obcaecati consequatur distinctio nisi,
          id deserunt laborum?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
