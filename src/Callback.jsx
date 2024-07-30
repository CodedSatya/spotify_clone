import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'

const Callback = () => {
  const history = useHistory();
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const code = pearams.get('code');
  })
}