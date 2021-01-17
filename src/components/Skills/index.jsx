import React from 'react'
import { ContentWrapper, LogoItem } from './SkillsElements'
import HTML5 from '../../images/html-5.png'
import CSS3 from '../../images/css.png'
import Javascript from '../../images/javascript.png'
import ReactJSLogo from '../../images/reactjs.png'
import ReactNative from '../../images/react-native.png'
import ReduxLogo from '../../images/redux.png'
import StyledCompsLogo from '../../images/styled-components.png'
import BootstrapLogo from '../../images/bootstrap.png'
import NodeJSLogo from '../../images/nodejs.png'
import ExpressJSLogo from '../../images/ExpressJS.png'
import MysqlLogo from '../../images/mysql.png'
import MongoDBLogo from '../../images/mongodb.png'
import FirebaseLogo from '../../images/firebase.png'

const Skills = () => {
    return (
        <ContentWrapper>
            <LogoItem src={HTML5}/>
            <LogoItem src={CSS3}/>
            <LogoItem src={Javascript}/>
            <LogoItem src={ReactJSLogo}/>
            <LogoItem src={ReactNative}/>
            <LogoItem src={ReduxLogo}/>
            <LogoItem src={StyledCompsLogo}/>
            <LogoItem src={BootstrapLogo}/>
            <LogoItem src={NodeJSLogo}/>
            <LogoItem height='40px' src={ExpressJSLogo}/>
            <LogoItem src={MysqlLogo}/>
            <LogoItem src={MongoDBLogo}/>
            <LogoItem src={FirebaseLogo}/>
        </ContentWrapper>
    )
}

export default Skills
