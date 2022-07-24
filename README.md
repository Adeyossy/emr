# Electronic Medical Record Web Application
_created on September 19, 2021 08:46 PM_

![Patient Overview](https://github.com/Adeyossy/emr/blob/main/Dashboard-3.jpg)

## Overview
This is an electronic medical record web app. An electronic medical record system is an integrated application that allows activity of a healthcare facility to be carried out and recorded in a digital format afforded by technology. It encompasses digitizing the records of a patient, tracking payments, synchronizing investigations and management across individuals in a team and different specialties.

This EMR is designed to be simple, intuitive (not letting the user waste time on figuring out how to use the app) and aethetically pleasing to the eye. It attempts to prove that increasing complexity in functionality does not have to lead to a complicated user interface.

## Technical Overview
This is a web application based on React, PouchDB and Cloudant. It uses Bootstrap and Bootstrap fonts. It is offline first and syncs when there is internet connection.
This project **does not** use Redux or Flux but maximizes the use of Context API and composition. I read an article by Kent C. Dodds that opened my eye to the power of composition and context API - _project complexity would tell you when there is an actual need for state management applications_.

## Goal of the EMR
- To be able to generate medical records just by listening to the conversation between the doctor and the patient.
- To be usable across several devices, be it smartphones, tablets or PCs.
- To be offline first and not get in the way of usage without internet connection

## Design
I designed the user interface of the application using Adobe Illustrator. I am aware of Adobe XD and Figma as the main UI/UX prototyping applications but decided to go with Adobe Illustrator because of familiarity with the application. Below is an overview page of a patient designed in the application:


![Patient Overview](/Patient-Overview.jpg)
