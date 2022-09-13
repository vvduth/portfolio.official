import React from 'react'
import NavigationDot from '../components/NavigationDot'
import SocialMedia from '../components/SocialMedia'
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
            <Component /> 
            <div className='copyright'>
                <p className="p-text">@2022 Duc Thai</p>
            </div>
        </div>
        <NavigationDot active={idName} />
    </div>
  )
}

export default AppWrap
