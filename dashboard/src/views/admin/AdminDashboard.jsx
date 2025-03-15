// import React from 'react';
// import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
// import { FaUsers, FaCartShopping } from "react-icons/fa6";
// import Chart from 'react-apexcharts'
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {

//     const state = {
//         series : [
//             {
//                 name : "Orders",
//                 data : [23,34,45,56,76,34,23,76,87,78,34,45]
//             },
//             {
//                 name : "Revenue",
//                 data : [67,39,45,56,90,56,23,56,87,78,67,78]
//             },
//             {
//                 name : "Sellers",
//                 data : [34,39,56,56,80,67,23,56,98,78,45,56]
//             },
//         ],
//         options : {
//             color : ['#181ee8','#181ee8'],
//             plotOptions: {
//                 radius : 30
//             },
//             chart : {
//                 background : 'transparent',
//                 foreColor : '#d0d2d6'
//             },
//             dataLabels : {
//                 enabled : false
//             },
//             strock : {
//                 show : true,
//                 curve : ['smooth','straight','stepline'],
//                 lineCap : 'butt',
//                 colors : '#f0f0f0',
//                 width  : .5,
//                 dashArray : 0
//             },
//             xaxis : {
//                 categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//             },
//             legend : {
//                 position : 'top'
//             },
//             responsive : [
//                 {
//                     breakpoint : 565,
//                     yaxis : {
//                         categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//                     },
//                     options : {
//                         plotOptions: {
//                             bar : {
//                                 horizontal : true
//                             }
//                         },
//                         chart : {
//                             height : "550px"
//                         }
//                     }
//                 }
//             ]
//         }
//     }


//     return (
//         <div style={{ padding: '20px' }}>
//             <div style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
//                 gap: '28px', 
//                 width: '100%' 
//             }}>
                
//                 {/* Card 1 - Total Sales */}
//                 <div style={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center', 
//                     padding: '20px', 
//                     backgroundColor: '#fae8e8', 
//                     borderRadius: '8px', 
//                     gap: '12px' 
//                 }}>
//                     <div style={{ display: 'flex', flexDirection: 'column', color: '#5c5a5a' }}>
//                         <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>$3434</h2>
//                         <span style={{ fontSize: '16px', fontWeight: '500' }}>Total Sales</span>
//                     </div>
//                     <div style={{ 
//                         width: '40px', 
//                         height: '47px', 
//                         borderRadius: '50%', 
//                         backgroundColor: '#fa0305', 
//                         display: 'flex', 
//                         justifyContent: 'center', 
//                         alignItems: 'center', 
//                         fontSize: '20px' 
//                     }}>
//                         <MdCurrencyExchange style={{ color: '#fae8e8' }} />
//                     </div>
//                 </div>

//                 {/* Card 2 - Products */}
//                 <div style={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center', 
//                     padding: '20px', 
//                     backgroundColor: '#fde2ff', 
//                     borderRadius: '8px', 
//                     gap: '12px' 
//                 }}>
//                     <div style={{ display: 'flex', flexDirection: 'column', color: '#5c5a5a' }}>
//                         <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>50</h2>
//                         <span style={{ fontSize: '16px', fontWeight: '500' }}>Products</span>
//                     </div>
//                     <div style={{ 
//                         width: '40px', 
//                         height: '47px', 
//                         borderRadius: '50%', 
//                         backgroundColor: '#760077', 
//                         display: 'flex', 
//                         justifyContent: 'center', 
//                         alignItems: 'center', 
//                         fontSize: '20px' 
//                     }}>
//                         <MdProductionQuantityLimits style={{ color: '#fae8e8' }} />
//                     </div>
//                 </div>

//                 {/* Card 3 - Sellers */}
//                 <div style={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center', 
//                     padding: '20px', 
//                     backgroundColor: '#e9feea', 
//                     borderRadius: '8px', 
//                     gap: '12px' 
//                 }}>
//                     <div style={{ display: 'flex', flexDirection: 'column', color: '#5c5a5a' }}>
//                         <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>10</h2>
//                         <span style={{ fontSize: '16px', fontWeight: '500' }}>Sellers</span>
//                     </div>
//                     <div style={{ 
//                         width: '40px', 
//                         height: '47px', 
//                         borderRadius: '50%', 
//                         backgroundColor: '#038000', 
//                         display: 'flex', 
//                         justifyContent: 'center', 
//                         alignItems: 'center', 
//                         fontSize: '20px' 
//                     }}>
//                         <FaUsers style={{ color: '#fae8e8' }} />
//                     </div>
//                 </div>

//                 {/* Card 4 - Orders */}
//                 <div style={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center', 
//                     padding: '20px', 
//                     backgroundColor: '#ecebff', 
//                     borderRadius: '8px', 
//                     gap: '12px' 
//                 }}>
//                     <div style={{ display: 'flex', flexDirection: 'column', color: '#5c5a5a' }}>
//                         <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>54</h2>
//                         <span style={{ fontSize: '16px', fontWeight: '500' }}>Orders</span>
//                     </div>
//                     <div style={{ 
//                         width: '40px', 
//                         height: '47px', 
//                         borderRadius: '50%', 
//                         backgroundColor: '#0200f8', 
//                         display: 'flex', 
//                         justifyContent: 'center', 
//                         alignItems: 'center', 
//                         fontSize: '20px' 
//                     }}>
//                         <FaCartShopping style={{ color: '#fae8e8' }} />
//                     </div>
//                 </div>

//             </div>

//             <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '28px' }}>
//             <div style={{ 
//                 width: '100%', 
//                 paddingRight: '12px', 
//                 maxWidth: '58.33%', // Equivalente ao Tailwind lg:w-7/12
//                 boxSizing: 'border-box' 
//             }}>
//                 <div style={{ 
//                     width: '100%', 
//                     backgroundColor: '#6a5fdf', 
//                     padding: '16px', 
//                     borderRadius: '8px' 
//                 }}>
//                     <Chart options={state.options} series={state.series} type="bar" height={350} />
//                 </div>
//             </div>

//             <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
//              <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
//                  <div className='flex justify-between items-center'>
//                      <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Seller Message</h2>
//                      <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
//                  </div>
 
//          <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
//              <ol className='relative border-1 border-slate-600 ml-4'>
//                  <li className='mb-3 ml-6'>
//                      <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
//                      <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
//                      <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
//                      <div className='flex justify-between items-center mb-2'>
//                  <Link className='text-md font-normal'>Admin</Link>
//                  <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
//                      </div>
//                      <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
//                          How Are you
//                      </div>
//                      </div>
//                  </li>
 
 
//                  <li className='mb-3 ml-6'>
//                      <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
//                      <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
//                      <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
//                      <div className='flex justify-between items-center mb-2'>
//                  <Link className='text-md font-normal'>Admin</Link>
//                  <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
//                      </div>
//                      <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
//                          How Are you
//                      </div>
//                      </div>
//                  </li>
 
 
//                  <li className='mb-3 ml-6'>
//                      <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
//                      <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
//                      <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
//                      <div className='flex justify-between items-center mb-2'>
//                  <Link className='text-md font-normal'>Admin</Link>
//                  <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
//                      </div>
//                      <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
//                          How Are you
//                      </div>
//                      </div>
//                  </li>
 
//              </ol>
 
//          </div>
 
 
//              </div>
//          </div>

//         </div>

//         </div>
//     );
// };

// export default AdminDashboard;



//-----------------------------------------------------------
//-----------------------------------------------------------
//----------------------------------------------------------


// import React from 'react';
// import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
// import { FaUsers, FaCartShopping } from "react-icons/fa6";
// import Chart from 'react-apexcharts'
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {

//     const state = {
//         series : [
//             {
//                 name : "Orders",
//                 data : [23,34,45,56,76,34,23,76,87,78,34,45]
//             },
//             {
//                 name : "Revenue",
//                 data : [67,39,45,56,90,56,23,56,87,78,67,78]
//             },
//             {
//                 name : "Sellers",
//                 data : [34,39,56,56,80,67,23,56,98,78,45,56]
//             },
//         ],
//         options : {
//             color : ['#181ee8','#181ee8'],
//             plotOptions: {
//                 radius : 30
//             },
//             chart : {
//                 background : 'transparent',
//                 foreColor : '#d0d2d6'
//             },
//             dataLabels : {
//                 enabled : false
//             },
//             strock : {
//                 show : true,
//                 curve : ['smooth','straight','stepline'],
//                 lineCap : 'butt',
//                 colors : '#f0f0f0',
//                 width  : .5,
//                 dashArray : 0
//             },
//             xaxis : {
//                 categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
//             },
//             legend : {
//                 position : 'top'
//             }
//         }
//     }

//     return (
//         <div style={{ padding: '20px' }}>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '28px', width: '100%' }}>
//                 {[{ value: '$3434', label: 'Total Sales', bg: '#fae8e8', iconBg: '#fa0305', Icon: MdCurrencyExchange },
//                   { value: '50', label: 'Products', bg: '#fde2ff', iconBg: '#760077', Icon: MdProductionQuantityLimits },
//                   { value: '10', label: 'Sellers', bg: '#e9feea', iconBg: '#038000', Icon: FaUsers },
//                   { value: '54', label: 'Orders', bg: '#ecebff', iconBg: '#0200f8', Icon: FaCartShopping }]
//                   .map(({ value, label, bg, iconBg, Icon }, index) => (
//                     <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: bg, borderRadius: '8px', gap: '12px' }}>
//                         <div style={{ display: 'flex', flexDirection: 'column', color: '#5c5a5a' }}>
//                             <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</h2>
//                             <span style={{ fontSize: '16px', fontWeight: '500' }}>{label}</span>
//                         </div>
//                         <div style={{ width: '40px', height: '47px', borderRadius: '50%', backgroundColor: iconBg, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
//                             <Icon style={{ color: '#fae8e8' }} />
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '28px' }}>
//                 <div style={{ width: '100%', paddingRight: '12px', maxWidth: '58.33%', boxSizing: 'border-box' }}>
//                     <div style={{ width: '100%', backgroundColor: '#6a5fdf', padding: '16px', borderRadius: '8px' }}>
//                         <Chart options={state.options} series={state.series} type="bar" height={350} />
//                     </div>
//                 </div>

