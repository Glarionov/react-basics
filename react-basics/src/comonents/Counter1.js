import React from 'react'

/**
 * Повышение числа при клике
 *
 * Подробнее об этом почитать здесь
 * Состояние и жизненный цикл:
 * https://learn-reactjs.ru/basics/state-and-lifecycle
 *
 * Обработка событий:
 * https://learn-reactjs.ru/basics/handling-events
 */
class Counter1 extends React.Component {
    render () {
        return (
            <div onClick={this.plus.bind(this)}>Вы кликнули <b>{this.state.counter}</b> раз</div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    plus() {
        /**
         * prevState - это объек, хранящий "предыдущее состояние", относительно которого можно делать изменения
         */
        this.setState(
            prevState => {
                return {
                    counter: prevState.counter + 1
                }
            }
        );
    }
}

export default Counter1;
