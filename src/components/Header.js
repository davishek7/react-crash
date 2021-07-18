import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'


const Header = ({title,onAdd,showAdd}) => {
    
    const location = useLocation()

    return (
        <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && <Button 
        text={showAdd ? 'Close' : 'Add'} 
        color={showAdd ? 'red' : 'black'} 
        onClick={onAdd}/>
        }
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes = {
    title :PropTypes.string.isRequired
}

// // css in JS <h1 style={headingStyle}></h1>
// const headingStyle ={
//     textAlign : 'center',
//     color : 'red',
//     backgroundColor : 'black',
// }


export default Header
