import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { env } from '../../config';
import './YourOrder.css'

function YourOrder() {
  const [order, setOrder] = useState([])

  useEffect(() => {
    let customerId = window.localStorage.getItem("customerId") // Retrieve the customer ID using the key "customerId"
    console.log(`Fetching order history for customer ID: ${customerId}`); // Log the customer ID
    if (customerId) {
      getOrder(customerId)
    } else {
      console.log('Customer ID not found in local storage'); // Log an error if the customer ID is not found
    }
  }, [])
  
  const getOrder = async (customerId) => {
    try {
      console.log(`Making GET request to /api/order-history/${customerId}`);  // Log the API call
      let response = await axios.get(`${env.api}/api/order-history/${customerId}`); // Use the retrieved customer ID in the API endpoint
      const { data } = response;
      console.log(`Received order history from backend: ${JSON.stringify(data)}`); // Log the received data
      setOrder(data);
    } catch (error) {
      console.log(`Error in GET /api/order-history/${customerId}: ${error}`);  // Log the error in more detail
    }
  };
  
  console.log(order);
  return (
    <div>
      <div className='p-3'>
        <h2>My Order : -</h2>
      </div>
      <div className="m-3 table_responsive qqq">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th>Customer ID</th>
              <th>Payment Mode</th>
              <th scope="col">Order</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              order.length > 0 && order ?  (
                order.map((item,index)=>{
                  return <tr key={index}>
                    <td>{index +1}</td>
                    <td>{item.date}</td>
                    <td>{item.customer_id}</td>
                    <td>{item.payment_mode}</td>
                    <td>{`Product: ${item.order_details.product}, Quantity: ${item.order_details.quantity}`}</td>
                    <td>{item.amount}</td>
                  </tr>
                })
              ) : (<tr> <h5>No Record Found</h5></tr> )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default YourOrder
