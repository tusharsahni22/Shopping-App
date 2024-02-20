import React, { useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 100%;
height: 225px;
object-fit: cover;
border-radius: 25px;
`;
const Wrapper = styled.div`
display: grid;
grid-template-columns: auto;
`;


function ImageUpload(props) {
    const [previewSrc, setPreviewSrc] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Create a URL representing the file
        setPreviewSrc(URL.createObjectURL(file));
        props.setMainPicture([...props.mainPicture,file]);
    };

    return (
        <Wrapper>
            {previewSrc && <Image src={previewSrc} alt="Preview" />}
            <input type="file" onChange={handleFileChange} />
        </Wrapper>
    );
}

export default ImageUpload;