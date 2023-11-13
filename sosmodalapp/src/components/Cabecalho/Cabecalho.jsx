import Link from 'next/link';
import "./Cabecalho.css";
import { useState } from 'react';

export default function Cabecalho() {

    return (
        <header className="cabecalho">

            <nav>
                <Link>LOGOUT</Link>

                <div className="menu-links">
                    <Link>Home</Link>
                    <Link>Sobre Nos</Link>
                    <Link>Fale Conosco</Link>
                </div>

                <div>
                    <p>usuario e email</p>
                </div>

            </nav>
        </header>
    )

}

