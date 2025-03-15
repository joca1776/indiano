import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth);

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state));
    };

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center'
    };

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
            navigate('/');
        }
    }, [errorMessage, successMessage]);

    return (
        <div style={{
            minWidth: '100vw',
            minHeight: '100vh',
            backgroundColor: '#cdcae9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '350px',
                color: '#ffffff',
                padding: '8px'
            }}>
                <div style={{
                    backgroundColor: '#6f68d1',
                    padding: '16px',
                    borderRadius: '8px'
                }}>
                    <div style={{
                        height: '70px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '180px',
                            height: '50px'
                        }}>
                            <img style={{ width: '100%', height: '100%' }} src="http://localhost:3000/images/logo.png" alt="image" />
                        </div>
                    </div>
                    <form onSubmit={submit}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={inputHandle}
                                value={state.email}
                                style={{
                                    padding: '8px 12px',
                                    outline: 'none',
                                    border: '1px solid #94a3b8',
                                    backgroundColor: 'transparent',
                                    borderRadius: '6px'
                                }}
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                required
                            />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: '4px',
                            marginBottom: '12px'
                        }}>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={inputHandle}
                                value={state.password}
                                style={{
                                    padding: '8px 12px',
                                    outline: 'none',
                                    border: '1px solid #94a3b8',
                                    backgroundColor: 'transparent',
                                    borderRadius: '6px'
                                }}
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                required
                            />
                        </div>

                        <button
                            disabled={loader}
                            style={{
                                backgroundColor: '#1e293b',
                                width: '100%',
                                color: 'white',
                                borderRadius: '6px',
                                padding: '8px 14px',
                                marginBottom: '12px',
                                cursor: loader ? 'not-allowed' : 'pointer',
                                boxShadow: loader ? 'none' : '0px 4px 8px rgba(59, 130, 246, 0.5)',
                                transition: 'all 0.3s ease'
                            }}>
                            {
                                loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
