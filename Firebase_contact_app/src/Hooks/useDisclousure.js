import React, { useState } from 'react'

const useDisclousure = () => {
    const [isopen, setisopen] = useState(false);

  const onOpen = () => {
    setisopen(true);
  };
  const onClose = () => {
    setisopen(false);
  }

  return {
    onClose,onOpen,isopen
  };
}

export default useDisclousure