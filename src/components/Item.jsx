function Item({item}) {
  return ( <div className="item">
    <img src={item.image} height='64' />
    <span className="details">
      <div className="name">{item.name}</div>
      <div className="desc">{item.desc}</div>
      <div className="price">₹{item.price}</div>
      <div className="cust">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </span>
  </div> );
}

export default Item;