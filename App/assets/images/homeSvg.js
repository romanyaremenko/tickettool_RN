import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeSvg = ({color}) => (
    <Svg
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.114 6.353c-.704-.47-1.524-.47-2.228 0l-.026.017-9.268 5.925A3.465 3.465 0 0 0 6 15.205v12.66C6 29.058 6.944 30 8.127 30h19.746C29.056 30 30 29.06 30 27.864V15.206c0-1.169-.618-2.216-1.62-2.93L19.14 6.37l-.026-.017Zm1.653-2.503c-1.706-1.133-3.828-1.133-5.534 0L5.976 9.767A6.464 6.464 0 0 0 3 15.206v12.658A5.116 5.116 0 0 0 8.127 33h19.746A5.116 5.116 0 0 0 33 27.864V15.206c0-2.323-1.252-4.231-2.922-5.403a1.43 1.43 0 0 0-.054-.036L20.767 3.85Z"
            fill={color ? color : '#000'}
        />
    </Svg>
)

export default HomeSvg
