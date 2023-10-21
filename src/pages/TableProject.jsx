import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import deleteProject from '../components/Delete';
import editProject from '../components/Edit';
// import Nav from '../components/Navbar';
import ExportPDFButton from '../components/PDFDocument'; // Importa el componente ExportPDFButton
// import NestedModal from '../pages/Invoice';
// import { useTokenContext } from "../utils/tokenContext";
// import { Navigate } from "react-router-dom";

function TableSheet() {
    const [data, setData] = useState([]);
    // const [nestedModalOpen, setNestedModalOpen] = useState(false);
    // const [selectedRow, setSelectedRow] = useState(null);
    // const [previewModalOpen, setPreviewModalOpen] = useState(false);


    useEffect(() => {
        // Simula la carga de datos desde un archivo JSON
        const fetchData = async () => {
            try {
                const response = await import('../dataTest/projects.json');
                setData(response.default);
            } catch (error) {
                console.error('Error al cargar datos JSON:', error);
            }
        };

        fetchData();
    }, []);

    // const closeNestedModal = () => {
    //     setNestedModalOpen(true);
    // };

    // function openNestedModal() {
    //     setNestedModalOpen(true);
    // }


    // // nuevo modal

    // function openPreviewModal() {
    //     setPreviewModalOpen(true);
    // }

    // function closePreviewModal() {
    //     setPreviewModalOpen(false);
    // }



    ///



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
                                <h1>Projects</h1>
                            </caption>
                            <thead>
                                <tr>
                                    <th style={{ width: '8%' }}>Edit / Delete</th>
                                    <th style={{ width: '6%' }}>ID Project</th>
                                    <th style={{ width: '7%' }}>Name Project</th>
                                    <th style={{ width: '7%' }}>Client</th>
                                    <th style={{ width: '22%' }}>Description Project</th>
                                    <th style={{ width: '8%' }}>Date Start&nbsp;</th>
                                    <th style={{ width: '8%' }}>Date End Preview&nbsp;</th>
                                    <th style={{ width: '10%' }}>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td style={{ display: 'flex', gap: '8px' }}>
                                            <Button
                                                size="s"
                                                variant="outlined"
                                                color="neutral"
                                                onClick={() => editProject(row.id, data, setData)} // Agrega data y setData
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                size="s"
                                                variant="plain"
                                                color="danger"
                                                onClick={() => deleteProject(row.id, data, setData)} // Agrega data y setData 
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                        <td>{row.idProject}</td>
                                        <td>{row.nameProject}</td>
                                        <td>{row.client}</td>
                                        <td>{row.description}</td>
                                        <td>{row.dateStart}</td>
                                        <td>{row.dateEnd}</td>
                                        <td style={{ display: 'flex', gap: '10px' }}>
                                            <ExportPDFButton data={row} />
                                            {/* Utiliza ExportPDFButton para generar PDF */}
                                        </td>
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

export default TableSheet;
