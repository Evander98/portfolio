import React from 'react'
import { ContentWrapper, LogoItem } from './SkillsElements'

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
