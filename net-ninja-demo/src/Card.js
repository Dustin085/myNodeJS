function Card({ data, deleteCardHandler }) {
    const { id, title, content } = data;
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <p className="para">{content}</p>
            <button type="button" className="pri-btn card-info-change-btn" onClick={() => { deleteCardHandler(id) }}>Delete this Card</button>
        </div>
    );
}

export default Card;