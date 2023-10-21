import React, { useState, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
// import Nav from '../components/Navbar';
// import { useTokenContext } from "../utils/tokenContext";
// import { Navigate } from "react-router-dom";

// Funcion para Editar 
function EditRow(row) {
    alert('Editar fila');
    console.log(`Editar fila: ${row.name}`);
}


// Funcion para Eliminar
function DeleteRow(row) {
    alert('Eliminar Fila');
    console.log(`Editar fila: ${row.name}`);
}


// // Funcion para Generar invoice
// function GenerateInvoice(row) {
//     alert('Generate Invoice');
//     console.log(`Generar factura para: ${row.name}`);
// }

export default function TableSheet() {
    const [data, setData] = useState([]);

    useEffect(() => {
        import('../dataTest/client.json')
            .then((jsonData) => {
                setData(jsonData.default);
            })
            .catch((error) => {
                console.error('Error al cargar datos JSON:', error);
            });
    }, []);


    return (
        <>
            {/* <Nav /> */}
            <div className="App-header">
                <main style={{ marginTop: "-180px ", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
                        <Table
                            stripe="odd"
                            hoverRow
                            sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
                        >
                            <caption style={{ textAlign: 'center' }}>
                                <h1>Customers</h1>
                            </caption>
                            <thead>
                                <tr>
                                    <th style={{ width: '7%' }}>Edit / Delete</th>
                                    <th style={{ width: '5%' }}>ID Client</th>
                                    <th style={{ width: '8%' }}>Client</th>
                                    <th style={{ width: '8%' }}>Nit</th>
                                    <th style={{ width: '10%' }}>Direction</th>
                                    <th style={{ width: '8%' }}>Number phone&nbsp;</th>
                                    <th style={{ width: '10%' }}>Email&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Button
                                                size="s"
                                                variant="plain"
                                                color="primary"
                                                onClick={() => EditRow(row)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                size="s"
                                                variant="plain"
                                                color="danger"
                                                onClick={() => DeleteRow(row)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                        <td>{row['ID Client']}</td>
                                        <td>{row.Client}</td>
                                        <td>{row.Nit}</td>
                                        <td>{row.Direction}</td>
                                        <td>{row['NumberPhone']}</td>
                                        <td>{row.Email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Sheet>
                </main>


            </div>

        </>
    );
}
