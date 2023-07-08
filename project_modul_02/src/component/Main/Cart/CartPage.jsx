import React from 'react'

function CartPage() {
  return (
    <div>
      <div
  className="modal fade  "
  id="exampleModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content modalcuatao">
      <div className="modal-header ">
        <h1 className="modal-title text-center fs-5 " id="exampleModalLabel">
          Giỏ hàng
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body ">
        <div className="dashboard-oder ">
          <div className="oder-address">
            <p>Địa chỉ nhận hàng</p>
            <form>
              <input type="text" placeholder="Vui lòng nhập địa nhận hàng" />
              <button type="submit">Xác nhận địa chỉ</button>
            </form>
          </div>
          <div className="oder-time">
            <span className="fas fa-clock" /> 30 mins
            <span className="fas fa-map-marker-alt"> </span> 2 Km
          </div>
          <div className="oder-wapper">
            <div className="test">
              <div className="oder-card">
                <img src="./img/img4.jpg" alt="" className="oder-image" />
                <div className="oder-detail">
                  <p>Lorem ipsum sit amet</p>
                  <i className="fas fa-time"> X </i>
                  <input type="number" defaultValue={1} />
                </div>
                <h4 className="oder-price">$35</h4>
              </div>
              <div className="oder-card">
                <img src="./img/img4.jpg" alt="" className="oder-image" />
                <div className="oder-detail">
                  <p>Lorem ipsum sit amet</p>
                  <i className="fas fa-time"> X </i>
                  <input type="number" defaultValue={1} />
                </div>
                <h4 className="oder-price">$35</h4>
              </div>
            </div>
            <hr className="divider" />
            <div className="oder-total">
              <p>
                Subtotal <span>$ 156</span>
              </p>
              <p>
                Tax (10%) <span>$ 15.6</span>
              </p>
              <p>
                Delivery Fee <span>$ 3</span>
              </p>
              <hr className="divider" />
              <p>
                Total <span>$ 174.6</span>
              </p>
              <button
                className="checkout"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CartPage
