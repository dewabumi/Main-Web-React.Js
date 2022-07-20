import React from 'react'
import Detail3b from './detail3b';
import { homeObjOne, homeObjThree, homeObjTwo } from './detail3b/Data';
import Header3br3b from './header3b/Header3b';

const penjelasan = () => {
  return (
    <>
      <Header3br3b />
      <Detail3b {...homeObjOne}/>
      <Detail3b {...homeObjTwo}/>
      <Detail3b {...homeObjThree}/>
    </>
  )
}

export default penjelasan