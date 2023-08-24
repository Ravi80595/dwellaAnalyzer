// import React, { useState, useEffect } from 'react';
// import { Box, Table, Th, Thead, Tr, Td, Tbody, Flex, Text, Button } from '@chakra-ui/react';
// import Navbar from '../Components/Navbar';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Orders = () => {
//     const [allOrders, setAllOrders] = useState([]);
//     const [ordersByState, setOrdersByState] = useState({});
//     const [selectedStartDate, setSelectedStartDate] = useState(new Date());
//     const [selectedEndDate, setSelectedEndDate] = useState(new Date());
//     const [currentPage, setCurrentPage] = useState(1);

//     console.log(allOrders);

//     const itemsPerPage = 100;
//     const startDateIndex = (currentPage - 1) * itemsPerPage;
//     const endDateIndex = Math.min(currentPage * itemsPerPage, allOrders.length);

//     const startDate = new Date(allOrders[startDateIndex]?.date_created).toLocaleDateString('en-US');
//     const endDate = new Date(allOrders[endDateIndex - 1]?.date_created).toLocaleDateString('en-US');

//     useEffect(() => {
//         fetchAllOrders();
//     }, [selectedStartDate, selectedEndDate, currentPage]);

//     const fetchAllOrders = async () => {
//         try {
//             const consumerKey = 'ck_808778b85393bf9b62c6c09f2ba1bccadaf083c9';
//             const consumerSecret = 'cs_9e199ecb87f812c06fd50dc36f337342c269541c';
//             const perPage = 100;

//             const formattedStartDate = selectedStartDate.toISOString();
//             const formattedEndDate = selectedEndDate.toISOString();

//             const response = await fetch(
//                 `https://dwellapumicestone.com/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=${perPage}&page=${currentPage}&after=${formattedStartDate}&before=${formattedEndDate}`
//             );

//             if (!response.ok) {
//                 throw new Error('Failed to fetch orders');
//             }

//             const data = await response.json();
//             setAllOrders(data);
//             organizeOrdersByState(data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const organizeOrdersByState = (orders) => {
//         const groupedOrders = {};
//         orders.forEach((order) => {
//             const state = order.billing.state || order.shipping.state || 'N/A';
//             if (!groupedOrders[state]) {
//                 groupedOrders[state] = [];
//             }
//             groupedOrders[state].push(order);
//         });
//         setOrdersByState(groupedOrders);
//     };

//     let serialNumber = 0;

//     return (
//         <Box>
//             <Navbar />
//             <Box pt={90}>
//                 <Flex justifyContent={'space-around'}>
//                     <Box w={'15%'} pt={'50px'}>
//                         <DatePicker selected={selectedStartDate} onChange={(date) => setSelectedStartDate(date)} />
//                         <DatePicker selected={selectedEndDate} onChange={(date) => setSelectedEndDate(date)} />
//                         <Text>Date Range on this page</Text>
//                         <Text pb={5}>
//                             {startDate} - {endDate}
//                         </Text>
//                         <h2>Orders by State and Count</h2>
//                         {Object.entries(ordersByState).map(([state, orders]) => (
//                             <Text key={state}>
//                                 {state}: {orders.length} orders
//                             </Text>
//                         ))}
//                     </Box>
//                     <Box w={'70%'} m={'auto'}>
//                         <Flex gap={10} w={'40%'} m={'auto'} mb={2}>
//                             <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//                                 Previous Page
//                             </Button>
//                             <span>Page {currentPage}</span>
//                             <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
//                         </Flex>
//                         <Table border={'2px solid grey'}>
//                             <Thead>
//                                 <Tr>
//                                     <Th>Sr No</Th>
//                                     <Th>Order ID</Th>
//                                     <Th>State</Th>
//                                     <Th>Date</Th>
//                                 </Tr>
//                             </Thead>
//                             <Tbody>
//                                 {allOrders.map((order) => (
//                                     <Tr fontSize={'16px'} key={order.id}>
//                                         <Td>{++serialNumber}</Td>
//                                         <Td>{order.id}</Td>
//                                         <Td>{order.billing.state || order.shipping.state}</Td>
//                                         <Td>{new Date(order.date_created).toDateString()}</Td>
//                                     </Tr>
//                                 ))}
//                             </Tbody>
//                         </Table>
//                     </Box>
//                 </Flex>
//                 <Flex gap={10} w={'30%'} m={'auto'} mt={8} mb={10}>
//                     <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//                         Previous Page
//                     </Button>
//                     <span>Page {currentPage}</span>
//                     <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
//                 </Flex>
//             </Box>
//         </Box>
//     );
// };

