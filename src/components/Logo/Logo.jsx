import { Link } from 'react-router-dom';

import { ROUTE } from '../../variables/route.js';

import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link to={ROUTE.HOME} className={css.link}>
      <svg className={css.logo} width="136" height="16" viewBox="0 0 136 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M135.393 7.1875H131.785C131.766 6.96497 131.688 6.77321 131.55 6.61222C131.413 6.45124 131.235 6.32813 131.018 6.2429C130.804 6.15294 130.568 6.10796 130.307 6.10796C129.971 6.10796 129.682 6.16951 129.441 6.29262C129.199 6.41572 129.081 6.59091 129.086 6.81819C129.081 6.97917 129.15 7.12832 129.292 7.26563C129.438 7.40294 129.72 7.50947 130.137 7.58523L132.353 7.98296C133.47 8.18656 134.301 8.52983 134.846 9.01279C135.395 9.49101 135.672 10.1326 135.677 10.9375C135.672 11.714 135.44 12.3887 134.981 12.9617C134.526 13.5298 133.903 13.9702 133.113 14.2827C132.327 14.5904 131.429 14.7443 130.421 14.7443C128.754 14.7443 127.45 14.4034 126.508 13.7216C125.57 13.0398 125.047 12.1402 124.938 11.0227H128.83C128.882 11.3684 129.053 11.6359 129.341 11.8253C129.635 12.0099 130.004 12.1023 130.449 12.1023C130.809 12.1023 131.105 12.0407 131.337 11.9176C131.574 11.7945 131.695 11.6193 131.699 11.3921C131.695 11.1837 131.59 11.018 131.387 10.8949C131.188 10.7718 130.875 10.6724 130.449 10.5966L128.518 10.2557C127.405 10.0616 126.572 9.69224 126.018 9.14773C125.464 8.60322 125.189 7.90247 125.194 7.04546C125.189 6.28788 125.388 5.64631 125.79 5.12074C126.197 4.59044 126.777 4.18798 127.53 3.91336C128.288 3.634 129.185 3.49432 130.222 3.49432C131.799 3.49432 133.042 3.82103 133.951 4.47444C134.865 5.12785 135.345 6.0322 135.393 7.1875Z"
          fill="#475467"/>
        <path
          d="M116.415 11.9602L116.443 7.30114H116.955L119.597 3.63636H124L119.568 9.34659H118.46L116.415 11.9602ZM112.892 14.5455V0H116.813V14.5455H112.892ZM119.625 14.5455L117.125 10.2273L119.682 7.44318L124.114 14.5455H119.625Z"
          fill="#475467"/>
        <path
          d="M105.619 14.7443C104.435 14.7443 103.422 14.5099 102.579 14.0412C101.736 13.5677 101.09 12.9096 100.64 12.0668C100.19 11.2192 99.9653 10.2367 99.9653 9.11932C99.9653 8.0019 100.19 7.02178 100.64 6.17898C101.09 5.33144 101.736 4.6733 102.579 4.20455C103.422 3.73107 104.435 3.49432 105.619 3.49432C106.689 3.49432 107.614 3.68845 108.396 4.07671C109.182 4.46023 109.79 5.00474 110.221 5.71023C110.652 6.41099 110.87 7.23485 110.874 8.18182H107.238C107.186 7.60891 107.02 7.1733 106.741 6.875C106.466 6.57197 106.111 6.42046 105.676 6.42046C105.335 6.42046 105.036 6.51989 104.781 6.71875C104.525 6.91288 104.326 7.20881 104.184 7.60654C104.042 7.99953 103.971 8.49432 103.971 9.09091C103.971 9.6875 104.042 10.1847 104.184 10.5824C104.326 10.9754 104.525 11.2713 104.781 11.4702C105.036 11.6643 105.335 11.7614 105.676 11.7614C105.964 11.7614 106.22 11.6951 106.443 11.5625C106.665 11.4252 106.845 11.2263 106.982 10.9659C107.124 10.7008 107.21 10.3788 107.238 10H110.874C110.86 10.9612 110.64 11.7992 110.214 12.5142C109.788 13.2244 109.184 13.7737 108.403 14.1619C107.626 14.5502 106.698 14.7443 105.619 14.7443Z"
          fill="#475467"/>
        <path
          d="M94.0487 9.77272V3.63635H97.9692V14.5454H94.2476V12.4716H94.1339C93.8972 13.1676 93.4829 13.7121 92.8911 14.1051C92.2992 14.4934 91.5961 14.6875 90.7817 14.6875C90.0194 14.6875 89.3517 14.5123 88.7788 14.1619C88.2106 13.8115 87.7679 13.3286 87.4507 12.7131C87.1382 12.0975 86.9796 11.392 86.9749 10.5966V3.63635H90.8953V9.77272C90.9 10.3125 91.0374 10.7363 91.3072 11.044C91.5819 11.3518 91.9654 11.5057 92.4578 11.5057C92.7845 11.5057 93.0662 11.437 93.303 11.2997C93.5445 11.1577 93.7291 10.9588 93.857 10.7031C93.9895 10.4427 94.0535 10.1326 94.0487 9.77272Z"
          fill="#475467"/>
        <path
          d="M77.9031 14.5455V3.63637H81.7099V5.71023H81.8235C82.0224 4.94319 82.3373 4.38211 82.7681 4.02699C83.2037 3.67188 83.7127 3.49432 84.2951 3.49432C84.4656 3.49432 84.6337 3.50853 84.7994 3.53694C84.9698 3.56061 85.1332 3.59612 85.2894 3.64347V6.98864C85.0953 6.92235 84.8562 6.87264 84.5721 6.83949C84.288 6.80635 84.0442 6.78978 83.8406 6.78978C83.4571 6.78978 83.1114 6.87737 82.8036 7.05256C82.5006 7.22302 82.2615 7.46449 82.0863 7.77699C81.9111 8.08476 81.8235 8.44698 81.8235 8.86364V14.5455H77.9031Z"
          fill="#475467"/>
        <path d="M64.4507 3.18182V0H77.0927V3.18182H72.7177V14.5455H68.8257V3.18182H64.4507Z" fill="#475467"/>
        <path d="M62.5079 0V14.5455H58.5874V0H62.5079Z" fill="#101828"/>
        <path
          d="M51.2466 14.7443C50.0818 14.7443 49.078 14.5218 48.2352 14.0767C47.3971 13.6269 46.7508 12.983 46.2963 12.1449C45.8465 11.3021 45.6216 10.2936 45.6216 9.11932C45.6216 7.99243 45.8489 7.00758 46.3034 6.16478C46.7579 5.32197 47.3995 4.6662 48.2281 4.19745C49.0567 3.7287 50.0345 3.49432 51.1614 3.49432C51.9852 3.49432 52.731 3.62216 53.3986 3.87785C54.0662 4.13353 54.6367 4.50521 55.1102 4.9929C55.5837 5.47586 55.9483 6.06298 56.204 6.75427C56.4597 7.44555 56.5875 8.22444 56.5875 9.09091V10H46.8432V7.84091H52.9795C52.9748 7.52841 52.8943 7.25379 52.7381 7.01705C52.5865 6.77557 52.3806 6.58855 52.1202 6.45597C51.8645 6.31866 51.5733 6.25 51.2466 6.25C50.9293 6.25 50.6382 6.31866 50.373 6.45597C50.1079 6.58855 49.8948 6.77321 49.7338 7.00995C49.5775 7.24669 49.4947 7.52368 49.4852 7.84091V10.1705C49.4852 10.5208 49.5586 10.8333 49.7054 11.108C49.8522 11.3826 50.0629 11.598 50.3375 11.7543C50.6121 11.9105 50.9436 11.9886 51.3318 11.9886C51.6017 11.9886 51.8479 11.9508 52.0704 11.875C52.2977 11.7992 52.4918 11.6903 52.6528 11.5483C52.8138 11.4015 52.9322 11.2263 53.0079 11.0227H56.5875C56.4644 11.7803 56.1732 12.4385 55.7139 12.9972C55.2546 13.5511 54.6462 13.982 53.8886 14.2898C53.1358 14.5928 52.2551 14.7443 51.2466 14.7443Z"
          fill="#101828"/>
        <path
          d="M44.8364 3.63635L41.1717 14.5454H36.6262L32.9614 3.63635H37.0807L38.8421 10.8523H38.9557L40.7171 3.63635H44.8364Z"
          fill="#101828"/>
        <path
          d="M25.056 14.7159C24.36 14.7159 23.7445 14.6023 23.2094 14.375C22.6791 14.143 22.2625 13.7926 21.9594 13.3239C21.6564 12.8551 21.5049 12.2585 21.5049 11.5341C21.5049 10.9375 21.6067 10.4285 21.8103 10.0071C22.0139 9.58097 22.298 9.23296 22.6626 8.96307C23.0271 8.69319 23.4509 8.48722 23.9339 8.34518C24.4216 8.20313 24.9471 8.1108 25.5106 8.06819C26.1214 8.02084 26.6114 7.96402 26.9807 7.89773C27.3548 7.82671 27.6247 7.72964 27.7904 7.60654C27.9561 7.4787 28.039 7.31061 28.039 7.10228V7.07387C28.039 6.78978 27.9301 6.57197 27.7123 6.42046C27.4945 6.26894 27.2151 6.19319 26.8742 6.19319C26.5001 6.19319 26.1948 6.27605 25.958 6.44177C25.726 6.60275 25.5863 6.85133 25.539 7.1875H21.931C21.9784 6.52463 22.1891 5.91383 22.5631 5.35512C22.9419 4.79167 23.4935 4.34186 24.218 4.00569C24.9424 3.66478 25.8467 3.49432 26.931 3.49432C27.7123 3.49432 28.413 3.58665 29.0333 3.77131C29.6536 3.95124 30.1815 4.20455 30.6171 4.53125C31.0527 4.85322 31.3841 5.23201 31.6114 5.66762C31.8434 6.09849 31.9594 6.56724 31.9594 7.07387V14.5455H28.2947V13.0114H28.2094C27.9916 13.4186 27.7265 13.7476 27.414 13.9986C27.1062 14.2495 26.7535 14.4318 26.3557 14.5455C25.9627 14.6591 25.5295 14.7159 25.056 14.7159ZM26.3344 12.2443C26.6327 12.2443 26.9121 12.1828 27.1725 12.0597C27.4376 11.9366 27.6531 11.759 27.8188 11.527C27.9845 11.295 28.0674 11.0133 28.0674 10.6818V9.77273C27.9632 9.81535 27.8519 9.85559 27.7336 9.89347C27.6199 9.93135 27.4968 9.96686 27.3643 10C27.2364 10.0331 27.0991 10.0639 26.9523 10.0923C26.8103 10.1207 26.6611 10.1468 26.5049 10.1705C26.2019 10.2178 25.9533 10.2959 25.7591 10.4048C25.5697 10.509 25.4277 10.6392 25.333 10.7955C25.243 10.947 25.1981 11.1174 25.1981 11.3068C25.1981 11.6099 25.3046 11.8419 25.5177 12.0028C25.7307 12.1638 26.003 12.2443 26.3344 12.2443Z"
          fill="#101828"/>
        <path
          d="M13.4521 14.5455V3.63637H17.259V5.71023H17.3726C17.5715 4.94319 17.8863 4.38211 18.3172 4.02699C18.7528 3.67188 19.2618 3.49432 19.8442 3.49432C20.0146 3.49432 20.1827 3.50853 20.3485 3.53694C20.5189 3.56061 20.6823 3.59612 20.8385 3.64347V6.98864C20.6444 6.92235 20.4053 6.87264 20.1212 6.83949C19.8371 6.80635 19.5932 6.78978 19.3896 6.78978C19.0061 6.78978 18.6605 6.87737 18.3527 7.05256C18.0497 7.22302 17.8106 7.46449 17.6354 7.77699C17.4602 8.08476 17.3726 8.44698 17.3726 8.86364V14.5455H13.4521Z"
          fill="#101828"/>
        <path d="M0 3.18182V0H12.642V3.18182H8.26705V14.5455H4.375V3.18182H0Z" fill="#101828"/>
      </svg>
    </Link>
  );
};

export default Logo;