#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import speech_recognition as sr


# obtain audio from the microphone
r = sr.Recognizer()
with sr.Microphone() as source:
	#print("Say something!")
	audio = r.listen(source)

# recognize speech using IBM Speech to Text
IBM_USERNAME = 'f0bdac3c-ec92-4c5a-aa16-5dded6a3cd11'  # IBM Speech to Text usernames are strings of the form XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
IBM_PASSWORD = 'IRowbqeW7aXM'  # IBM Speech to Text passwords are mixed-case alphanumeric strings
try:
    print(r.recognize_ibm(audio, username=IBM_USERNAME, password=IBM_PASSWORD))
except sr.UnknownValueError:
    print("IBM Speech to Text could not understand audio")
except sr.RequestError as e:
	print("Could not request results from IBM Speech to Text service; {0}".format(e))
