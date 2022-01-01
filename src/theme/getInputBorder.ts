// export const getInputBorder = (props: any) => {
// switch (props.varient) {
//   case "standard":
//     return `
//     &::before {
//       width:100%;
//       position:absolute;
//       content:"";
//       background-color:transparent;
//       left:0%;
//       bottom:0%;
//       transform-origin:center center;
//       transform: scale(0,1);
//       transition: transform 200ms ease-in-out;
//       border-bottom: solid 2px ${getColor(
//         props.isError
//           ? { color: { color: "error" } }
//           : { color: { color: props.background?.color?.color || "primary" } }
//       )};
//     }
//     &::after {
//       width:100%;
//       position:absolute;
//       content:"";
//       background-color:transparent;
//       left:0%;
//       bottom:1px;
//       border-bottom: solid 1px rgba(0,0,0,0.5);
//     }
//     &:focus-within {
//       &::before {
//       transform: scale(1,1);
//     }
//     }`;
//   case "filled":
//     return `
//       background-color: ${getColor({
//         color: { color: "paper", variations: 500 },
//         opacity: "30%",
//       })};
//       border-top-left-radius: ${getBorderRadius(
//         props.border?.borderTop?.radius || "xs"
//       )};
//       border-top-right-radius: ${getBorderRadius(
//         props.border?.borderTop?.radius || "xs"
//       )};
//       &::before {
//         width:100%;
//         position:absolute;
//         content:"";
//         background-color:transparent;
//         left:0%;
//         bottom:0%;
//         transform-origin:center center;
//         transform: scale(0,1);
//         transition: transform 200ms ease-in-out;
//         border-bottom: solid 2px ${getColor(
//           props.isError
//             ? { color: { color: "error" } }
//             : {
//                 color: { color: props.background?.color?.color || "primary" },
//               }
//         )};
//       }
//       &::after {
//         width:100%;
//         position:absolute;
//         content:"";
//         background-color:transparent;
//         left:0%;
//         bottom:1px;
//         border-bottom: solid 1px rgba(0,0,0,0.5);
//       }
//       &:focus-within {
//         &::before {
//         transform: scale(1,1);
//       }
//       }`;
//   default:
//     return `border-bottom-width: 1px;`;
// }
// };
export const getInputBorder = {};
