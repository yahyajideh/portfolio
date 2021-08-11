import React from 'react';
import CodePenIcon from './icons/codePenIcon';
import InstagramIcon from './icons/instagramIcon';
import LinkedInIcon from './icons/linkedInIcon';
import GithubIcon from './icons/githubIcon';

const SocialIcons = () => {
  return (
    <div class="social-icons">
      <a href="https://codepen.io/yahyajideh/pens/" target="_blank">
        <CodePenIcon />
      </a>
      <a href="https://instagram.com/yahyajideh" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://linkedin.com/yahyajideh" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/yahyajideh" target="_blank">
        <GithubIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
