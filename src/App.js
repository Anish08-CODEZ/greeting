import Greeting from './components/Greeting';

function App() {
  // const products = [
  //   { title: 'Cabbage', id: 1 },
  //   { title: 'Garlic', id: 2 },
  //   { title: 'Apple', id: 3 },
  //   { title: 'Banana', id: 3 },
  // ];

  // const listItems = products.map(product =>
  //   <li
  //     key={product.id}
  //   >
  //     {product.title === 'Banana' ? <span className='font-bold'>{product.title}</span> : <span>{product.title}</span> }
  //   </li>
  // );

  return (
    <div className="flex-auto items-center justify-center w-full h-full ">
      <div className="list flex items-center justify-center list-none flex-col h-full">
        {/* {listItems} */}
      </div>
      <div className='flex justify-center'>
        <Greeting />
      </div>
    </div>
  );
}

export default App;
