
function ProfilePicture() {
    const imageUrl = './src/assets/image.png';

    const hideElement = (e) => e.target.style.display = "none";
    

    return (
        <img onClick={(e) => hideElement(e)} src={imageUrl}/>
    )
};

export default ProfilePicture