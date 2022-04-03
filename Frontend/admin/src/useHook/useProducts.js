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
    staleTime: 0,
    notifyOnChangePropsExclusions: ['isStale'],
  });
}

// staleTime: 5000, el tiempo de la cache es 5segundo para que no haga llamadas a la peticion si no que muestre el estadode la cache si pongo staleTime: infinity se queda siempre en cache y no hace mas llamadas solo una cuando empieza la aplicacion por defecto es 0

//notifyOnChangePropsExclusions: ['isStale'], si el tiempo de la cache es 5segundo con staleTime: 5000, cuando pase ese tiempo va a notificarnos que ha pasado haciendo otro render lo queno parece muy eficiente si pone ['isStale'] se deactiva por defecto esta activado