import { useNavigate } from "react-router-dom";

const Logo = {
  cursor: 'pointer',
  
};

const MainLogo = () => {

    const navigate = useNavigate();

  return (
  <div onClick={() => navigate('/')} style={Logo}>
    <svg width="100%" height="100%" viewBox="0 0 300 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M81.3313 35.8551C80.4767 34.9617 80.0779 33.6216 80.0779 31.8348C80.0779 31.0903 80.1918 30.1374 80.4197 28.9164L84.5789 8.57673C84.8353 7.35575 85.8038 6.40279 86.9718 6.25389L87.3136 6.19433C89.2793 5.92632 90.903 7.74289 90.4757 9.76792L86.3736 29.78C86.2596 30.2267 86.2026 30.7032 86.2026 31.2094C86.2026 31.805 86.3451 32.222 86.6015 32.49C86.8578 32.758 87.3136 32.8771 87.9404 32.8771C88.7665 32.8771 89.5356 32.5198 90.2478 31.7753C90.8461 31.1797 91.3019 30.4054 91.6152 29.512C91.7292 29.1844 92.0425 28.9462 92.3844 28.9462C92.9826 28.9462 93.3814 29.5716 93.1535 30.1374C92.1565 32.6984 90.96 34.4852 89.5072 35.4978C87.8549 36.6592 86.2026 37.225 84.5789 37.225C83.2685 37.1952 82.1574 36.7485 81.3313 35.8551Z" fill="#FFB703"/>
      <path d="M93.0111 35.4679C91.8431 34.3363 91.2449 32.5197 91.2449 30.0778C91.2449 28.0229 91.6437 25.7597 92.4129 23.2879C93.182 20.8162 94.4355 18.6721 96.1732 16.8853C97.9109 15.0985 100.104 14.1753 102.811 14.1753C105.944 14.1753 107.511 15.6047 107.511 18.4636C107.511 20.1313 107.055 21.6798 106.144 23.0795C105.232 24.4791 104.007 25.6108 102.497 26.4446C100.988 27.2784 99.3638 27.7847 97.6545 27.9038C97.5975 28.7972 97.5691 29.3928 97.5691 29.6906C97.5691 31.1498 97.797 32.1326 98.2812 32.6686C98.7655 33.2046 99.5347 33.4429 100.646 33.4429C102.184 33.4429 103.494 33.0855 104.605 32.3112C105.688 31.5668 106.913 30.4351 108.223 28.9163H109.676C106.514 34.4256 102.583 37.1952 97.9109 37.1952C95.8029 37.1952 94.1791 36.5996 93.0111 35.4679ZM101.016 24.5983C101.956 23.8835 102.725 22.9901 103.324 21.8883C103.893 20.7864 104.207 19.625 104.207 18.404C104.207 17.1831 103.836 16.5875 103.124 16.5875C102.099 16.5875 101.101 17.5106 100.104 19.3868C99.1359 21.2629 98.4237 23.4071 97.9964 25.7895C99.0504 25.7001 100.076 25.313 101.016 24.5983Z" fill="#FFB703"/>
      <path d="M119.818 35.736C118.991 34.783 118.593 33.562 118.593 32.1326C118.593 31.5072 118.65 30.7925 118.821 30.0182C118.963 29.244 119.105 28.4697 119.276 27.7252C119.419 26.9807 119.533 26.5042 119.59 26.2957C119.818 25.2534 120.017 24.2409 120.245 23.2284C120.444 22.2159 120.558 21.3821 120.558 20.7567C120.558 19.2379 120.046 18.4636 119.02 18.4636C118.279 18.4636 117.624 18.8508 117.054 19.5953C116.485 20.3398 116.029 21.3523 115.687 22.5733L113.266 34.5448C112.981 35.9146 111.813 36.8974 110.474 36.8974H110.132C108.309 36.8974 106.97 35.1404 107.34 33.294L110.673 16.9151C110.958 15.5452 112.126 14.5625 113.465 14.5625H115.032C116.2 14.5625 117.083 15.6941 116.826 16.8853C118.251 15.2176 119.903 14.3838 121.84 14.3838C123.293 14.3838 124.433 14.8007 125.287 15.6345C126.142 16.4684 126.569 17.7191 126.569 19.4166C126.569 20.2802 126.455 21.2332 126.256 22.3052C126.056 23.3773 125.771 24.6579 125.401 26.1766C125.173 27.0998 124.974 27.9932 124.774 28.8866C124.575 29.78 124.49 30.4649 124.49 30.9712C124.49 31.5668 124.632 32.0433 124.888 32.3708C125.145 32.6984 125.572 32.8473 126.199 32.8473C127.053 32.8473 127.737 32.5197 128.25 31.8944C128.763 31.269 129.275 30.2565 129.788 28.9164H131.583C130.529 32.1922 129.304 34.3959 127.937 35.4977C126.541 36.6294 125.116 37.1654 123.635 37.1654C121.897 37.1952 120.644 36.6889 119.818 35.736Z" fill="#FFB703"/>
      <path d="M130.871 35.4382C129.788 34.2768 129.247 32.4602 129.247 29.9885C129.247 27.7848 129.674 25.4619 130.501 23.0498C131.327 20.6376 132.609 18.5828 134.261 16.8853C135.942 15.2176 137.907 14.354 140.215 14.354C141.383 14.354 142.237 14.5625 142.807 14.9794C143.377 15.3963 143.662 15.9621 143.662 16.6173V16.796L145.342 8.57673C145.599 7.35575 146.567 6.40279 147.735 6.25389L148.049 6.19433C150.014 5.92632 151.638 7.74289 151.211 9.76792L147.194 29.78C147.08 30.2267 147.023 30.7032 147.023 31.2094C147.023 31.805 147.166 32.222 147.422 32.49C147.678 32.758 148.134 32.8771 148.761 32.8771C149.559 32.8771 150.242 32.5198 150.84 31.805C151.41 31.0903 151.895 30.1374 152.236 28.9462H154.031C152.293 34.2768 149.416 36.957 145.456 36.957C144.288 36.957 143.348 36.6294 142.608 35.9742C141.895 35.3191 141.44 34.3661 141.269 33.1154C140.528 34.3066 139.645 35.2893 138.591 36.0636C137.537 36.8378 136.34 37.225 134.945 37.225C133.292 37.1952 131.953 36.5996 130.871 35.4382ZM139.787 31.8646C140.471 31.2094 140.955 30.2863 141.212 29.1546V28.9164L143.32 18.6721C143.063 17.6298 142.465 17.0938 141.582 17.0938C140.443 17.0938 139.417 17.7787 138.505 19.1784C137.594 20.5482 136.882 22.2457 136.369 24.1814C135.856 26.1469 135.6 27.8443 135.6 29.3333C135.6 30.8223 135.799 31.7753 136.226 32.1922C136.625 32.6091 137.138 32.8176 137.736 32.8176C138.392 32.8473 139.075 32.5198 139.787 31.8646Z" fill="#FFB703"/>
      <path d="M153.461 35.4084C152.236 34.2767 151.61 32.4899 151.61 30.048C151.61 27.9932 152.008 25.7299 152.778 23.2879C153.547 20.8162 154.8 18.7018 156.538 16.915C158.276 15.1283 160.498 14.2051 163.204 14.2051C166.565 14.2051 168.389 16.2301 168.645 20.2206C169.272 20.0717 169.813 19.7144 170.326 19.1188C170.81 18.5232 171.266 17.868 171.693 17.1235C172.32 17.1235 172.719 17.8382 172.434 18.404C171.921 19.4166 171.437 20.2504 171.009 20.9056C170.411 21.8287 169.614 22.5434 168.645 23.1093C168.474 25.9086 167.933 28.3803 166.993 30.4947C166.053 32.6091 164.856 34.247 163.375 35.3786C161.894 36.54 160.27 37.1058 158.447 37.1058C156.367 37.1058 154.686 36.54 153.461 35.4084ZM163.118 30.4053C164.03 28.6185 164.657 26.4148 164.999 23.7942C164.315 23.5262 163.973 22.871 163.973 21.7692C163.973 20.6078 164.372 19.8335 165.17 19.4463C165.113 18.4934 164.97 17.8382 164.714 17.4511C164.457 17.0937 164.087 16.8853 163.546 16.8853C162.606 16.8853 161.694 17.6 160.839 18.9996C159.985 20.4291 159.301 22.1265 158.76 24.1218C158.219 26.1468 157.962 27.9038 157.962 29.4226C157.962 30.852 158.105 31.805 158.418 32.3113C158.731 32.7877 159.301 33.0558 160.127 33.0558C161.238 33.0855 162.207 32.1921 163.118 30.4053Z" fill="#FFB703"/>
      <path d="M204.482 35.736C203.656 34.783 203.257 33.562 203.257 32.1326C203.257 31.5072 203.314 30.7925 203.485 30.0182C203.627 29.2439 203.77 28.4697 203.941 27.7252C204.083 26.9807 204.197 26.5042 204.254 26.2957C204.482 25.2534 204.681 24.2409 204.909 23.2284C205.109 22.2159 205.194 21.382 205.194 20.7567C205.194 19.2379 204.681 18.4636 203.656 18.4636C202.915 18.4636 202.26 18.8508 201.69 19.5953C201.121 20.3398 200.665 21.3523 200.323 22.5732L197.901 34.5448C197.617 35.9146 196.449 36.8974 195.11 36.8974H194.768C192.945 36.8974 191.606 35.1404 191.976 33.294L194.369 21.4714C194.455 21.114 194.511 20.7567 194.511 20.3398C194.511 19.0294 194.084 18.3743 193.23 18.3743C192.432 18.3743 191.748 18.7614 191.15 19.5059C190.552 20.2504 190.096 21.2629 189.754 22.5137L187.333 34.4852C187.048 35.8551 185.88 36.8378 184.541 36.8378H184.199C182.376 36.8378 181.037 35.0808 181.407 33.2344L184.74 16.8555C185.025 15.4856 186.193 14.5029 187.532 14.5029H189.099C190.267 14.5029 191.15 15.6345 190.894 16.8257C192.346 15.1283 194.084 14.2944 196.107 14.2944C198.614 14.2944 200.067 15.575 200.494 18.136C202.061 15.6047 204.055 14.3242 206.448 14.3242C207.901 14.3242 209.04 14.7411 209.895 15.575C210.749 16.4088 211.177 17.6596 211.177 19.357C211.177 20.2206 211.063 21.1736 210.892 22.2457C210.692 23.3177 210.407 24.5983 210.037 26.117C209.809 27.0402 209.61 27.9336 209.41 28.827C209.211 29.7204 209.125 30.4054 209.125 30.9116C209.125 31.5072 209.239 31.9837 209.496 32.3113C209.752 32.6388 210.18 32.7877 210.835 32.7877C211.689 32.7877 212.373 32.4602 212.886 31.8348C213.399 31.2094 213.911 30.1969 214.424 28.8568H216.219C215.165 32.1326 213.94 34.3363 212.572 35.4382C211.177 36.5698 209.752 37.1058 208.271 37.1058C206.562 37.1952 205.28 36.6889 204.482 35.736Z" fill="#FFB703"/>
      <path d="M215.364 35.8551C214.509 34.9617 214.111 33.6216 214.111 31.8348C214.111 31.0903 214.225 30.1374 214.452 28.9164L216.874 16.9449C217.159 15.575 218.327 14.5923 219.666 14.5923H220.007C221.831 14.5923 223.17 16.3493 222.799 18.1956L220.463 29.78C220.378 30.2267 220.321 30.6436 220.321 31.0308C220.321 32.2517 220.748 32.8473 221.603 32.8473C222.4 32.8473 223.084 32.49 223.654 31.805C224.224 31.1201 224.679 30.1374 225.021 28.9164L227.443 16.9449C227.728 15.575 228.896 14.5923 230.234 14.5923H230.576C232.399 14.5923 233.738 16.3493 233.368 18.1956L231.032 29.78C230.918 30.2267 230.861 30.7032 230.861 31.2095C230.861 31.805 231.004 32.222 231.26 32.49C231.516 32.758 231.972 32.8771 232.599 32.8771C233.397 32.8771 234.08 32.5198 234.678 31.805C235.248 31.0903 235.732 30.1374 236.074 28.9462H237.869C236.815 32.1624 235.505 34.3363 233.966 35.4978C232.399 36.6592 230.861 37.225 229.294 37.225C228.069 37.225 227.101 36.8676 226.36 36.1529C225.648 35.4382 225.192 34.3959 225.05 32.9962C224.081 34.6341 223.056 35.7658 222.002 36.3614C220.919 36.957 219.837 37.2548 218.726 37.2548C217.301 37.1952 216.219 36.7485 215.364 35.8551ZM230.348 3.4248C231.516 3.4248 232.229 4.7649 231.602 5.8072L227.898 11.8823C226.417 11.8823 225.449 10.2742 226.075 8.87453L227.785 5.12226C228.24 4.07996 229.237 3.4248 230.348 3.4248Z" fill="#FFB703"/>
      <path d="M237.442 36.3614C236.502 35.8254 235.818 35.1107 235.334 34.2173C234.878 33.3537 234.65 32.4305 234.65 31.4775C234.65 30.4948 234.878 29.6312 235.305 28.9164C235.761 28.2017 236.274 27.6657 236.901 27.3381C238.012 25.2535 238.98 23.1391 239.806 21.0248C240.433 19.4167 241.031 17.6894 241.601 15.9026C241.943 14.8306 242.854 14.0265 243.937 13.8776L245.39 13.6691C247.042 13.4309 248.523 14.7412 248.609 16.4685C248.751 19.3571 248.951 22.3947 249.207 25.6109C249.35 27.3977 249.435 28.708 249.435 29.512C249.435 30.197 249.378 30.7628 249.264 31.2095C250.603 30.4054 251.629 29.6609 252.341 28.976H254.135C252.312 31.1797 250.119 33.0261 247.612 34.5746C246.786 35.4978 245.76 36.1827 244.564 36.5997C243.339 37.0166 242.142 37.2548 240.917 37.2548C239.521 37.1953 238.382 36.8975 237.442 36.3614ZM242.171 32.6687C242.883 32.0136 243.253 30.9713 243.253 29.512C243.253 28.6187 243.168 27.3679 242.997 25.7598C242.712 22.3649 242.513 20.1016 242.427 18.9104C241.743 21.263 240.575 24.0921 238.952 27.3679C239.607 27.7253 239.949 28.2613 239.949 28.9462C239.949 29.512 239.778 30.0183 239.408 30.465C239.037 30.9117 238.61 31.1499 238.069 31.1499C237.47 31.1499 237.072 30.9713 236.929 30.5543C236.929 31.6264 237.129 32.4305 237.556 32.9367C237.955 33.443 238.638 33.6812 239.55 33.6812C240.576 33.6515 241.459 33.3239 242.171 32.6687Z" fill="#FFB703"/>
      <path d="M253.281 35.8549C252.426 34.9615 252.027 33.6214 252.027 31.8346C252.027 31.0901 252.141 30.1372 252.369 28.9162L254.791 16.9447C255.075 15.5748 256.243 14.5921 257.582 14.5921H257.924C259.747 14.5921 261.086 16.3491 260.716 18.1954L258.38 29.7798C258.266 30.2265 258.209 30.703 258.209 31.2093C258.209 31.8049 258.352 32.2218 258.608 32.4898C258.864 32.7578 259.32 32.8769 259.947 32.8769C260.773 32.8769 261.542 32.5196 262.254 31.7751C262.966 31.0604 263.479 30.1074 263.793 28.946H265.587C264.533 32.1622 263.166 34.3361 261.514 35.4976C259.861 36.659 258.238 37.2248 256.585 37.2248C255.218 37.195 254.107 36.7483 253.281 35.8549ZM257.098 11.1376C256.471 10.4824 256.158 9.70817 256.13 8.81477C256.101 7.83204 256.443 6.8493 257.098 6.13458C257.753 5.44964 258.551 5.09229 259.491 5.09229C260.431 5.09229 261.229 5.44964 261.912 6.13458C262.568 6.8493 262.91 7.68314 262.91 8.66587C262.91 9.64861 262.568 10.4824 261.912 11.1674C261.229 11.8523 260.289 12.2395 259.349 12.1799C258.465 12.1203 257.725 11.7928 257.098 11.1376Z" fill="#FFB703"/>
      <path d="M264.961 35.4679C263.793 34.3363 263.194 32.5197 263.194 30.0778C263.194 28.0229 263.593 25.7597 264.362 23.2879C265.131 20.8162 266.385 18.6721 268.123 16.8853C269.832 15.0985 272.025 14.1753 274.675 14.1753C276.384 14.1753 277.609 14.5624 278.321 15.3367C279.062 16.111 279.404 17.0937 279.404 18.2849C279.404 19.3272 279.176 20.1313 278.748 20.6971C278.321 21.2629 277.78 21.5607 277.125 21.5607C277.125 21.5607 277.125 21.5607 277.096 21.5607C276.327 21.5607 275.757 20.7566 275.928 19.9526C276.071 19.3868 276.128 18.8805 276.128 18.3743C276.128 17.8084 276.014 17.3617 275.814 17.0342C275.615 16.7066 275.301 16.5577 274.931 16.5577C274.076 16.5577 273.222 17.3022 272.367 18.7614C271.513 20.2206 270.8 22.0074 270.259 24.0622C269.718 26.1468 269.462 28.0229 269.462 29.6906C269.462 31.1498 269.689 32.1326 270.174 32.6686C270.658 33.2046 271.427 33.4429 272.538 33.4429C274.076 33.4429 275.387 33.0855 276.498 32.3112C277.552 31.5965 278.691 30.5542 279.916 29.1248C280.03 28.9759 280.201 28.9163 280.401 28.9163C280.913 28.9163 281.227 29.5119 280.942 29.9586C277.894 34.783 274.19 37.1654 269.832 37.1654C267.752 37.1951 266.129 36.5995 264.961 35.4679Z" fill="#FFB703"/>
      <path d="M281.227 35.4382C280.144 34.2768 279.603 32.4602 279.603 29.9885C279.603 27.7847 280.03 25.4619 280.856 23.0497C281.683 20.6376 282.965 18.5827 284.617 16.8853C286.298 15.2176 288.263 14.354 290.571 14.354C291.739 14.354 292.593 14.5625 293.191 14.9794C293.761 15.3963 294.046 15.9621 294.046 16.6173V16.9449C294.331 15.575 295.47 14.5625 296.838 14.5625H297.151C298.974 14.5625 300.313 16.3195 299.943 18.1658L297.607 29.7502C297.493 30.1969 297.436 30.6734 297.436 31.1796C297.436 31.7752 297.579 32.1922 297.835 32.4602C298.091 32.7282 298.547 32.8473 299.174 32.8473C299.573 32.8473 299.858 33.294 299.715 33.6812C299.231 34.8128 298.775 35.6466 298.319 36.1827C297.749 36.8676 296.923 37.1952 295.841 37.1952C294.673 37.1952 293.733 36.8378 292.992 36.0933C292.28 35.3786 291.824 34.3363 291.653 33.026C289.915 35.7955 287.779 37.1654 285.3 37.1654C283.677 37.1952 282.309 36.5996 281.227 35.4382ZM290.2 31.805C290.884 31.1201 291.368 30.1374 291.625 28.9164L293.676 18.821C293.676 18.4339 293.533 18.0467 293.248 17.6894C292.964 17.332 292.508 17.1235 291.91 17.1235C290.77 17.1235 289.745 17.8085 288.833 19.2081C287.921 20.578 287.209 22.2755 286.696 24.2112C286.184 26.1766 285.927 27.8741 285.927 29.3631C285.927 30.8521 286.127 31.805 286.554 32.2219C286.953 32.6389 287.466 32.8473 288.064 32.8473C288.776 32.8473 289.488 32.49 290.2 31.805Z" fill="#FFB703"/>
      <path d="M0 4.40752V37.9695C0 39.6669 1.62378 40.8581 3.16209 40.2327C7.74855 38.3864 16.9215 36.0933 28.2309 40.4114C29.7408 41.007 31.3645 39.8158 31.3645 38.1184V4.40752C31.3645 3.33545 30.6808 2.38249 29.7123 2.08469C25.6101 0.774376 14.4431 -1.87604 1.65226 2.08469C0.683696 2.38249 0 3.33545 0 4.40752Z" fill="#FFB703"/>
      <path d="M35.2104 4.40752V37.9695C35.2104 39.6669 36.8342 40.8581 38.3725 40.2327C42.959 38.3864 52.1319 36.0933 63.4414 40.4114C64.9512 41.007 66.575 39.8158 66.575 38.1184V4.40752C66.575 3.33545 65.8913 2.38249 64.9227 2.08469C60.8206 0.774376 49.6535 -1.87604 36.8627 2.08469C35.8941 2.38249 35.2104 3.33545 35.2104 4.40752Z" fill="#FFB703"/>
      <path d="M20.5963 25.7594C19.1719 26.5039 17.6336 26.2657 17.1493 25.2532C16.6651 24.2406 17.4057 22.8112 18.8301 22.0667C19.3713 21.7987 19.9126 21.6498 20.3969 21.6498C20.5393 21.6498 20.6818 21.5009 20.6818 21.352V16.2894C20.6818 16.1703 20.5678 16.0512 20.4539 16.0512H12.9332C12.8193 16.0512 12.7053 16.1703 12.7053 16.2894V22.8708C12.7053 22.8708 12.7053 22.9005 12.7338 22.9005C13.2181 23.9131 12.4774 25.3425 11.0531 26.087C9.62868 26.8315 8.09037 26.5932 7.60609 25.5807C7.1218 24.5682 7.86247 23.1388 9.28684 22.3943C9.79961 22.1263 10.3409 21.9774 10.8252 21.9774C10.9676 21.9774 11.11 21.8285 11.11 21.6796V13.371C11.11 12.9838 11.4234 12.6562 11.7937 12.6562H21.6788C22.0492 12.6562 22.3625 12.9838 22.3625 13.371V22.573C22.3625 22.6027 22.3625 22.6623 22.391 22.6921C22.6759 23.7046 21.9352 25.0447 20.5963 25.7594Z" fill="white"/>
      <path d="M54.3253 24.5387C52.9009 25.2832 51.3626 25.045 50.8783 24.0324C50.3941 23.0199 51.1347 21.5905 52.5591 20.846C53.1004 20.578 53.6416 20.4291 54.1259 20.4291C54.2683 20.4291 54.4108 20.2802 54.4108 20.1313V15.0687C54.4108 14.9496 54.2968 14.8305 54.1829 14.8305H46.6622C46.5483 14.8305 46.4343 14.9496 46.4343 15.0687V21.65C46.4343 21.65 46.4343 21.6798 46.4628 21.6798C46.9471 22.6923 46.2064 24.1218 44.7821 24.8663C43.3577 25.6108 41.8194 25.3725 41.3351 24.36C40.8508 23.3475 41.5915 21.9181 43.0158 21.1736C43.5286 20.9056 44.0699 20.7567 44.5542 20.7567C44.6966 20.7567 44.839 20.6078 44.839 20.4589V12.1503C44.839 11.7631 45.1524 11.4355 45.5227 11.4355H55.4078C55.7782 11.4355 56.0915 11.7631 56.0915 12.1503V21.3522C56.0915 21.382 56.0915 21.4416 56.12 21.4714C56.4334 22.4839 55.6927 23.824 54.3253 24.5387Z" fill="white"/>
    </svg>
  </div>

  );
}

export default MainLogo;