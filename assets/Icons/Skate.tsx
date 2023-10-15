import Svg, { SvgProps, Path } from 'react-native-svg';
const Skate = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m7.278 19.998-4.929-4.313L4.56 18.51 0 16.542l3.777 2.45-3.547.131 7.048.875Zm2.496-1.225c.332-.218.77-.087.972.22.207.305.101.7-.23.918-.332.175-.765.087-.972-.219a.647.647 0 0 1 .23-.919Zm-3.086-.525 1.24 1.094h-.01l11.004-6.453.032-1.514-.958-.021-.023 1.019c-1.377.814-8.765 5.175-10.143 5.963l-.976-.438-.166.35Zm3.344-16.196c.272.993 1.212 1.742 2.345 1.768a2.525 2.525 0 0 0 2.238-1.199c2.188.796 4.1 2.314 5.385 4.296l-6.836-2.113-1.317 2.415 4.275.578.382 3.88-1.41.73-.806-3.084-3.8.412-.953 6.142-1.147.884-.917-7.402 1.64-5.272-6.927 2.63c2.34-2.94 5.121-4.371 7.848-4.665Zm7.471 12.167a.739.739 0 0 1 .986.219c.207.32.101.74-.23.936a.739.739 0 0 1-.986-.219.66.66 0 0 1 .23-.936ZM12.483.001c.847.021 1.515.69 1.492 1.491-.023.805-.728 1.44-1.575 1.418-.843-.022-1.511-.691-1.488-1.496.023-.801.728-1.435 1.57-1.413Z"
    />
  </Svg>
);
export default Skate;