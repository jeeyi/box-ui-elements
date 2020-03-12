import * as React from 'react';

import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue, white } from '../../styles/variables';

import { Icon } from '../iconTypes';

const UsersEmptyState = ({ className, color = bdlBoxBlue, height = 135, title, width = 130 }: Icon) => (
    <AccessibleSVG
        className={classNames('users-empty-state', className)}
        height={height}
        title={title}
        viewBox="0 0 130 135"
        width={width}
    >
        <g fill="none" fillRule="evenodd">
            <path
                className="stroke-color"
                d="M87,42 C70.4314575,42 57,55.4314575 57,72 C57,88.5685425 70.4314575,102 87,102 L87,102 C103.568542,102 117,88.5685425 117,72"
                fill={white}
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                className="stroke-color"
                d="M117,72 C117,55.4314575 103.504277,42 86.8564593,42"
                fill={white}
                stroke={color}
                strokeDasharray="5.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                className="fill-color"
                d="M67.5242615,93.487395 C72.3591913,87.9794825 79.4686815,84.5 87.3947368,84.5 C95.1274446,84.5 102.08294,87.8117966 106.907344,93.0879584 C101.713335,97.9929356 94.7078361,101 87,101 C79.5036503,101 72.6716257,98.1556865 67.5242615,93.487395 Z"
                fill={color}
                fillOpacity="0.07"
            />
            <path
                className="stroke-color"
                d="M108.979669,91.3186746 C103.488769,85.5780262 95.7360004,82 87.1435407,82 C78.2789121,82 70.3080124,85.8082864 64.7924873,91.8706496"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <circle
                className="stroke-color"
                cx="87"
                cy="70"
                fill={white}
                r="8"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <circle
                className="stroke-color"
                cx="42"
                cy="72"
                fill={white}
                r="30"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                className="fill-color"
                d="M22.5242615,93.487395 C27.3591913,87.9794825 34.4686815,84.5 42.3947368,84.5 C50.1274446,84.5 57.0829397,87.8117966 61.9073441,93.0879584 C56.7133346,97.9929356 49.7078361,101 42,101 C34.5036503,101 27.6716257,98.1556865 22.5242615,93.487395 Z"
                fill={color}
                fillOpacity="0.07"
            />
            <path
                className="stroke-color"
                d="M64.557292,91.9397778 C59.0395648,85.8372507 51.0418158,82 42.1435407,82 C33.2789121,82 25.3080124,85.8082864 19.7924873,91.8706496"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <circle
                className="stroke-color"
                cx="42"
                cy="70"
                fill={white}
                r="8"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                className="fill-color"
                d="M77,1.1337822 L77,0.491787584 C77,0.220180801 77.2319336,0 77.5,0 C77.7761424,0 78,0.215057373 78,0.490478516 L78,1.1337822 C78.151814,1.22160185 78.2783981,1.348186 78.3662178,1.5 L79.0095215,1.5 C79.2804053,1.5 79.5,1.73193359 79.5,2 C79.5,2.27614237 79.2849426,2.5 79.0095215,2.5 L78.3662178,2.5 C78.2783981,2.651814 78.151814,2.77839815 78,2.8662178 L78,3.50952148 C78,3.78040529 77.7680664,4 77.5,4 C77.2238576,4 77,3.76897915 77,3.49525623 L77,2.8662178 C76.848186,2.77839815 76.7216019,2.651814 76.6337822,2.5 L75.9904785,2.5 C75.7195947,2.5 75.5,2.26806641 75.5,2 C75.5,1.72385763 75.7150574,1.5 75.9904785,1.5 L76.6337822,1.5 C76.7216019,1.348186 76.848186,1.22160185 77,1.1337822 Z M1.5,84.6337822 L1.5,83.9917876 C1.5,83.7201808 1.73193359,83.5 2,83.5 C2.27614237,83.5 2.5,83.7150574 2.5,83.9904785 L2.5,84.6337822 C2.651814,84.7216019 2.77839815,84.848186 2.8662178,85 L3.50952148,85 C3.78040529,85 4,85.2319336 4,85.5 C4,85.7761424 3.78494263,86 3.50952148,86 L2.8662178,86 C2.77839815,86.151814 2.651814,86.2783981 2.5,86.3662178 L2.5,87.0095215 C2.5,87.2804053 2.26806641,87.5 2,87.5 C1.72385763,87.5 1.5,87.2689791 1.5,86.9952562 L1.5,86.3662178 C1.348186,86.2783981 1.22160185,86.151814 1.1337822,86 L0.490478516,86 C0.219594711,86 -8.8817842e-16,85.7680664 -8.8817842e-16,85.5 C-8.8817842e-16,85.2238576 0.215057373,85 0.490478516,85 L1.1337822,85 C1.22160185,84.848186 1.348186,84.7216019 1.5,84.6337822 Z M127.5,99.6337822 L127.5,98.9917876 C127.5,98.7201808 127.731934,98.5 128,98.5 C128.276142,98.5 128.5,98.7150574 128.5,98.9904785 L128.5,99.6337822 C128.651814,99.7216019 128.778398,99.848186 128.866218,100 L129.509521,100 C129.780405,100 130,100.231934 130,100.5 C130,100.776142 129.784943,101 129.509521,101 L128.866218,101 C128.778398,101.151814 128.651814,101.278398 128.5,101.366218 L128.5,102.009521 C128.5,102.280405 128.268066,102.5 128,102.5 C127.723858,102.5 127.5,102.268979 127.5,101.995256 L127.5,101.366218 C127.348186,101.278398 127.221602,101.151814 127.133782,101 L126.490479,101 C126.219595,101 126,100.768066 126,100.5 C126,100.223858 126.215057,100 126.490479,100 L127.133782,100 C127.221602,99.848186 127.348186,99.7216019 127.5,99.6337822 Z M108.5,43.1337822 L108.5,42.4917876 C108.5,42.2201808 108.731934,42 109,42 C109.276142,42 109.5,42.2150574 109.5,42.4904785 L109.5,43.1337822 C109.651814,43.2216019 109.778398,43.348186 109.866218,43.5 L110.509521,43.5 C110.780405,43.5 111,43.7319336 111,44 C111,44.2761424 110.784943,44.5 110.509521,44.5 L109.866218,44.5 C109.778398,44.651814 109.651814,44.7783981 109.5,44.8662178 L109.5,45.5095215 C109.5,45.7804053 109.268066,46 109,46 C108.723858,46 108.5,45.7689791 108.5,45.4952562 L108.5,44.8662178 C108.348186,44.7783981 108.221602,44.651814 108.133782,44.5 L107.490479,44.5 C107.219595,44.5 107,44.2680664 107,44 C107,43.7238576 107.215057,43.5 107.490479,43.5 L108.133782,43.5 C108.221602,43.348186 108.348186,43.2216019 108.5,43.1337822 Z M23.5,15.6337822 L23.5,14.9917876 C23.5,14.7201808 23.7319336,14.5 24,14.5 C24.2761424,14.5 24.5,14.7150574 24.5,14.9904785 L24.5,15.6337822 C24.651814,15.7216019 24.7783981,15.848186 24.8662178,16 L25.5095215,16 C25.7804053,16 26,16.2319336 26,16.5 C26,16.7761424 25.7849426,17 25.5095215,17 L24.8662178,17 C24.7783981,17.151814 24.651814,17.2783981 24.5,17.3662178 L24.5,18.0095215 C24.5,18.2804053 24.2680664,18.5 24,18.5 C23.7238576,18.5 23.5,18.2689791 23.5,17.9952562 L23.5,17.3662178 C23.348186,17.2783981 23.2216019,17.151814 23.1337822,17 L22.4904785,17 C22.2195947,17 22,16.7680664 22,16.5 C22,16.2238576 22.2150574,16 22.4904785,16 L23.1337822,16 C23.2216019,15.848186 23.348186,15.7216019 23.5,15.6337822 Z M122.5,33.6337822 L122.5,32.9917876 C122.5,32.7201808 122.731934,32.5 123,32.5 C123.276142,32.5 123.5,32.7150574 123.5,32.9904785 L123.5,33.6337822 C123.651814,33.7216019 123.778398,33.848186 123.866218,34 L124.509521,34 C124.780405,34 125,34.2319336 125,34.5 C125,34.7761424 124.784943,35 124.509521,35 L123.866218,35 C123.778398,35.151814 123.651814,35.2783981 123.5,35.3662178 L123.5,36.0095215 C123.5,36.2804053 123.268066,36.5 123,36.5 C122.723858,36.5 122.5,36.2689791 122.5,35.9952562 L122.5,35.3662178 C122.348186,35.2783981 122.221602,35.151814 122.133782,35 L121.490479,35 C121.219595,35 121,34.7680664 121,34.5 C121,34.2238576 121.215057,34 121.490479,34 L122.133782,34 C122.221602,33.848186 122.348186,33.7216019 122.5,33.6337822 Z M17.9375,23.7086139 L17.9375,23.3073672 C17.9375,23.137613 18.0824585,23 18.25,23 C18.422589,23 18.5625,23.1344109 18.5625,23.3065491 L18.5625,23.7086139 C18.6573838,23.7635012 18.7364988,23.8426162 18.7913861,23.9375 L19.1934509,23.9375 C19.3627533,23.9375 19.5,24.0824585 19.5,24.25 C19.5,24.422589 19.3655891,24.5625 19.1934509,24.5625 L18.7913861,24.5625 C18.7364988,24.6573838 18.6573838,24.7364988 18.5625,24.7913861 L18.5625,25.1934509 C18.5625,25.3627533 18.4175415,25.5 18.25,25.5 C18.077411,25.5 17.9375,25.355612 17.9375,25.1974433 L17.9375,24.7913861 C17.8426162,24.7364988 17.7635012,24.6573838 17.7086139,24.5625 L17.3065491,24.5625 C17.1372467,24.5625 17,24.4175415 17,24.25 C17,24.077411 17.1344109,23.9375 17.3065491,23.9375 L17.7086139,23.9375 C17.7635012,23.8426162 17.8426162,23.7635012 17.9375,23.7086139 Z M6.4375,98.7086139 L6.4375,98.3073672 C6.4375,98.137613 6.5824585,98 6.75,98 C6.92258898,98 7.0625,98.1344109 7.0625,98.3065491 L7.0625,98.7086139 C7.15738375,98.7635012 7.23649884,98.8426162 7.29138613,98.9375 L7.69345093,98.9375 C7.86275331,98.9375 8,99.0824585 8,99.25 C8,99.422589 7.86558914,99.5625 7.69345093,99.5625 L7.29138613,99.5625 C7.23649884,99.6573838 7.15738375,99.7364988 7.0625,99.7913861 L7.0625,100.193451 C7.0625,100.362753 6.9175415,100.5 6.75,100.5 C6.57741102,100.5 6.4375,100.355612 6.4375,100.197443 L6.4375,99.7913861 C6.34261625,99.7364988 6.26350116,99.6573838 6.20861387,99.5625 L5.80654907,99.5625 C5.63724669,99.5625 5.5,99.4175415 5.5,99.25 C5.5,99.077411 5.63441086,98.9375 5.80654907,98.9375 L6.20861387,98.9375 C6.26350116,98.8426162 6.34261625,98.7635012 6.4375,98.7086139 Z M113.4375,107.208614 L113.4375,106.807367 C113.4375,106.637613 113.582458,106.5 113.75,106.5 C113.922589,106.5 114.0625,106.634411 114.0625,106.806549 L114.0625,107.208614 C114.157384,107.263501 114.236499,107.342616 114.291386,107.4375 L114.693451,107.4375 C114.862753,107.4375 115,107.582458 115,107.75 C115,107.922589 114.865589,108.0625 114.693451,108.0625 L114.291386,108.0625 C114.236499,108.157384 114.157384,108.236499 114.0625,108.291386 L114.0625,108.693451 C114.0625,108.862753 113.917542,109 113.75,109 C113.577411,109 113.4375,108.855612 113.4375,108.697443 L113.4375,108.291386 C113.342616,108.236499 113.263501,108.157384 113.208614,108.0625 L112.806549,108.0625 C112.637247,108.0625 112.5,107.917542 112.5,107.75 C112.5,107.577411 112.634411,107.4375 112.806549,107.4375 L113.208614,107.4375 C113.263501,107.342616 113.342616,107.263501 113.4375,107.208614 Z"
                fill={color}
            />
            <ellipse className="fill-color" cx="65.5" cy="132" fill={color} fillOpacity="0.07" rx="32.5" ry="3" />
        </g>
    </AccessibleSVG>
);

export default UsersEmptyState;
