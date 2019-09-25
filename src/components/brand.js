import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Brand = ({ fillOne, fillTwo }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.94 51.37">
    <path
      class="cls-1"
      fill={fillOne ? fillOne : "#3d4545"}
      d="M38.69.7L17.95 22.37 41.3 50.63h-9.34L12.83 27.25l-4.87 4.91v18.47H0V.7h7.96v23.52L29.39.7h9.3zM74.05 50.63v-20.5a18.14 18.14 0 0 0-.5-4.47 9.41 9.41 0 0 0-1.55-3.4 7.13 7.13 0 0 0-2.74-2.13 9.64 9.64 0 0 0-4-.77 10 10 0 0 0-4.24.88 9.59 9.59 0 0 0-3.3 2.45 11.54 11.54 0 0 0-2.17 3.75 13.84 13.84 0 0 0-.77 4.73v19.46h-7.5V20.09c0-.88 0-1.71-.07-2.49s-.09-1.86-.18-3.23h7.07c.09 1.39.16 2.48.2 3.27s.1 1.56.12 2.37.06 1.45.06 1.95h.14A13.82 13.82 0 0 1 68 13.62a15.69 15.69 0 0 1 6.35 1.12 11.1 11.1 0 0 1 4.17 3.1 11.92 11.92 0 0 1 2.3 4.61 22.46 22.46 0 0 1 .7 5.72v22.46zM128.06 32.43a23.21 23.21 0 0 1-1.21 7.66 15.84 15.84 0 0 1-3.61 6 16.43 16.43 0 0 1-6 3.88 23 23 0 0 1-8.35 1.4 22 22 0 0 1-8.07-1.37 15.86 15.86 0 0 1-9.47-9.86 22.75 22.75 0 0 1-1.24-7.67A23.57 23.57 0 0 1 91.28 25a16.32 16.32 0 0 1 3.52-6 15.91 15.91 0 0 1 5.94-4 23.08 23.08 0 0 1 8.43-1.4 23.63 23.63 0 0 1 8.62 1.4 15 15 0 0 1 9.21 9.9 25.6 25.6 0 0 1 1.07 7.54zm-7.83 0a23.28 23.28 0 0 0-.7-6 11 11 0 0 0-2.1-4.19 8.1 8.1 0 0 0-3.43-2.42 13.1 13.1 0 0 0-4.68-.77q-5.49 0-8.42 3.28C99 24.47 98 27.86 98 32.43a20.4 20.4 0 0 0 .8 6.06 11.64 11.64 0 0 0 2.22 4.2 8.69 8.69 0 0 0 3.43 2.46 11.81 11.81 0 0 0 4.44.81 14.18 14.18 0 0 0 4.83-.79 8.88 8.88 0 0 0 3.56-2.44 11 11 0 0 0 2.22-4.21 21.62 21.62 0 0 0 .73-6.09z"
    />
    <path
      class="cls-2"
      fill={fillTwo ? fillTwo : "#0074b8"}
      d="M180 42.76a24.3 24.3 0 0 1-3.66 3.24 26.56 26.56 0 0 1-4.77 2.74 31.11 31.11 0 0 1-12.44 2.54 26.76 26.76 0 0 1-10.5-1.92 20.43 20.43 0 0 1-7.42-5.36 22.78 22.78 0 0 1-4.41-8.19 34.91 34.91 0 0 1-1.46-10.4 35.83 35.83 0 0 1 1.44-10.55 21.35 21.35 0 0 1 4.36-8 19.34 19.34 0 0 1 7.32-5.08 30.47 30.47 0 0 1 17.76-.84 19.48 19.48 0 0 1 5.67 2.52 17.11 17.11 0 0 1 4.11 3.8 25 25 0 0 1 2.87 4.7l-7.18 2.57a17.47 17.47 0 0 0-1.87-3.14 12.38 12.38 0 0 0-2.69-2.62A13.16 13.16 0 0 0 163.48 7a17.82 17.82 0 0 0-11.66.71 12.61 12.61 0 0 0-4.77 3.86 16.3 16.3 0 0 0-2.78 6 31.51 31.51 0 0 0-.9 7.86 29.65 29.65 0 0 0 1 7.89 18.2 18.2 0 0 0 3 6.22 13.69 13.69 0 0 0 4.93 4 15.48 15.48 0 0 0 6.86 1.46 19.88 19.88 0 0 0 4.55-.49 21.61 21.61 0 0 0 3.78-1.21 17.94 17.94 0 0 0 3-1.67 14 14 0 0 0 2.21-1.85v-8.6h-13.47v-5.99H180zM196.1 33.87a19 19 0 0 0 .6 4.91 10.32 10.32 0 0 0 1.9 3.84 8.72 8.72 0 0 0 3.29 2.51 11.94 11.94 0 0 0 4.83.89 16.9 16.9 0 0 0 3.48-.34 11 11 0 0 0 3-1 9 9 0 0 0 2.26-1.68 6.85 6.85 0 0 0 1.43-2.35l6.65 1.35a14.16 14.16 0 0 1-1.9 3.28 13.78 13.78 0 0 1-3.28 3 18.68 18.68 0 0 1-4.89 2.24 23.52 23.52 0 0 1-6.78.88c-6 0-10.53-1.6-13.69-4.76s-4.72-7.92-4.72-14.26a22.27 22.27 0 0 1 1.57-8.88 15.27 15.27 0 0 1 4.15-5.82 15.46 15.46 0 0 1 5.9-3.11 25.34 25.34 0 0 1 6.87-.92 20.3 20.3 0 0 1 8 1.42 14.37 14.37 0 0 1 5.53 4 16.38 16.38 0 0 1 3.19 6.17 28.52 28.52 0 0 1 1 7.91v.75zM217.15 29a16.48 16.48 0 0 0-.85-4.3 9 9 0 0 0-2-3.24 8 8 0 0 0-3.08-2 12.15 12.15 0 0 0-4.35-.71 14.6 14.6 0 0 0-3.83.51 8.62 8.62 0 0 0-5.81 4.84 12.44 12.44 0 0 0-1.11 4.92zM268.9 32.43a23.47 23.47 0 0 1-1.2 7.66 16.1 16.1 0 0 1-3.61 6 16.43 16.43 0 0 1-6 3.88 23 23 0 0 1-8.34 1.4 22 22 0 0 1-8.08-1.37 15.9 15.9 0 0 1-9.5-9.84 22.76 22.76 0 0 1-1.17-7.73 23.57 23.57 0 0 1 1.17-7.5 16.32 16.32 0 0 1 3.52-6 15.91 15.91 0 0 1 5.94-3.93 23 23 0 0 1 8.42-1.4 23.51 23.51 0 0 1 8.63 1.4 15.18 15.18 0 0 1 5.85 3.92 15.55 15.55 0 0 1 3.35 5.95 25.92 25.92 0 0 1 1.06 7.54zm-7.82 0a22.86 22.86 0 0 0-.71-6 11 11 0 0 0-2.09-4.19 8.1 8.1 0 0 0-3.44-2.42 13.12 13.12 0 0 0-4.69-.77c-3.65 0-6.47 1.09-8.41 3.28s-2.92 5.57-2.92 10.14a20.4 20.4 0 0 0 .8 6.06 11.7 11.7 0 0 0 2.21 4.2 8.79 8.79 0 0 0 3.44 2.46 11.81 11.81 0 0 0 4.44.81 14.18 14.18 0 0 0 4.83-.79 8.94 8.94 0 0 0 3.56-2.44 10.93 10.93 0 0 0 2.21-4.21 21.53 21.53 0 0 0 .77-6.13z"
    />
  </Svg>
);

export default Brand;
