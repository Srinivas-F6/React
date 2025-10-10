import { useGetProductsQuery } from './store/api'
import { api } from './store/api'


function App() {
  const { data, error, isLoading } = useGetProductsQuery('products')
  console.log(1);
  if (isLoading) return <h2>Loading....</h2>
  if (error) return <h2>{error}</h2>
  return (
    <ul>
      {
          data?.products?.map((product, idx)=>(
            <li key={idx}>{product.title}<br/> {product.category}<br/><br/></li>
          ))
      }
    </ul>
  )
}

export default App
