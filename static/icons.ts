export default interface SVGIcon {
  viewBox: string;
  paths: Path[];
}

interface Path {
  path: string;
  fillRule?: string;
  clipRule?: string;
}

export const iconPaths: { [key: string]: SVGIcon } = {
  arrowDown: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path:
          "M7.75735 5.63599L6.34314 7.0502L12 12.7071L17.6569 7.05023L16.2427 5.63602L12 9.87866L7.75735 5.63599Z",
      },
      {
        path:
          "M6.34314 12.7071L7.75735 11.2928L12 15.5355L16.2427 11.2929L17.6569 12.7071L12 18.3639L6.34314 12.7071Z",
      },
    ],
  },
  arrowUp: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path:
          "M4.99997 16.929L6.41418 18.3432L12.071 12.6863L17.7279 18.3432L19.1421 16.929L12.071 9.85789L4.99997 16.929Z",
      },
      {
        path: "M19 8H4.99997V6H19V8Z",
      },
    ],
  },
  paypal: {
    viewBox: "0 0 32 34",
    paths: [
      {
        path:
          "M5.95243 0H21.7059C24.9331 0 27.5042 1.5246 28.8467 3.88034C31.2495 5.59839 32.4826 8.6062 31.824 12.0296C30.7967 17.3694 25.5557 21.6982 20.1179 21.6982H16.1796L13.9474 33.3006H5.81102L6.26525 30.9396H0L5.95243 0ZM9.14676 3.86745H20.9619C24.2245 3.86745 26.3698 6.46473 25.7534 9.66863C25.137 12.8725 21.9924 15.4698 18.7297 15.4698H10.853L8.62081 27.0722H4.68243L9.14676 3.86745Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
    ],
  },
  home: {
    viewBox: "0 0 18 24",
    paths: [
      {
        path:
          "M18 8.77211L11.0208 1.79293C9.84924 0.621353 7.94975 0.621352 6.77817 1.79293L0 8.5711V23.0858H7V17.0858C7 15.9812 7.89543 15.0858 9 15.0858C10.1046 15.0858 11 15.9812 11 17.0858V23.0858H18V8.77211ZM8.19239 3.20714L2 9.39953V21.0858H5V17.0858C5 14.8766 6.79086 13.0858 9 13.0858C11.2091 13.0858 13 14.8766 13 17.0858V21.0858H16V9.60054L9.6066 3.20714C9.21608 2.81661 8.58291 2.81661 8.19239 3.20714Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
    ],
  },
  link: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path: "M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z",
      },
      {
        path:
          "M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z",
      },
    ],
  },
  backLink: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path:
          "M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z",
      },
      {
        path:
          "M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z",
      },
    ],
  },
  linkExternal: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path:
          "M3.00001 19.2942L13.2498 9.0072H9.65958V7.0072H16.6596V14.0072H14.6596V10.4259L4.41678 20.7058L3.00001 19.2942Z",
      },
      {
        path: "M12.7084 19V17H18.7084V5H6.7084V11H4.7084V3H20.7084V19H12.7084Z",
      },
    ],
  },
  share: {
    viewBox: "0 0 14 14",
    paths: [
      {
        path:
          "M11.6667 4.66667C12.9553 4.66667 14 3.622 14 2.33333C14 1.04467 12.9553 0 11.6667 0C10.378 0 9.33333 1.04467 9.33333 2.33333C9.33333 2.43094 9.33933 2.52714 9.35096 2.6216L3.95314 5.32051C3.53348 4.91567 2.96249 4.66667 2.33333 4.66667C1.04467 4.66667 0 5.71134 0 7C0 8.28866 1.04467 9.33333 2.33333 9.33333C2.96249 9.33333 3.53348 9.08433 3.95314 8.67949L9.35096 11.3784C9.33933 11.4729 9.33333 11.5691 9.33333 11.6667C9.33333 12.9553 10.378 14 11.6667 14C12.9553 14 14 12.9553 14 11.6667C14 10.378 12.9553 9.33333 11.6667 9.33333C11.0375 9.33333 10.4665 9.58234 10.0469 9.98718L4.64904 7.28827C4.66067 7.19381 4.66667 7.09761 4.66667 7C4.66667 6.90239 4.66067 6.80619 4.64904 6.71173L10.0469 4.01282C10.4665 4.41766 11.0375 4.66667 11.6667 4.66667Z",
      },
    ],
  },
  filter: {
    viewBox: "0 0 24 24",
    paths: [
      {
        path:
          "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
      {
        path:
          "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
    ],
  },
  copy: {
    viewBox: "0 0 24 24",
    paths: [
      { path: "M13 7H7V5H13V7Z" },
      { path: "M13 11H7V9H13V11Z" },
      { path: "M7 15H13V13H7V15Z" },
      {
        path:
          "M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
      },
    ],
  },
  wikipedia: {
    viewBox: "0 0 1700 1700",
    paths: [
      {
        path:
          "m560.95 1412.7h74.09l247.37-479.88 203.5 479.88h71.33l422.78-972.73c23.7-54.57 69.9-87.34 119-94.76v-57.933h-341.86v57.953c45.36 10.09 93.51 27.09 114.92 74.961l-310.44 716.06c-56.12-119.35-113.66-249.77-168.58-379.92 56.685-120.43 102.98-232.29 172.52-342.22 40.656-64.68 106.63-66.2 140.63-69.38v-57.45h-363.4v57.45c45.34.045 139.69 4.078 97.62 92.49l-105.39 221.59-111.63-246.49c-17.379-38.38 16.38-63.95 71.49-66.997l-.405-57.993h-408.98v57.45c48.728 1.601 117.43 1.34 142.79 42.655 78.09 143.45 130.3 292.46 201.49 438.72l-184.22 344.49-309.64-711.78c-34.892-80.21 47.945-106.05 101.76-112.75l-.605-58.794h-436.06v57.45c60.21 19.908 137.88 109.48 159.56 154.81 162.89 340.7 244.91 569.12 400.39 913.18z",
      },
    ],
  },
};
