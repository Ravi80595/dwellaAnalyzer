import React from 'react'
import {Box,Table,Th,Thead,Tr,Td,Tbody,Flex, Text,Button} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react';

const OrderByState = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [ordersByState, setOrdersByState] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);

    console.log(allOrders)

    const itemsPerPage = 100; // Adjust as needed
    const startDateIndex = (currentPage - 1) * itemsPerPage;
    const endDateIndex = Math.min(currentPage * itemsPerPage, allOrders.length);

    const startDate = new Date(allOrders[startDateIndex]?.date_created).toLocaleDateString('en-US');
    const endDate = new Date(allOrders[endDateIndex - 1]?.date_created).toLocaleDateString('en-US');


    useEffect(() => {
        fetchAllOrders();
    }, [selectedDate, currentPage]);

    const fetchAllOrders = async () => {
        try {
            const consumerKey = 'ck_808778b85393bf9b62c6c09f2ba1bccadaf083c9';
            const consumerSecret = 'cs_9e199ecb87f812c06fd50dc36f337342c269541c';
            const perPage = 100;
            const startIndex = (currentPage - 1) * perPage;

            const thirtyDaysAgo = new Date(selectedDate);
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            
            const formattedSelectedDate = selectedDate.toISOString();
            const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString();

            const response = await fetch(`https://dwellapumicestone.com/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=${perPage}&page=${currentPage}&after=${formattedThirtyDaysAgo}&before=${formattedSelectedDate}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }

            const data = await response.json();
            setAllOrders(data);
            organizeOrdersByState(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const organizeOrdersByState = (orders) => {
        const groupedOrders = {};
        orders.forEach(order => {
            const state = order.billing.state || order.shipping.state || 'N/A';
            if (!groupedOrders[state]) {
                groupedOrders[state] = [];
            }
            groupedOrders[state].push(order);
        });
        setOrdersByState(groupedOrders);
    };

    let serialNumber = 0;
    // let serialNumber = (currentPage - 1) * 100; 
return (
    <Box>
    <Navbar/>
    <Box pt={90}>
            <Flex justifyContent={'space-around'}>
            <Box w={'15%'} pt={'50px'}>
            {/* <p>Date Range: </p> */}
            <Text>Date Range on this page</Text>
            <Text pb={5}>{startDate} - {endDate}</Text>
            <h2>Orders by State and Count</h2>
                {Object.entries(ordersByState).map(([state, orders]) => (
                    <Text key={state}>
                        {state}: {orders.length} orders
                    </Text>
                ))}
                <input
                    type="date"
                    value={selectedDate.toISOString().slice(0, 10)} // Set the input's value to the selectedDate in 'YYYY-MM-DD' format
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
            </Box>
            <Box w={'70%'} m={'auto'}>
            <Flex gap={10} w={'40%'} m={'auto'} mb={2}>
                <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous Page</Button>
                <span>Page {currentPage}</span>
                <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
            </Flex>
            <Table  border={'2px solid grey'}>
              <Thead>
                <Tr>
                  <Th>Sr No</Th>
                  <Th>Order ID</Th>
                  <Th>State</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
              {allOrders.map(order => (
                  <Tr fontSize={'16px'} key={order.id}>
                    <Td>{++serialNumber}</Td>
                    <Td>{order.id}</Td>
                    <Td>{order.billing.state || order.shipping.state}</Td>
                    <Td>{new Date(order.date_created).toDateString()}</Td>
                </Tr>
                ))}
              </Tbody>
              </Table>
              </Box>
              </Flex>           
            <Flex gap={10} w={'30%'} m={'auto'} mt={8} mb={10}>
                <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous Page</Button>
                <span>Page {currentPage}</span>
                <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
            </Flex>
        </Box>
    </Box>
  )
}

export default OrderByState
