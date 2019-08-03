# Twitch Mockup
Twitch Mockup App with React, Redux, RTMP Server, RESTful API

Steps:

**To Properly Start React App in the Browser:

1. Please clone or download this repo on to your desktop
2. Open up 3 terminal windows and CD into apiServer, reactClient and rtmpServer directories seperately
3. Run NPM Install to in each of the terminal windows pointing to those directories { to download npm modules and dependencies (Package.json files are included in repo)}
4. Run NPM Start in each of the terminal windows pointing to those directories

**To Enable Livestream Functionality:

5. Download OBS Studio from - https://obsproject.com/download on to your device.
6. Open OBS Studio and go to File -> Settings -> Stream. In *Service*, select "Custom...", in *Server*, type "rtmp://localhost/live" and in *Stream Key* type "1".
7. Go back to main OBS Screen and in *Sources*, press + and *Create New* Video Capture Device from dropdown


**To Create Your Livestream:

8. Navigate to your React App Client and Press *Create Stream* Button. Enter Title and Description and hit *Submit*
9. You will be navigated back to the Homepage and should see the title and description of the stream you just submitted. The tile will be hyperlinked (and is blue) -> Click on the title.
10. You will now be navigated to the Video Player


**To Start Livestreaming :)

 Finally, when you have completed all these steps and when you have configured OBS:
 
 11. click *Start Streaming* in OBS Studio and watch your livestream in your React App Client in the browser!
 12. You will see your livestream from OBS in the Video Player that is being displayed in the browser when you hit play!
