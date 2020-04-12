import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero Logo"/>
                <span>Bem vinda, {ongName} </span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                    <li key={1}>
                        <strong>CASO:</strong>
                        <p>Ambler</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>You need to enable JavaScript to run this app.</p>

                        <strong>VALOR:</strong>
                        <p>R$34,60</p>

                        <button onClick={() => console.log("UU")} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                
            </ul>
        </div>
    );
}