import PropTypes from 'prop-types';

function ShopItemFunc(item) {
  const data = item.item;
  return (
    <div className="main-content">
      <h2>{data.brand}</h2>
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <div className="description">{data.descriptionFull}
      </div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay"/>
      </div>
      <div className="divider"/>
      <div className="purchase-info">
        <div className="price">{data.currency}{parseFloat(data.price).toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.number
  })
}

export default ShopItemFunc;
