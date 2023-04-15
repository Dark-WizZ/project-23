import Item from "../components/Item";

function Items(props) {
  const items = JSON.parse(props.items)
  return ( <div>
    {
      items.map(i => {
        return <div className="category">
          <span className='title'>{i.catName}</span>
          <div className="items">
            {i.items.map(item => {
              return <Item item={item} />
            })}
          </div>
        </div>
      })
    }
  </div> );
}

export default Items;