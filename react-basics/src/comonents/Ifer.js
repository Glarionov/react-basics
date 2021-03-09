import React from 'react'

/**
 * Форма для ввода текста с выводом содержимого, если оно не пустое
 *
 * Подробнее об этом почитать здесь
 * Отрисовка по условию:
 * https://learn-reactjs.ru/basics/conditional-rendering
 * (Здесь используется раздел 2.8.2)
 *
 * Работа с формами:
 * https://learn-reactjs.ru/basics/forms
 * (Здесь используется раздел 2.10.5)
 */
class Ifer extends React.Component {
    render () {
        return (
            <div>
                <p>
                    Введите любой текст:
                </p>
                {/**
                    Разберу то что ниже по частям:

                    input type="text"
                    означает, что это поле для ввода текста

                    name="myText"
                    Задаёт "имя" этого текстовго поля

                    onChange={this.onChangeInput.bind(this)}
                    Указывает, какое событие должно сработать, когда содержимое начнёт менятся (при вводе с клавиатуры, например)

                    value={this.state.myText}
                    содержимое, которое будет показано в форме
                 */}
                <input type="text" name="myText" onChange={this.onChangeInput.bind(this)} value={this.state.myText}/>
                {/**
                    Конструкция ниже означает следующее:
                    Если часть кода до символов && не пустая - то надо показать то, что идёт после &&
                    То есть если значение "this.state.myText" не пустое, то отобразится "<div>Вы ввели текст <b>{this.state.myText}</b></div>"
                 */}
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
