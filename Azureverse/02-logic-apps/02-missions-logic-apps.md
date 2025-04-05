# Missions: Logic Apps

Part of the **Azureverse** learning path – a universe of bite-sized Azure knowledge.

## Mission 1: Monday Reminder Transmission – 09:00

### Objective:

Automate a weekly message to your future self. Avoid the pitfalls of forgetfulness by scheduling a Monday morning
email—because in the Azureverse, even a simple reminder is mission-worthy.

### Steps to deploy:

1. Trigger: Recurrence – every Monday at 09:00 hours.
2. Action: Send an email via Outlook containing a reminder of your choice (or a cryptic message from your time-traveling
   self).

[🎥 Watch the walkthrough on YouTube.](https://youtu.be/XOjbjpVXDaE)

## Mission 2: Chuck Norris API Beacon

### Objective:

Connect to a public API and inject some humor into your system. Every day, retrieve and transmit a random Chuck Norris
fact via email. Useless? Perhaps. Entertaining? Absolutely.

### Steps to deploy:

1. Trigger: Recurrence – runs once daily (or whenever the AI wakes up).
2. Action: HTTP GET – call https://api.chucknorris.io/jokes/random.
3. Action: Send an email via Outlook containing the joke payload. Congratulations, you've built a comedy beacon.

[🎥 Watch the walkthrough on YouTube.](https://youtu.be/r3TfMQ9YLO0)
