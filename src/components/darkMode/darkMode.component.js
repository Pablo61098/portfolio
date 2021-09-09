import {React} from 'react';
import {connect} from 'react-redux';
import {setDarkMode} from '../../redux/darkmode/darkMode.actions';

import {Toogle, Label} from './darkMode.styles';

const DarkMode = ({setDarkMode, currentState}) => {

    

    return(
        <Toogle>
            <Label className="switch"  >
                <input type={`checkbox`} defaultChecked={currentState}
                    onChange={(e) => {setTimeout(() => { setDarkMode() }, 500);}}
                    />
                <span className="slider round"></span>
            </Label>
        </Toogle>
    )

}

const mapDispatchToProps = dispatch => ({
    setDarkMode: () => dispatch(setDarkMode())
})

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    return {currentState: currentState}
}



export default connect(mapStateToProps, mapDispatchToProps)(DarkMode);
