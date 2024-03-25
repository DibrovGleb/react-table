import Product from './redux/product.ts'
import '../style/table.sass'

const Table: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><a href=''>{product.name}</a></td>
              <td>{product.price}</td>
              <td>
                <div>
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;