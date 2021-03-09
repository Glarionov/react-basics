import React from 'react'

class Ifer extends React.Component {
    render () {
        return (
            <div>
                <p>
                    Мои любимые числа:
                </p>
                {this.state.loveNumbers.map(
                    (number) =>
                        <div key={number}>Я люблю число {number}</div>
                )}
                <p>Мои любимые животные:</p>
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

    onChangeInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

}

export default Ifer;
