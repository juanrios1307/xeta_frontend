import React from "react";
import {Row, Col} from "antd";

const items = [
    {
        key: '1',
        icon: <i className="fas fa-tachometer-alt"></i>,
        title: 'Agilizar procesos',
    },
    {
        key: '2',
        icon: <i className="fas fa-hourglass-half"></i>,
        title: 'Aumenta la eficiencia de la empresa',
    },
    {
        key: '3',
        icon: <i className="fas fa-money-bill-wave"></i>,
        title: 'Reduce gastos',
    },
]

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Sobre Nosotros</h2>
                    <p>Xeta Order : Software de gestión</p>
                </div>
                <div className="contentHolder">
                    <p>Xeta order es un software que permite a emprendedores pequeños o medianos relacionados con el área de alimentación y comercio, realizar una gestión de inventarios, estadísticas y toma de pedidos de forma inmediata, agilizando así estos procesos y mejorando la eficiencia de un negocio. </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;