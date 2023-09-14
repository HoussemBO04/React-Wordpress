'use client'
import { useGetSearchQuery } from '@/redux/api/searchApi';

export default function Home() {

  const {data} = useGetSearchQuery('سادس');

  console.log('data', data);
  

  return (
    <>
      Hello      
    </>
  )
}
