 import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

const Score = ({ route }: any) => {
  const { score } = route.params;

  
  const backgroundImgUrl = 'https://i.postimg.cc/13scvF8p/Android-Large-94.png';
  const titleImgUrl = 'https://i.postimg.cc/GpHCsHxC/Scores-1.png'; 

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Score</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-image: url('${backgroundImgUrl}');
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
              text-align: center;
              margin: 0;
              height: 80vh;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white; /* Set all text to white by default */
          }
          .container {
              display: inline-block;
              text-align: center;
          }
          .title-image {
              width: 40%; /* Decreased the width of the title image */
              height: auto;
          }
          .score {
              font-size: 60px;
              font-weight: bold;
              color: #4BBCFF; /* Changed the score color to blue */
              margin: 0;
          }
          .message {
              font-size: 25px;
              color: white;
              margin: 30px 0;
              white-space: pre-wrap; /* Allows for line breaks in the text */
          }
      </style>
  </head>
  <body>
      <div class="container">
          <img src="${titleImgUrl}" alt="Scores" class="title-image">
          <div class="score">${score}</div>
          <div class="message">You need to finish all the\nlevels to get the score to\nopen the locked ones.</div>
      </div>
  </body>
  </html>
`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ html: htmlContent }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            color="#0000ff"
            size="large"
            style={StyleSheet.absoluteFillObject}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Score;
