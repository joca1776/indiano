import React from 'react';
import { FaList } from 'react-icons/fa';

const Header = ({ showSidebar, setShowSidebar }) => {
    return (
<div
    style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 8px',
        zIndex: 40
    }}
>
    <div
        style={{
            marginLeft: '0',
            borderRadius: '8px',
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#b1addf',
            padding: '0 20px',
            transition: 'all 0.3s ease-in-out'
        }}
    >
        <div
            onClick={() => setShowSidebar(!showSidebar)}
            style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                backgroundColor: '#6366f1',
                boxShadow: '0px 4px 6px rgba(99, 102, 241, 0.5)',
                cursor: 'pointer'
            }}
            >
              <span><FaList/></span>
                </div>
                <div style={{ 
    display: window.innerWidth >= 768 ? 'flex' : 'none', 
    flexGrow: 1,  // Faz com que o input ocupe espaço e fique no canto esquerdo
    justifyContent: 'flex-start'
}}>
    <input
        type="text"
        name="search"
        placeholder="search"
        style={{
            padding: '8px 12px',
            outline: 'none',
            border: '1px solid #334155',
            backgroundColor: 'transparent',
            borderRadius: '6px',
            color: '#423d72',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease-in-out',
            width: '250px', // Largura do input
            maxWidth: '100%'
        }}
        onFocus={(e) => e.target.style.borderColor = '#818cf8'}
        onBlur={(e) => e.target.style.borderColor = '#334155'}
    />
</div>


        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '32px',
                position: 'relative'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Kazi Ariyan</h2>
                        <span style={{ fontSize: '14px', fontWeight: 'normal', width: '100%' }}>Admin</span>
                    </div>
                    <img
                        src="http://localhost:3000/images/admin.jpg"
                        alt=""
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            overflow: 'hidden'
                        }}
                    />
                </div>
            </div>
        </div>

 
           </div> 
         </div>
     );
 };
export default Header;
