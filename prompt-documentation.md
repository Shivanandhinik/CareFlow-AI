# CareFlow AI — AI & Prompt Engineering Documentation

## 1. Project Overview

**Project Name:** CareFlow AI  
**Project Area:** Healthcare  
**Selected Area:** Website Development / Innovation & New Ideas

CareFlow AI is a healthcare-support prototype designed to help users understand and organize common health concerns through a simple conversational interface.

The system is designed for educational and supportive purposes. It does not provide medical diagnosis, prescribe medication, or replace professional medical advice.

---

## 2. AI Tools Used

AI tools were used during the development process for:

- Generating and refining healthcare conversation flows
- Designing prompt structures
- Improving the clarity and safety of responses
- Generating and refining HTML, CSS, and JavaScript
- Identifying usability issues and improving the interface
- Iteratively testing different response structures

The development process involved reviewing AI-generated suggestions, identifying limitations, and refining the prompts and implementation based on the desired user experience.

---

# 3. Prompt Engineering Process

## Prompt 1 — Healthcare Assistant

### Initial Prompt

> Help the user with their headache.

### Problem Identified

The prompt was too broad. It did not specify:

- The role of the assistant
- What information should be collected
- How the conversation should be structured
- Safety boundaries
- When the user should be directed to professional care

### Revised Prompt

> Act as a supportive healthcare information assistant. Ask concise follow-up questions about the user's symptoms, duration, and severity. Provide general educational guidance without diagnosing medical conditions or prescribing medication. If the user describes severe, sudden, or potentially concerning symptoms, recommend seeking appropriate professional or urgent medical care.

### Improvement

The revised prompt provides:

- A clearly defined assistant role
- Structured follow-up questions
- Safety boundaries
- Appropriate escalation guidance
- A more consistent conversational experience

---

# 4. Prompt 2 — Symptom Summary

### Initial Prompt

> Create a summary of the user's symptoms.

### Problem Identified

The result could be unstructured and might omit important information.

### Revised Prompt

> Create a concise structured summary of the user's reported health concern. Include the main concern, duration, severity, other reported symptoms, and relevant factors that improve or worsen the symptoms. Only summarize information provided by the user and do not add a diagnosis or assumptions.

### Improvement

The revised prompt creates a more useful structure for communicating health concerns to a healthcare professional while avoiding unsupported assumptions.

---

# 5. Prompt 3 — Healthcare Safety

### Initial Prompt

> Give helpful health advice to the user.

### Problem Identified

The instruction did not establish appropriate healthcare safety boundaries.

### Revised Prompt

> Provide general educational healthcare information based only on the symptoms described by the user. Do not diagnose conditions, prescribe medication, or present information as a substitute for professional medical advice. When symptoms appear severe, sudden, or potentially urgent, clearly encourage the user to seek appropriate medical attention.

### Improvement

The revised prompt focuses the assistant on:

- Educational information
- Avoiding diagnosis
- Avoiding prescriptions
- Appropriate escalation
- Clear communication of limitations

---

# 6. Prompt 4 — Healthcare FAQ

### Initial Prompt

> Generate healthcare FAQs.

### Problem Identified

A generic FAQ could produce questions that are too broad or unsuitable for the application's purpose.

### Revised Prompt

> Generate concise FAQs for a general healthcare-support website. Focus on common user questions, safe educational information, when professional medical advice may be appropriate, and the limitations of an AI healthcare assistant. Keep each answer simple and understandable for a general audience.

### Improvement

The revised prompt produces FAQ content that is more relevant to the application's purpose and safety requirements.

---

# 7. Prompt 5 — User Interface Development

### Initial Prompt

> Create a healthcare website.

### Problem Identified

The instruction did not provide enough information about:

- Target users
- Required features
- Visual style
- Layout
- Responsive behavior
- Healthcare safety messaging

### Revised Prompt

> Create a professional responsive healthcare-support website called CareFlow AI. Include a navigation bar, hero section, interactive healthcare assistant, feature cards for AI Health Assistant, Symptom Summary, Healthcare FAQ, and Appointment Request, along with a healthcare safety disclaimer. Use a clean modern healthcare visual style, responsive layouts, accessible buttons, clear typography, and simple user interactions. Keep the interface professional and easy to understand.

### Improvement

The revised prompt provided clearer requirements and resulted in a more structured and usable interface.

---

# 8. Prompt Iteration Approach

The overall prompt engineering process followed this cycle:

**Define → Generate → Review → Identify Problems → Refine → Test → Implement**

### Example

**Initial requirement:**

> Help users with headaches.

↓

**AI-generated approach:**

General headache response.

↓

**Issue identified:**

The response lacked structured questions and safety boundaries.

↓

**Prompt refinement:**

Define the assistant role, ask about severity and duration, provide educational information, and include escalation guidance.

↓

**Final implementation:**

An interactive flow asks the user about headache severity and duration before presenting general educational guidance.

---

# 9. Development Challenge

During development, the initial live AI API integration became unavailable because of API usage/quota limitations.

Instead of making the assessment dependent on an unavailable external API, the prototype was redesigned with a controlled demonstration-response layer.

This allowed the project to demonstrate the intended:

- Conversation flow
- Prompt-designed behavior
- Follow-up questions
- Safety handling
- User experience

without requiring a paid API connection for the assessment demonstration.

---

# 10. Final Outcome

The final CareFlow AI prototype demonstrates an AI-assisted healthcare-support experience with:

- Interactive AI Health Assistant
- Symptom Summary workflow
- Healthcare FAQ
- Appointment Request interface
- Healthcare safety guidance
- Responsive professional UI
- Structured conversational flows
- Prompt engineering documentation
- Iterative AI-assisted development

The prototype focuses on demonstrating practical AI usage, prompt refinement, problem-solving, and technical execution rather than simply describing what AI could do.

---

# 11. Safety Statement

CareFlow AI is an educational healthcare-support prototype.

It is not intended to:

- Diagnose medical conditions
- Prescribe medication
- Replace a doctor or qualified healthcare professional
- Provide emergency medical treatment

Users with severe, sudden, or potentially urgent symptoms should seek appropriate professional or emergency medical assistance.