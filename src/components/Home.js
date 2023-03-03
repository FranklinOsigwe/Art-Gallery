import { addToCart } from "../feature/cartSlice";
import { useGetAllProductsQuery } from "../feature/productApi";


function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Opps! an Error occured</p>
      ) : (
            <div>
              <h2>New Arrival</h2>
              <div className="products">
                {data?.map((product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                 ))}
              </div>
              
        </div>
      )}
    </div>
  );
}

export default Home;
