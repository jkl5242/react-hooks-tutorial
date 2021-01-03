import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';
import { useCountRenders } from './useCountRenders';

export const Square = React.memo(({n, increment}) => {
    
  useCountRenders();

  return <button onClick={() => increment(n)}>{n}</button>
});