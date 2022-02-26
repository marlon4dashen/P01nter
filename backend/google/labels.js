// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
async function getLabels(imagePath) {
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = imagePath;

    const keys = {}
    // Performs label detection on the local file
    const [label_result] = await client.labelDetection(fileName);
    const labels = label_result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));

    keys.labels = labels

    const [landmark_result] = await client.landmarkDetection(fileName);
    const landmarks = landmark_result.landmarkAnnotations;
    console.log('Landmarks:');
    landmarks.forEach(landmark => console.log(landmark));
    keys.landmarks = landmarks

}

module.exports = getLabels