// export default Orders;




// import React, { useState, useEffect } from 'react';
// import { Box, Table, Th, Thead, Tr, Td, Tbody, Flex, Text, Button } from '@chakra-ui/react';
// import Navbar from '../Components/Navbar';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Orders = () => {
//     const [allOrders, setAllOrders] = useState([]);
//     const [ordersByState, setOrdersByState] = useState({});
//     const [selectedStartDate, setSelectedStartDate] = useState();
//     const [selectedEndDate, setSelectedEndDate] = useState();
//     const [currentPage, setCurrentPage] = useState(1);


//     useEffect(() => {
//         fetchAllOrders();
//     }, [selectedStartDate, selectedEndDate, currentPage]);

//     const fetchAllOrders = async () => {
//         try {
//             // console.log('ftech')
//             const consumerKey = 'ck_808778b85393bf9b62c6c09f2ba1bccadaf083c9';
//             const consumerSecret = 'cs_9e199ecb87f812c06fd50dc36f337342c269541c';
//             const perPage = 100;

//             const formattedStartDate = selectedStartDate.toISOString() 
//             const formattedEndDate = selectedEndDate.toISOString();
//             console.log(formattedStartDate)

//             const apiUrl = `https://dwellapumicestone.com/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=${perPage}&page=${currentPage}&after=${formattedStartDate}&before=${formattedEndDate}`;

//             const response = await fetch(apiUrl);

//             if (!response.ok) {
//                 throw new Error('Failed to fetch orders');
//             }

//             const data = await response.json();
//             setAllOrders(data);
//             organizeOrdersByState(data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const organizeOrdersByState = (orders) => {
//         const groupedOrders = {};
//         orders.forEach((order) => {
//             const state = order.billing.state || order.shipping.state || 'N/A';
//             if (!groupedOrders[state]) {
//                 groupedOrders[state] = [];
//             }
//             groupedOrders[state].push(order);
//         });
//         setOrdersByState(groupedOrders);
//     };

//     let serialNumber = 0;

//     return (
//         <Box>
//             <Navbar />
//             <Box pt={90}>
//                 <Flex justifyContent="space-around">
//                     <Box w="15%" pt="50px">
//                         <DatePicker selected={selectedStartDate} onChange={(date) => setSelectedStartDate(date)} />
//                         <DatePicker selected={selectedEndDate} onChange={(date) => setSelectedEndDate(date)} />
//                         <Text>Date Range on this page</Text>
//                         <Text pb={5}>
//                             {selectedStartDate.toLocaleDateString('en-US')} - {selectedEndDate.toLocaleDateString('en-US')}
//                         </Text>
//                         <h2>Orders by State and Count</h2>
//                         {Object.entries(ordersByState).map(([state, orders]) => (
//                             <Text key={state}>
//                                 {state}: {orders.length} orders
//                             </Text>
//                         ))}
//                     </Box>
//                     <Box w="70%" m="auto">
//                         <Flex gap={10} w="40%" m="auto" mb={2}>
//                             <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//                                 Previous Page
//                             </Button>
//                             <span>Page {currentPage}</span>
//                             <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
//                         </Flex>
//                         <Table border="2px solid grey">
//                             <Thead>
//                                 <Tr>
//                                     <Th>Sr No</Th>
//                                     <Th>Order ID</Th>
//                                     <Th>State</Th>
//                                     <Th>Date</Th>
//                                 </Tr>
//                             </Thead>
//                             <Tbody>
//                                 {allOrders.map((order) => (
//                                     <Tr fontSize="16px" key={order.id}>
//                                         <Td>{++serialNumber}</Td>
//                                         <Td>{order.id}</Td>
//                                         <Td>{order.billing.state || order.shipping.state}</Td>
//                                         <Td>{new Date(order.date_created).toDateString()}</Td>
//                                     </Tr>
//                                 ))}
//                             </Tbody>
//                         </Table>
//                     </Box>
//                 </Flex>
//                 <Flex gap={10} w="30%" m="auto" mt={8} mb={10}>
//                     <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//                         Previous Page
//                     </Button>
//                     <span>Page {currentPage}</span>
//                     <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
//                 </Flex>
//             </Box>
//         </Box>
//     );
// };

