import { memo } from 'react';

export const IconPin = ({ size = 32 }) => {
  return (
    <svg
      id="pin"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
    >
      <path
        fill="#D62C55"
        fillRule="evenodd"
        d="M15.94 27.829 16.5 27l-.559.83a1 1 0 0 0 1.118 0L16.5 27c.559.83.559.83.56.829l.002-.002.006-.004.022-.015.079-.055.286-.204a29.843 29.843 0 0 0 4.025-3.564c2.165-2.31 4.52-5.655 4.52-9.394 0-2.54-.998-4.979-2.779-6.778A9.455 9.455 0 0 0 16.5 5a9.455 9.455 0 0 0-6.721 2.813A9.638 9.638 0 0 0 7 14.59c0 3.739 2.355 7.084 4.52 9.394a29.843 29.843 0 0 0 4.025 3.564 18.036 18.036 0 0 0 .365.259l.021.015.007.004.002.001Zm1.131-10.433a2.857 2.857 0 0 0 2.248-3.098c-.145-1.444-1.352-2.57-2.819-2.57-1.565 0-2.833 1.281-2.833 2.863s1.268 2.864 2.833 2.864c.196 0 .387-.02.571-.059Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default memo(IconPin);
