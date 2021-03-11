import React from 'react'

/**
 * Простой список "комментариев"
 */
class SimpleComment extends React.Component {
    render () {
        return (
            <div>
                <p>
                    Введите текст комментария
                </p>
                <p>
                    <input type="text" name="newCommentText" onChange={this.onChangeInput.bind(this)} value={this.state.newCommentText}/>
                </p>

                <button onClick={this.addComment.bind(this)}>Нажмите сюда, чтобы отправить комментарий</button>

                <p>Комментарии:</p>

                {this.state.comments.map(
                    (comment) =>
                        <div key={comment.id}>{comment.text}</div>
                )}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newCommentText: ''
        };
    }

    onChangeInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    addComment() {
        let newCommentText = this.state.newCommentText;
        let comments = this.state.comments;

        /**
         * comments.length - это количество элементов внутри массива comments.
         */
        let newCommentId =  comments.length;
        comments[newCommentId] = {text: newCommentText, newCommentId};
        this.setState({comments});
    }
}

export default SimpleComment;

