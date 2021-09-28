import React from "react";
import { Carousel} from 'antd';

const items = [
    {
        key: '1',
        title: 'Xeta Order',
        content: 'Xeta Order es un software de toma de pedidos y de gestión de inventario para emprendedores pequeños o medianos relacionados con el área de alimentación y comercio',
    },
    {
        key: '2',
        title: '¿Quienes somos?',
        content: 'Somos una empresa que busca ayudar a emprendedores a aumentar su eficiencia por medio de la reducción de algunas de sus funciones. De igual forma buscamos enriquecer los procesos de cada compañía por medio de softwares que brindan mayor comodidad al empresario y que aumentan el crecimiento y desarrollo de la empresa.',
    },
    {
        key: '3',
        title: 'The best app to increase your productivity',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
]

function AppHero() {
    return (
        <div id="hero" className="heroBlock">
            <Carousel>
                {items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;