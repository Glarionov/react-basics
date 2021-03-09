import React from 'react'

/**
 * Показ списка
 *
 * Подробнее об этом почитать здесь
 * https://learn-reactjs.ru/basics/lists-and-keys
 */
class Cycle extends React.Component {
    render () {
        return (
            <div>
                <p>
                    Мои любимые числа:
                </p>
                {/**
                    Так можно отобразить список, записанный с помощью [квадратных скобок]
                */}
                {this.state.loveNumbers.map(
                    (number) =>
                        <div key={number}>Я люблю число {number}</div>
                )}
                <p>Мои любимые животные:</p>
                {/**
                    Так можно отображить список, записанный с помощью {фигурных скобок}
                 */}
                {Object.entries(this.state.animals).map(([index, animal]) => (
                    <div key={index}>
                        {animal.name}
                    </div>
                ))}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            loveNumbers: [100, 777, 12],
            animals: {
                1: {'name': 'Кошка'},
                10: {'name': 'Собака'},
                12: {'name': 'Лошадь'},
            }
        };
    }
}

export default Cycle;
