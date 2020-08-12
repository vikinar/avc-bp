import css from 'styled-jsx/css'

const style = css`
  .nav-btn{
        width: 1.75rem;
        height: 1.75rem;
        padding: 2px;
        //background: blue;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        
        &_dash{
          width: 100%;
          height: 2px;
          background: #283593;
          transform-origin: 0;
          align-self: flex-end;
          border-radius: 5px;
        
        &:nth-of-type(2){
          width: 50%; 
          }
        }
        
        &:hover{
          .nav-btn_dash{
            &:nth-of-type(2){
              width: 65%;
            }
            &:nth-of-type(3){
              width: 85%;
            }
          }
        }
        
        &_close{
          width: 100%;
          padding-left: 3px;
        &:nth-of-type(1){
            //animation: .5s navSwitch forwards ease; 
            transform: rotate(45deg) translateY(-.75px);
        }
        
        &:nth-of-type(2){
            transform: translateX(100%);
            opacity: 0;
        }
        
        &:nth-of-type(3){
            width: 100% !important;
            transform: rotate(-45deg) translateY(.75px);;
        }
        }
      }
`

export default style