//                 <div style={{ width: '100%', paddingLeft: '12px', maxWidth: '41.67%', boxSizing: 'border-box', marginTop: '24px' }}>
//                     <div style={{ width: '100%', backgroundColor: '#6a5fdf', padding: '16px', borderRadius: '8px', color: '#d0d2d6' }}>
//                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <h2 style={{ fontWeight: 'bold', fontSize: '18px', paddingBottom: '12px' }}>Recent Seller Message</h2>
//                             <Link style={{ fontWeight: 'bold', fontSize: '14px', color: '#d0d2d6' }}>View All</Link>
//                         </div>
//                         <div style={{ paddingTop: '16px' }}>
//                             {[1, 2, 3].map((_, index) => (
//                                 <div key={index} style={{ display: 'flex', marginBottom: '16px' }}>
//                                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px' }}>
//                                         <img src="http://localhost:3000/images/admin.jpg" alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
//                                     </div>
//                                     <div style={{ flex: 1, backgroundColor: '#2d2d2d', padding: '12px', borderRadius: '8px', border: '1px solid #4c4c4c' }}>
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
//                                             <Link style={{ fontSize: '14px', fontWeight: 'normal' }}>Admin</Link>
//                                             <time style={{ fontSize: '12px', fontWeight: 'normal' }}>2 days ago</time>
//                                         </div>
//                                         <div style={{ padding: '8px', fontSize: '12px', backgroundColor: '#3a3a3a', borderRadius: '6px', border: '1px solid #4c4c4c' }}>
//                                             How Are you
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;

