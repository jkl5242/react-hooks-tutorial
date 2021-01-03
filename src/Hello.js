import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';
import { useCountRenders } from './useCountRenders';

export const Hello = React.memo(({increment}) => {

  //useCountRenders();

  return <button onClick={() => increment(5) }>hello</button>
});