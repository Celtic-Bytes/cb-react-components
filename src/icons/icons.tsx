import { ReactNode, SVGProps } from 'react';

export const StarIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
  </svg>
);

export const DangerIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M7.001 1.067a1 1 0 0 1 1.998 0l.7 9.933a1 1 0 0 1-1.998 0l-.7-9.933zM8 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z' />
  </svg>
);

export const InfoIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm.93-6.588-.862.39V11.5a.5.5 0 0 1-1 0V6.832a.5.5 0 0 1 .276-.447l1-.5a.5.5 0 1 1 .586.832zM8 4.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z' />
  </svg>
);

export const PrimaryIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM4.646 11.854a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 8.707l-3.354 3.147z' />
  </svg>
);

export const DefaultIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2z' />
  </svg>
);

export const SecondaryIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm3 7a.5.5 0 0 0-.5-.5H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z' />
  </svg>
);

export const SuccessIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.293 9.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 7.586 5.707 6.293a1 1 0 0 0-1.414 1.414l2 2z' />
  </svg>
);

export const WarningIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 16 16'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path d='M8.982 1.566a1.5 1.5 0 0 0-2.664 0L.165 13.233c-.457.778.091 1.767.998 1.767h13.674c.907 0 1.455-.99.998-1.767L8.982 1.566zM8 5a.535.535 0 0 1 .535.535v3.93a.535.535 0 0 1-1.07 0v-3.93A.535.535 0 0 1 8 5zm.002 7a.752.752 0 1 1-.002 1.504.752.752 0 0 1 .002-1.504z' />
  </svg>
);
