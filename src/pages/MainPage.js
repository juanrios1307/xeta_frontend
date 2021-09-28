import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/_main/header";
import AppHero from "../components/_main/hero";
import AppAbout from "../components/_main/about";
import AppFeature from "../components/_main/aFeature";
import AppWorks from "../components/_main/works";
import AppPricing from "../components/_main/princing";
import AppContact from "../components/_main/contact";
import AppFooter from "../components/_main/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";

const { Header, Content } = Layout;

class MainPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppHero/>
                    <AppAbout/>
                    <AppFeature/>
                    <AppWorks/>
                    <AppPricing/>
                    <AppContact/>
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MainPage;
