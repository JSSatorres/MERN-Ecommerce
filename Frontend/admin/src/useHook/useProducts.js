import {useQuery} from 'react-query';

async function fetchUsers() {
  const response = await fetch('http://localhost:4000/products');
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

export default function useProducts() {
  
  return useQuery('PRODUCTS', fetchUsers, {
    staleTime: 5000,
    // notifyOnChangePropsExclusions: ['isStale'],
  });
}