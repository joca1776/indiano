import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';


const MainLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div 
            style={{
                backgroundColor: '#cdcae9',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Cabeçalho */}
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            {/* Layout principal */}
            <div 
                style={{
                    display: 'flex',
                    flex: 1, // Ocupa todo o espaço disponível
                    marginTop: '65px', // Garante que não fique sobreposto ao Header
                }}
            >
                {/* Sidebar fixa */}
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                {/* Conteúdo principal */}
                <div 
                    style={{
                        flex: 1, 
                        padding: '20px', 
                        marginLeft: '260px', // Garante que o conteúdo não fique sob a sidebar
                        transition: 'margin-left 0.3s ease-in-out',
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;




// import React, { useState } from 'react';
//  import { Outlet } from 'react-router-dom';
//  import Header from './Header'; 
//  import Sidebar from './Sidebar';
 
//  const MainLayout = () => {

//     const [showSidebar, setShowSidebar] = useState(false)
 
//     return ( 
//         <div className='bg-[#cdcae9] w-full min-h-screen'>
//             <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
//              <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
 
//             <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all'>
//             <Outlet/>
//             </div>
//          </div>
//      );
//  };

//  export default MainLayout;