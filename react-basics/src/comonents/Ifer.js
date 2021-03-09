import React from 'react'

class Ifer extends React.Component {
    render () {
        return (
            <div>
                <p>
                    Введите любой текст:
                </p>
                <input type="text" name="myText" onChange={this.onChangeInput.bind(this)} value={this.state.myText}/>
                {this.state.myText && <div>Вы ввели текст <b>{this.state.myText}</b></div>}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            myText: ''
        };
    }

    onChangeInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

}

export default Ifer;
