# cordova-mobile-workshop

This repository contains the code examples used for the UL IOT summer school workshop.

# Cordova Workshop
### Step 1
Go to the node.js installer page and click on the LTS (Long term support) option.


### Step 2
Navigate to the downloads folder and double click on the downloaded file.

### Step 3
Click install.

### Step 4
Once you have successfully installed node.js you are ready to install Cordova.
On your desktop, right click and create a folder called “cordova-projects”

### Step 5
While holding the shift key, right click on the cardova-projects folder.
Click “open in command window here”

### Step 6
In the terminal, run the command
	npm install -g cordova

### Step 7
Run the command
cordova create mqtt com.app.mqtt  "MQTT App"

### Step 8
Run the command
cd mqtt

### Step 9
Run the command
	cordova platform add android

### Step 10
Download the git.exe at this link

### Step 11
Add the git.exe file to your PATH
Locate the git.exe file
	•	Right-Click on My Computer
	•	Click Advanced System Settings
	•	Click Environment Variables
	•	Then under System Variables look for the path variable and click edit
	•	Add the path to git’s bin and cmd at the end of the string
If your unsure about this step please ask for help. You can also take a look at the “workshop setup tutorial” step 25 as a reference.

### Step 12
Now that you have git installed you can run the following command.
	cordova plugin add cordova-plugin-geolocation
### Step 13
Build the project to fetch the plugin’s dependencies.

	cordova build


### Step 14
Click on the following link, it will take you to a github repository that has the starting code you need for this workshop.
https://github.com/tom-flynn1/cordova-mobile-workshop
Click on “clone or download” and then “Download zip”.

### Step 15
Locate the file in the downloads folder and unzip the contents.
Go back to the directory that your cordova app was initialized in.
It should have this structure.

Click into the “www” folder and delete both the index.html file and the index.js file in the  js directory.
Navigate back to the downloads folder where you unzipped the contents from the github repository.
Copy both the index.html file and the “js” directory and paste them into the the “www” folder of your Cordova project.
You will also need to copy the image iot-ul-logo.png to the img directory in your cordova project.

### Step 16
Run the following command
  cordova build


### Step 17
Connect your phone via usb to your desktop and run the command
cordova run android --device

Ensure your device dev enabled.


### Step 18
Once the app loads on your phone click on “get location” button.
Then click the “print location” button.
You should see longitude, latitude and a timestamp printed to the screen.




# Part 2: MQTT
### Step 1
Using the same project folder as before
Run the command
cordova plugin add cordova-plugin-mqtt

### Step 2
Replace the index.html and index.js files with the ones found in “part 2” of the github repository you downloaded.


### Step 3
run the command
  cordova run android --device


### Step 4
When the app loads, type into the following fields
 “url” -> tcp://test.mosquitto.org
“Port” -> 1883
“Client-id” -> your name


### Step 5
Hit the connect button and then scroll down to the bottom of the page to see if you get a “successful connection” message.
If your not able to connect, make sure you “tcp://” does not have an uppercase T like this “Tcp://”

### Step 6
Under the “subscribe” button enter your name, this is the topic you will be subscribing to.

### Step 7
Under the “publish” button, enter some text and then hit the button to send a message to the “your name” topic.
You should see the received message at the bottom of the page.


# Part 3: MQTT
### Step 1
Similar to “Part 2: Step 2”, replace the index.js and index.html files with the ones found in “part 3” of the github repository.

### Step 2
Hit the “get location” button, followed by the “print location” button.

### Step 3
Enter into the following fields
 “url” ->  	<local IP address of Raspberry Pi>
“Port” -> 	1883
“Client-id” ->    <your name>

Example:
192.168.0.44
1883
James
Step 4
Hit the connect button and then scroll down to the bottom of the page to see if you get a “successful connection” message.
If your not able to connect, ask for help.

### Step 5
Under the “subscribe” button enter “group-” followed by your group number
Example ->   group-4

### Step 6
Under the “publish” button, enter some text and then hit the button to send a message to the “your name” topic.
You should see the received message at the bottom of the page. The message should contain latitude, longitude and a timestamp.
