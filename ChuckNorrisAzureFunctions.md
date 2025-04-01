# Chuck Norris Jokes via WhatsApp with Azure Functions & Twilio

This project demonstrates how to create an Azure Function using .NET 8 that fetches a random Chuck Norris joke from an external API and delivers it via Twilio's WhatsApp sandbox.
By using Ngrok we can use our localhost to fetch it from twilios endpoint online without using azure resources or deploying it to azure. Do not USE NGROK for anything else than testing locally as it exposes your IP publicly!
## Table of Contents
- [Prerequisites](##prerequisites)
- [Project Setup](#project-setup)
- [Local Testing with ngrok](#local-testing-with-ngrok)
- [Configuring Twilio WhatsApp Sandbox](#configuring-twilio-whatsapp-sandbox)


## Prerequisites

- **Twilio Account:** [Sign up for Twilio](https://www.twilio.com/try-twilio)
- **Twilio WhatsApp Sandbox:** [Setup instructions](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Flearn%3Fx-target-region%3Dus1)
- **ngrok:** [Download ngrok](https://ngrok.com/download)

## Project-Setup

1. **Initialize the Azure Functions Project:**

   Open a terminal and run:
   ```bash
   git clone https://github.com/DersimAbbas/AzureFunctionDemo

2. **Locate the project folder and open the project with visual studio.**
3. **Add a new JSON file to the project or copy your existing one "host.json".Either way your new JSON file should be called: local.settings.json**
4. in your local.settings.json file add this code:
6. ```yaml
   {
         
       "IsEncrypted": false,
       "Values": {
           "AzureWebJobsStorage": "",
           "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
       }

   }
   

7. **Install Twilio package via nuget package manager console or the solution, "Twilio" the one with the most downloads (60m+ downloads).**
8. **Follow the instructions to create A Twilio Account and set up your phone number in the Whatsapp Sandbox. On Twilios Website.**
You can find WhatsApp sandbox after creating an account here:
<img src="https://i.gyazo.com/d3576a6736f2cb011653774f788509e2.png" alt="Screenshot Description">

9. **After your account setup with Twilio now its time to download ngrok for local testing without creating azure resources.**

## Ngrok Download and setup.
1. **Create a free account on Ngroks website.**
2. **Download Ngrok from here [Link](https://ngrok.com/downloads/windows?tab=download)**
3. **drag and drop your Ngrok.exe file inside the project next to WhatsAppFunction.sln**
4. it should look something like this > <img src="https://i.gyazo.com/e6e4da876cbeafcd3f533a7899525136.png" alt="Screenshot Description">

### Configing Ngrok.
1. **open a new terminal CMD. find your project directory and where the ngrok.exe is located at**
2. You can locate it by typing:
3. ```bash
   cd ( to your project directory path)
5. or you can just copy The project Directory path from Visual Studios Solution explorer.
6. for my PC this is how it looks like:
   ```bash
    c:users\myname> cd source
    c:users\myname\source> cd repos
    c:users\myname\source\repos> cd whatsAppFunction
    c:users\myname\source\repos\WhatsAppFunction>
   in here now you have to add auth token by copying the command from the download page assuming you've created an account on their website. Paste it in.
      this is the command:
    ngrok config add-authtoken <your secret token from ngrok AFTER creating an account>

### start your Azure Functions Project and then in  the other terminal where you added your Auth Token
  **type:**    
 
    ngrok http (the numbers from your localhost).
    when you start Azure functions e.g, if its running on localhost:7582
    then you should type it like this: ngrok http 7582

6. And now after the command your terminal should look like this once ngrok is running:
<img src="https://i.gyazo.com/90447f6e26262bf815ed4f3311fba3a8.png" alt="Screenshot Description">
      
## Running the project and adding the endpoint to Twilio.
1. **Head to twilios WhatsApp sandbox.**
2. **connect with the QR code on sandbox before next step.**
3. **add the forwarding Ngrok http URL from the terminal. with your Functions endpoint
This his how it should look like. REMEMBER THE URL will change everytime you restart Ngrok!**
<img src="https://i.gyazo.com/eaa6e72e7b6e413f538fc1902b19d3a7.png" alt="Screenshot Description">

2.**Try it out by sending a message to Twilio in WhatsApp. Now it should respond with a chuck norris Joke!**

<img src="https://i.gyazo.com/bc1303fce537affddc35c669bf85ef86.png" alt="Screenshot Description">

# Conclusion
**By following these steps, you'll have a fully functioning setup where an Azure Function fetches a Chuck Norris joke and sends it via Twilio's WhatsApp sandbox. Enjoy, and feel free to modify and extend this project!**
