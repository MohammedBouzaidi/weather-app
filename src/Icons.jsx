const Icons = ({ weather }) => {
  switch (weather) {
    case "Clouds":
      return (
        <svg
          className="w-32 h-32 ml-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      );
    case "Clear":
      return (
        <svg
          className="w-32 h-32 ml-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a9 9 0 110 18 9 9 0 010-18z"
          ></path>
        </svg>
      );
    case "Rain":
      return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          height="1em"
          width="1em"
          className="w-32 h-32 ml-20"
        >
          <path d="M1.48 16.95c0 1.32.46 2.46 1.37 3.4.91.94 2.04 1.45 3.38 1.51.12 0 .18-.06.18-.17v-1.33c0-.12-.06-.18-.18-.18-.86-.04-1.58-.38-2.17-1s-.88-1.37-.88-2.24c0-.84.28-1.58.84-2.19.56-.62 1.26-.96 2.1-1.03l.53-.08c.11 0 .16-.05.16-.14l.08-.55c.12-1.09.59-2 1.38-2.72S10 9.16 11.1 9.16s2.05.36 2.86 1.08c.82.72 1.28 1.62 1.38 2.69l.07.58c.02.11.1.17.22.17h1.6c.89 0 1.65.32 2.29.96.64.64.96 1.41.96 2.31 0 .87-.29 1.61-.88 2.24s-1.31.95-2.17 1c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17 1.33-.04 2.45-.54 3.37-1.49.91-.95 1.37-2.09 1.37-3.42 0-.68-.13-1.34-.38-2.01.78-.96 1.16-2.08 1.16-3.35 0-.71-.14-1.38-.41-2.03-.27-.65-.65-1.2-1.12-1.67s-1.03-.84-1.67-1.12-1.33-.42-2.04-.42c-1.54 0-2.83.58-3.86 1.74-.89-.44-1.81-.66-2.74-.66-1.41 0-2.66.44-3.74 1.31s-1.77 2-2.08 3.38c-1.12.26-2.04.83-2.75 1.73s-1.06 1.93-1.06 3.09zm5.35 7.03c0 .17.05.34.16.51.11.17.27.28.47.35.23.07.45.06.64-.04.2-.09.33-.28.4-.56l.14-.61c.05-.23.02-.44-.1-.63a.875.875 0 00-.52-.4c-.23-.07-.44-.04-.64.08s-.32.29-.38.52l-.14.59c-.02.06-.03.12-.03.19zm.77-2.9c0 .22.08.41.24.57.16.18.35.26.56.26.24 0 .44-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24c-.23 0-.42.08-.58.23s-.22.37-.22.6zm.61-2.27c-.01.16.03.31.13.45.1.15.26.25.48.32a.8.8 0 00.62-.07c.21-.11.35-.28.42-.51l.27-.9c.07-.24.05-.46-.07-.65a.913.913 0 00-.54-.39.737.737 0 00-.63.07.85.85 0 00-.41.5l-.24.92c-.02.16-.03.25-.03.26zm1.15 8.29c0 .17.05.33.16.49.11.16.27.27.49.33.09.02.17.03.24.03.43 0 .7-.2.8-.61l.13-.59c.06-.26.03-.48-.08-.68s-.29-.32-.52-.37a.744.744 0 00-.63.07c-.21.12-.34.29-.41.51l-.14.6c-.03.11-.04.19-.04.22zm.56-22.44c0 .24.08.44.24.6l.66.64c.14.16.32.24.54.26.22.02.43-.07.62-.26.16-.16.24-.36.24-.59 0-.24-.08-.44-.24-.6l-.63-.65a.869.869 0 00-.58-.26c-.23 0-.43.08-.6.25-.16.17-.25.37-.25.61zm.23 19.54c0 .23.08.42.24.58.16.16.36.24.58.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.59a.784.784 0 00-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58zm.62-2.27c-.01.15.03.31.14.47.1.16.25.26.45.3.23.06.44.04.64-.06s.33-.29.41-.56l.26-.9c.07-.22.05-.43-.07-.63a.867.867 0 00-.53-.4c-.22-.07-.43-.04-.64.08s-.34.3-.41.53l-.22.9c-.02.08-.03.17-.03.27zm2.76 2.15c0 .17.05.33.15.48.1.15.25.26.46.32.03 0 .08.01.14.02.06.01.11.02.14.02.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.863.863 0 00-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .01 0 .05-.01.11-.01.07-.02.11-.02.15zm.74-2.96c0 .23.08.42.24.57.15.16.34.24.58.24s.43-.08.59-.23c.16-.16.23-.35.23-.58 0-.24-.08-.43-.23-.59-.16-.16-.35-.23-.59-.23s-.43.08-.59.23-.23.35-.23.59zm.61-2.31c0 .17.05.33.16.48.11.15.27.26.49.32.02 0 .06.01.12.02s.11.02.14.02c.11 0 .23-.03.37-.09.21-.11.34-.28.4-.52l.24-.9c.06-.23.04-.44-.07-.63s-.28-.33-.5-.4a.787.787 0 00-.64.06c-.2.11-.33.27-.4.51l-.28.91c0 .02 0 .05-.01.11a.36.36 0 00-.02.11zm.35-9.72c.66-.66 1.48-.99 2.47-.99.99 0 1.83.34 2.52 1.02s1.04 1.5 1.04 2.48c0 .66-.18 1.29-.53 1.88-.98-.98-2.15-1.47-3.5-1.47h-.31c-.28-1.1-.85-2.07-1.69-2.92zm1.65-5.26c0 .23.08.42.23.58.15.15.35.23.59.23s.45-.08.62-.23c.17-.15.25-.35.25-.58V1.76c0-.23-.09-.43-.26-.6a.838.838 0 00-.61-.25c-.23 0-.43.08-.58.25-.16.17-.23.37-.23.6v2.07zm5.52 2.26c0 .25.08.45.23.6.36.36.76.36 1.21 0l1.43-1.43c.17-.17.25-.38.25-.63 0-.24-.08-.44-.25-.6a.816.816 0 00-.6-.25c-.23 0-.43.08-.61.24L22.63 5.5a.79.79 0 00-.23.59zm.78 11.85c0 .23.09.43.27.59l.61.63c.2.16.4.24.61.24.2 0 .4-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.62l-.65-.61c-.15-.17-.34-.25-.57-.25s-.43.08-.6.25a.8.8 0 00-.27.6zm1.48-6.34c0 .24.09.43.26.59.18.18.39.27.62.27h2.03c.23 0 .43-.08.59-.25.16-.17.24-.37.24-.61s-.08-.44-.24-.6a.764.764 0 00-.59-.25h-2.03c-.24 0-.44.08-.62.25s-.26.37-.26.6z" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-32 h-32 ml-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      );
  }
};
export default Icons;
