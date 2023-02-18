import React from 'react'
import {ColorRing} from 'react-loader-spinner'

function Loader() {
  return (
    <>
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#eee']}
/>
    </>
  )
}

export default Loader;
