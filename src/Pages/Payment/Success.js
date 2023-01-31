import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';

const Success = () => {
    const transactionId = new URLSearchParams(document.location.search).get('transactionId')
    const [orders, setOrders] = useState({})
const navigate = useNavigate()

    const returnF = () => {
        navigate('/dashboard/booklist')
    }
    useEffect(() => {
        fetch(`http://localhost:5000/api/payment/success?transactionId=${transactionId}`)
            .then(res => res.json())
            .then(data => { setOrders(data.data) })
           
    }
        , [])

    return (
        <div className="overflow-x-auto">
            <h3 onClick={returnF} className='text-left mx-16 p-3 flex items-center my-16 cursor-pointer'>Back <AiOutlineRollback className='pl-2 text-2xl' /></h3>
            <table className="table w-8/12 mx-auto mt-16">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Products name</th>
                        <th>status</th>
                    </tr>
                      <tr>
                          <th>{orders.customer}</th>
                          <td>{orders.email}</td>
                          <td>{orders.product}</td>
                          <td>paid: {orders.paid}</td>
                      </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Success;