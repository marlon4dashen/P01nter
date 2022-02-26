// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
async function getLabels(imagePath) {
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = imagePath;

    // Performs label detection on the local file
    const [label_result] = await client.labelDetection(fileName);
    const labels = label_result.labelAnnotations;
    console.log('Labels:');
    const labelarr= []
    labels.forEach(label => labelarr.push(label.description));


    const [landmark_result] = await client.landmarkDetection(fileName);
    const landmarks = landmark_result.landmarkAnnotations;
    console.log('Landmarks:');
    var landmark = ''
    if (landmarks.length > 0){
        labelarr.push(landmarks[0].description)
    }
    landmarks.forEach(landmark => console.log(landmark.description));

    return labelarr
}

module.exports = getLabels
