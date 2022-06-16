import type { NextPage } from 'next'
import { useEffect } from 'react';
import Head from '../../components/Head';






const Home: NextPage = () => {

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:8080");
            const json = await res.json();
          
            return json;
          }
    },[]);

  return (
    <>
      <Head/>
      <div>json</div>
    </>
  )
}

export default Home