// export default Orders;



import React, { useState, useEffect } from 'react';
import { Box, Table, Th, Thead, Tr, Td, Tbody, Flex, Text, Button } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'



const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [ordersByState, setOrdersByState] = useState({});
    const [selectedStartDate, setSelectedStartDate] = useState();
    const [selectedEndDate, setSelectedEndDate] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchAllOrders();
    }, [selectedStartDate, selectedEndDate, currentPage]);

    const fetchAllOrders = async () => {
        try {
            console.log('loading')
            const consumerKey = 'ck_808778b85393bf9b62c6c09f2ba1bccadaf083c9';
            const consumerSecret = 'cs_9e199ecb87f812c06fd50dc36f337342c269541c';
            const perPage = 100;

            let apiUrl = `https://dwellapumicestone.com/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=${perPage}&page=${currentPage}`;

            if (selectedStartDate && selectedEndDate) {
                console.log(selectedStartDate)
                const formattedStartDate = selectedStartDate.toISOString();
                const formattedEndDate = selectedEndDate.toISOString();
                apiUrl += `&after=${formattedStartDate}&before=${formattedEndDate}`;
            }

            const response = await fetch(apiUrl);

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
        orders.forEach((order) => {
            const state = order.billing.state || order.shipping.state || 'N/A';
            if (!groupedOrders[state]) {
                groupedOrders[state] = [];
            }
            groupedOrders[state].push(order);
        });
        setOrdersByState(groupedOrders);
    };

    let serialNumber = 0;

    return (
        <Box background={'#e9e9e9'}>
            <Navbar />
            <Box p={10} pt={90}>
            <Flex gap={10} alignItems={'right'} mb={2} justifyContent={'end'}>
                            <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                Previous Page
                            </Button>
                            <span>Page {currentPage}</span>
                            <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
                        </Flex>
                <Flex justifyContent="space-around" gap={20}>
                    <Box w="30%" pt="50px" background={'white'} borderRadius={10} ml={5}>
                        <Flex gap={5} pb={10} justifyContent={'center'}>
                        <DatePicker placeholderText='enter start date' className="date-picker" selected={selectedStartDate} onChange={(date) => setSelectedStartDate(date)} />
                        <DatePicker placeholderText='Enter end date' className="date-picker" selected={selectedEndDate} onChange={(date) => setSelectedEndDate(date)} />
                        </Flex>
                        {/* <Text>Date Range on this page</Text>
                        <Text pb={5}>
                            {selectedStartDate && selectedStartDate.toLocaleDateString('en-US')} -{' '}
                            {selectedEndDate && selectedEndDate.toLocaleDateString('en-US')}
                        </Text> */}
                        <h2>Orders by State and Count</h2>
                        {Object.entries(ordersByState).map(([state, orders]) => (
                            <Text key={state}>
                                {state}: {orders.length} orders
                            </Text>
                        ))}
                    </Box>
                    <Box w="70%" m="auto" background={'white'} borderRadius={10}>
                       
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Sr No</Th>
                                    <Th>Order ID</Th>
                                    <Th>State</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {allOrders.map((order) => (
                                    <Tr fontSize="16px" key={order.id}>
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
                <Flex gap={10} w="30%" m="auto" mt={8} mb={10}>
                    <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous Page
                    </Button>
                    <span>Page {currentPage}</span>
                    <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default Orders;