//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------

import React from 'react';
 import { MdCurrencyExchange,MdProductionQuantityLimits } from "react-icons/md";
 import { FaUsers } from "react-icons/fa";
 import { FaCartShopping } from "react-icons/fa6"; 
 import Chart from 'react-apexcharts'
 import { Link } from 'react-router-dom';
 
 const AdminDashboard = () => {
 
     const state = {
         series : [
             {
                 name : "Orders",
                 data : [23,34,45,56,76,34,23,76,87,78,34,45]
             },
             {
                 name : "Revenue",
                 data : [67,39,45,56,90,56,23,56,87,78,67,78]
             },
             {
                 name : "Sellers",
                 data : [34,39,56,56,80,67,23,56,98,78,45,56]
             },
         ],
         options : {
             color : ['#181ee8','#181ee8'],
             plotOptions: {
                 radius : 30
             },
             chart : {
                 background : 'transparent',
                 foreColor : '#d0d2d6'
             },
             dataLabels : {
                 enabled : false
             },
             strock : {
                 show : true,
                 curve : ['smooth','straight','stepline'],
                 lineCap : 'butt',
                 colors : '#f0f0f0',
                 width  : .5,
                 dashArray : 0
             },
             xaxis : {
                 categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
             },
             legend : {
                 position : 'top'
             },
             responsive : [
                 {
                     breakpoint : 565,
                     yaxis : {
                         categories : ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                     },
                     options : {
                         plotOptions: {
                             bar : {
                                 horizontal : true
                             }
                         },
                         chart : {
                             height : "550px"
                         }
                     }
                 }
             ]
         }
     }
 
 
 
 
     return (
         <div className='px-2 md:px-7 py-5'>
 
 
             <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
 
                 <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                     <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                         <h2 className='text-3xl font-bold'>$3434</h2>
                         <span className='text-md font-medium'>Total Salse</span>
                     </div>
 
                     <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                     <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' /> 
                     </div> 
                 </div>
 
 
                 <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
                     <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                         <h2 className='text-3xl font-bold'>50</h2>
                         <span className='text-md font-medium'>Products</span>
                     </div>
 
                     <div className='w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                     <MdProductionQuantityLimits  className='text-[#fae8e8] shadow-lg' /> 
                     </div> 
                 </div>
 
 
                 <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                     <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                         <h2 className='text-3xl font-bold'>10</h2>
                         <span className='text-md font-medium'>Sellers</span>
                     </div>
 
                     <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
                     <FaUsers  className='text-[#fae8e8] shadow-lg' /> 
                     </div> 
                 </div>
 
 
                 <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                     <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                         <h2 className='text-3xl font-bold'>54</h2>
                         <span className='text-md font-medium'>Orders</span>
                     </div>
 
                     <div className='w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                     <FaCartShopping  className='text-[#fae8e8] shadow-lg' /> 
                     </div> 
                 </div>
 
             </div>
 
 
 
         <div className='w-full flex flex-wrap mt-7'>
             <div className='w-full lg:w-7/12 lg:pr-3'>
                 <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
             <Chart options={state.options} series={state.series} type='bar' height={350} />
                 </div>
             </div>
 
 
         <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
             <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
                 <div className='flex justify-between items-center'>
                     <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Seller Message</h2>
                     <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                 </div>
 
         <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
             <ol className='relative border-1 border-slate-600 ml-4'>
                 <li className='mb-3 ml-6'>
                     <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                     <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                     <div className='flex justify-between items-center mb-2'>
                 <Link className='text-md font-normal'>Admin</Link>
                 <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                     </div>
                     <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                         How Are you
                     </div>
                     </div>
                 </li>
 
 
                 <li className='mb-3 ml-6'>
                     <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                     <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                     <div className='flex justify-between items-center mb-2'>
                 <Link className='text-md font-normal'>Admin</Link>
                 <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                     </div>
                     <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                         How Are you
                     </div>
                     </div>
                 </li>
 
 
                 <li className='mb-3 ml-6'>
                     <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                     <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" /></div>
                     <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                     <div className='flex justify-between items-center mb-2'>
                 <Link className='text-md font-normal'>Admin</Link>
                 <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'> 2 day ago</time>
                     </div>
                     <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                         How Are you
                     </div>
                     </div>
                 </li>
 
             </ol>
 
         </div>
 
 
             </div>
         </div>
         </div>
 
 
         <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
             <div className='flex justify-between items-center'>
                 <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3 '>Recent Orders</h2>
                 <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>
 
     <div className='relative overflow-x-auto'>
     <table className='w-full text-sm text-left text-[#d0d2d6]'>
         <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
         <tr>
             <th scope='col' className='py-3 px-4'>Order Id</th>
             <th scope='col' className='py-3 px-4'>Price</th>
             <th scope='col' className='py-3 px-4'>Payment Status</th>
             <th scope='col' className='py-3 px-4'>Order Status</th>
             <th scope='col' className='py-3 px-4'>Active</th>
         </tr>
         </thead>
 
         <tbody>
         {
                 [1,2,3,4,5].map((d, i) => <tr key={i}>
                 <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#34344</td>
                 <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>$454</td>
                 <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                 <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                 <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                     <Link>View</Link> </td>
             </tr> )
             }
               </tbody>
 
 </table>

 </div>

     </div>





     </div>
 );
};

export default AdminDashboard;

//anotação