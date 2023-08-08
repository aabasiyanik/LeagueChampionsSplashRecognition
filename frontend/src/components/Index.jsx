import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CowbellImage from './icons/cowbell.gif';

function Index() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedImage) {
            alert("No image selected");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedImage);

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setPredictionResult(data);
                navigate('/results');
            } else {
                console.error("Prediction request failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <h1>Image Classifier</h1>
            <img src={CowbellImage} alt="Cowbell" className="left-fixed-image" />

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <label htmlFor="imageInput" className="image-button">
                    Choose Image
                    <input
                        type="file"
                        name="image"
                        id="imageInput"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </label>
                <button type="submit">Predict</button>
            </form>

            {predictionResult && (
                <div>
                    <p>Champion: {predictionResult.class_name}</p>
                    <p>Confidence Score: {predictionResult.confidence_score.toFixed(2)}%</p>
                </div>
            )}

            <div className="predict-btn-container">
                <button
                    type="button"
                    className="predict-btn-link"
                    id="styledPredictBtn"
                    onClick={() => {
                        var audio = document.getElementById('audio');
                        audio.play();
                    }}
                >
                    <div className="predict-btn-circle">
                        <p>→</p>
                    </div>
                    <div className="predict-btn-rectangle">
                        Predict
                    </div>
                </button>
            </div>

            <div>
                <button onClick={() => window.location.href = '/start_over'}>Start Over</button>
            </div>

            <audio id="audio" controls style={{ display: 'none' }}>
                <source src="/find_match_sound.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Index;
