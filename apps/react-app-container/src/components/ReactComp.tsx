import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// 远程react component
const ReactButton = React.lazy(() => import('ReactApp/ReactButton'));

// 远程react utils
const loadRemoteReactUtils = async () => {
  return (await import('ReactApp/ReactUtils')).default;
};

const ReactComp = () => {
  const [remoteModule, setRemoteModule] = useState<{greet?: (msg: string) => void}>({});
  const handleClickRemote = ()  =>{
    alert('本地alert')
    remoteModule.greet?.('调用远程组件')
  }

  useEffect( () => {
    const loadModule = async () => {
      const module = await loadRemoteReactUtils();
      setRemoteModule(module);
    };

    loadModule();
  }, [])

  return <div>
    <h2>react in react</h2>
    <ReactButton click={handleClickRemote}/>
  </div>
}

export default ReactComp;
