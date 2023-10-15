import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Thirteen = (props: SvgProps) => (
  <Svg width={40} height={31} fill="none" {...props}>
    <G opacity={0.9}>
      <Path fill="url(#a)" d="M13 .4v29.3H7V6.3h-.2L0 10.5V5L7.2.4H13Z" />
      <Path
        fill="url(#b)"
        d="M28.8 30.1c-2.2 0-4-.3-5.7-1-1.7-.8-3-1.8-4-3.1a7.7 7.7 0 0 1-1.4-4.6h6.2c0 .8.3 1.4.7 2 .4.5 1 .9 1.7 1.2.7.3 1.6.4 2.5.4 1 0 1.7-.2 2.5-.5.7-.3 1.3-.8 1.7-1.4.4-.6.6-1.2.6-2s-.2-1.5-.7-2.1c-.4-.6-1-1-1.8-1.4-.8-.4-1.8-.5-2.9-.5h-2.7v-4.6h2.7a6 6 0 0 0 2.5-.5 4 4 0 0 0 1.7-1.3c.4-.6.6-1.3.6-2a3.5 3.5 0 0 0-2-3.3 5.6 5.6 0 0 0-4.5 0 4 4 0 0 0-1.7 1.2c-.4.6-.6 1.2-.6 2h-6c0-1.7.6-3.2 1.5-4.5 1-1.3 2.2-2.3 3.8-3C25 .4 26.8 0 28.8 0s3.8.4 5.3 1.1c1.5.7 2.7 1.7 3.6 3a7.2 7.2 0 0 1 1.2 4.2c0 1.6-.5 3-1.5 4a7 7 0 0 1-4 2.2v.2c2.2.3 3.8 1 5 2.2a6.4 6.4 0 0 1 1.6 4.6c0 1.7-.5 3.1-1.4 4.4a9.7 9.7 0 0 1-4 3.1c-1.7.8-3.7 1.1-5.8 1.1Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={20}
        y1={0}
        y2={30.1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#3D3D3D" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={20}
        x2={20}
        y1={0}
        y2={30.1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopColor="#3D3D3D" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Thirteen;