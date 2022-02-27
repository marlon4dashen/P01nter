// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
async function getLabels(imagePath) {
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    const fileName = imagePath;
    const labelarr= []

    // Detect similar images on the web to a local file
    const [result] = await client.webDetection(fileName);
    const webDetection = result.webDetection;

    if (webDetection.webEntities.length) {
    console.log(`Web entities found: ${webDetection.webEntities.length}`);
    webDetection.webEntities.forEach(webEntity => {
        console.log(`  Description: ${webEntity.description}`);
        console.log(`  Score: ${webEntity.score}`);
    });
    }
    var index2 = (webDetection.webEntities.length > 3) ? 3 : webDetection.webEntities.length;
    const topWebEntities = webDetection.webEntities.slice(0, index2);
    topWebEntities.forEach(topWebEntity => labelarr.push(topWebEntity.description));


    // Performs label detection on the local file
    const [label_result] = await client.labelDetection(fileName);
    const labels = label_result.labelAnnotations;
    console.log('Labels:');
    const index = 3
    // var index = (labels.length > 3) ? 3 : labels.length;
    const topLabels = labels.slice(0, index);
    topLabels.forEach(topLabel => labelarr.push(topLabel.description));


    const [landmark_result] = await client.landmarkDetection(fileName);
    const landmarks = landmark_result.landmarkAnnotations;
    console.log('Landmarks:');
    if (landmarks.length > 0){
        labelarr.push(landmarks[0].description)
    }
    landmarks.forEach(landmark => console.log(landmark.description));

    if (webDetection.bestGuessLabels.length) {
    console.log(
        `Best guess labels found: ${webDetection.bestGuessLabels.length}`
    );
    webDetection.bestGuessLabels.forEach(label => {
        console.log(`  Label: ${label.label}`);
    });
    }
    return labelarr
}

module.exports = getLabels
