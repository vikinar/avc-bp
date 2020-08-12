import style from './style'

const NavBtn = (props) => {


    return (
        <div className="fixed nav-btn m-4 cursor-pointer" onClick={props.click}>
            <span className={`nav-btn_dash ${props.navState ? `nav-btn_close` : ``}`}></span>
            <span className={`nav-btn_dash ${props.navState ? `nav-btn_close` : ``}`}></span>
            <span className={`nav-btn_dash ${props.navState ? `nav-btn_close` : ``}`}></span>
            <style jsx>{style}</style>
        </div>
    )
}

export default NavBtn