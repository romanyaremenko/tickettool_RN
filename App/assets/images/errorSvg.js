import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ErrorSvg = ({color}) => (
    <Svg
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 6C11.373 6 6 11.373 6 18s5.373 12 12 12 12-5.373 12-12S24.627 6 18 6ZM3 18C3 9.716 9.716 3 18 3c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15ZM18 7.5A1.5 1.5 0 0 1 19.5 9v10.5a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 18 7.5ZM18 24a1.5 1.5 0 0 1 1.5 1.5V27a1.5 1.5 0 0 1-3 0v-1.5A1.5 1.5 0 0 1 18 24Z"
            fill={color ? color : '#000'}
        />
    </Svg>
)
export default ErrorSvg
