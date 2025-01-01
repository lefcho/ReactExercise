import profilePic from './assets/profile.png'

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="Card Image" />
            <h2 className="card-title">Card Name</h2>
            <p className="card-text">The description of a card must be at least a bit long.</p>
        </div>
    );
}

export default Card