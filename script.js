// ========================================
// CareFlow AI - Interactive Demo Mode
// No API / No Payment Required
// ========================================


// ----------------------------------------
// Start Assistant
// ----------------------------------------

function startAssistant() {

    const assistant = document.querySelector(".hero-card");

    if (assistant) {

        assistant.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {

            const input = document.getElementById("heroInput");

            if (input) {
                input.focus();
            }

        }, 600);
    }
}


// ----------------------------------------
// Scroll to Features
// ----------------------------------------

function scrollToFeatures() {

    const features = document.getElementById("features");

    if (features) {
        features.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ----------------------------------------
// Quick Options
// ----------------------------------------

function selectOption(option) {

    const input = document.getElementById("heroInput");

    if (!input) return;


    if (option === "Health Information") {

        input.value =
            "I want general information about a health topic.";

    }

    else if (option === "Symptom Summary") {

        input.value =
            "Help me create a structured symptom summary.";

    }

    else if (option === "Healthcare FAQ") {

        input.value =
            "What are some common healthcare questions?";

    }

    input.focus();
}


// ----------------------------------------
// Send Question
// ----------------------------------------

function sendQuestion() {

    const input = document.getElementById("heroInput");

    if (!input) return;

    const question = input.value.trim();

    if (question === "") {

        alert("Please enter a health-related question.");

        return;
    }

    showAssistantResponse(question);

    input.value = "";
}


// ----------------------------------------
// Add User Message
// ----------------------------------------

function addUserMessage(text) {

    const chatArea = document.querySelector(".chat-area");

    const message = document.createElement("div");

    message.className = "chat-message user-message";

    message.textContent = text;

    chatArea.appendChild(message);

    chatArea.scrollTop = chatArea.scrollHeight;
}


// ----------------------------------------
// Add AI Message
// ----------------------------------------

function addAIMessage(html) {

    const chatArea = document.querySelector(".chat-area");

    const message = document.createElement("div");

    message.className = "chat-message ai-message";

    message.innerHTML = html;

    chatArea.appendChild(message);

    chatArea.scrollTop = chatArea.scrollHeight;

    return message;
}


// ----------------------------------------
// Thinking Effect
// ----------------------------------------

function showThinking(callback) {

    const chatArea = document.querySelector(".chat-area");

    const thinking = document.createElement("div");

    thinking.className = "chat-message ai-message";

    thinking.textContent = "CareFlow AI is thinking...";

    chatArea.appendChild(thinking);

    chatArea.scrollTop = chatArea.scrollHeight;


    setTimeout(() => {

        thinking.remove();

        callback();

    }, 700);
}


// ----------------------------------------
// Create Multiple Choice Buttons
// ----------------------------------------

function createChoices(choices, callback) {

    const chatArea = document.querySelector(".chat-area");

    const container = document.createElement("div");

    container.className = "careflow-choices";


    choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "choice-button";

        button.textContent = choice;

        button.onclick = () => {

            // Disable all buttons after selection

            const buttons =
                container.querySelectorAll("button");

            buttons.forEach(btn => {

                btn.disabled = true;

            });


            // Show selected answer

            addUserMessage(choice);


            // Generate next response

            showThinking(() => {

                callback(choice);

            });

        };

        container.appendChild(button);

    });


    chatArea.appendChild(container);

    chatArea.scrollTop = chatArea.scrollHeight;
}


// ----------------------------------------
// HEADACHE FLOW
// ----------------------------------------

function headacheFlow() {

    addAIMessage(`
        <strong>CareFlow AI</strong><br><br>

        I can help you understand your headache better.
        Let's start with a few simple questions.

        <br><br>

        <strong>How would you describe the intensity?</strong>
    `);


    createChoices(
        [
            "🟢 Mild",
            "🟡 Moderate",
            "🟠 Severe",
            "🔴 Very severe / sudden"
        ],

        function (answer) {

            if (answer.includes("Very severe")) {

                addAIMessage(`
                    <strong>CareFlow AI</strong><br><br>

                    A sudden or extremely severe headache can
                    sometimes require urgent medical attention.

                    <br><br>

                    ⚠️ If this is the worst or most sudden
                    headache you have experienced, or if you
                    also have confusion, weakness, difficulty
                    speaking, loss of consciousness, or a
                    serious injury, please seek urgent medical
                    care.

                    <br><br>

                    🤖 <strong>AI-assisted educational response</strong>
                `);

                return;
            }


            addAIMessage(`
                <strong>CareFlow AI</strong><br><br>

                Thanks. How long have you been experiencing
                the headache?
            `);


            createChoices(
                [
                    "Less than a few hours",
                    "Since yesterday",
                    "Several days",
                    "It happens frequently"
                ],

                function () {

                    addAIMessage(`
                        <strong>CareFlow AI</strong><br><br>

                        Thanks for sharing that information.

                        <br><br>

                        Common headache triggers can include
                        stress, lack of sleep, dehydration,
                        eye strain, or skipping meals.

                        <br><br>

                        💡 <strong>General tips:</strong><br>
                        • Rest in a quiet environment.<br>
                        • Drink enough water.<br>
                        • Take regular breaks from screens.<br>
                        • Maintain regular meals and sleep.

                        <br><br>

                        ⚠️ If your headache becomes sudden and
                        extremely severe, follows a serious
                        injury, or occurs with concerning
                        symptoms such as confusion or weakness,
                        seek urgent medical attention.

                        <br><br>

                        🤖 <strong>AI-assisted educational response</strong>
                    `);
                }
            );
        }
    );
}


// ----------------------------------------
// FEVER FLOW
// ----------------------------------------

function feverFlow() {

    addAIMessage(`
        <strong>CareFlow AI</strong><br><br>

        I can help you organize some basic information
        about your fever.

        <br><br>

        <strong>How long have you had the fever?</strong>
    `);


    createChoices(
        [
            "Less than 1 day",
            "1–2 days",
            "More than 2 days",
            "Not sure"
        ],

        function () {

            addAIMessage(`
                <strong>CareFlow AI</strong><br><br>

                Thank you. Are you experiencing any other
                symptoms?

            `);


            createChoices(
                [
                    "Cough / cold",
                    "Body pain / tiredness",
                    "Headache",
                    "No other major symptoms"
                ],

                function () {

                    addAIMessage(`
                        <strong>CareFlow AI</strong><br><br>

                        Fever can occur when the body is
                        responding to an infection or another
                        condition.

                        <br><br>

                        💡 <strong>General tips:</strong><br>
                        • Get adequate rest.<br>
                        • Drink enough fluids.<br>
                        • Monitor how your symptoms change.

                        <br><br>

                        ⚠️ Seek medical attention if symptoms
                        are severe, persistent, or accompanied
                        by difficulty breathing, confusion,
                        seizures, or severe weakness.

                        <br><br>

                        🤖 <strong>AI-assisted educational response</strong>
                    `);
                }
            );
        }
    );
}


// ----------------------------------------
// COUGH FLOW
// ----------------------------------------

function coughFlow() {

    addAIMessage(`
        <strong>CareFlow AI</strong><br><br>

        Let's understand your cough a little better.

        <br><br>

        <strong>What type of cough are you experiencing?</strong>
    `);


    createChoices(
        [
            "Dry cough",
            "Cough with mucus",
            "Occasional cough",
            "Frequent cough"
        ],

        function () {

            addAIMessage(`
                <strong>CareFlow AI</strong><br><br>

                Coughs can occur for several reasons, including
                common respiratory infections or irritation.

                <br><br>

                💡 <strong>General tips:</strong><br>
                • Stay hydrated.<br>
                • Get adequate rest.<br>
                • Avoid smoke and other irritants.

                <br><br>

                ⚠️ If you experience difficulty breathing,
                chest pain, coughing up blood, or severe
                worsening symptoms, seek medical attention.

                <br><br>

                🤖 <strong>AI-assisted educational response</strong>
            `);
        }
    );
}


// ----------------------------------------
// SYMPTOM SUMMARY FLOW
// ----------------------------------------

function symptomSummaryFlow() {

    addAIMessage(`
        <strong>CareFlow AI</strong><br><br>

        I can help organize your symptoms into a simple
        summary for a healthcare conversation.

        <br><br>

        <strong>What is your main concern?</strong>
    `);


    createChoices(
        [
            "Pain",
            "Fever",
            "Cough / cold",
            "Other"
        ],

        function (answer) {

            addAIMessage(`
                <strong>CareFlow AI</strong><br><br>

                Based on your selection, here's a simple
                structure you can use:

                <br><br>

                📝 <strong>Symptom Summary</strong><br><br>

                <strong>Main concern:</strong> ${answer}<br>
                <strong>Duration:</strong> To be provided<br>
                <strong>Severity:</strong> To be provided<br>
                <strong>Other symptoms:</strong> To be provided<br>
                <strong>What makes it better/worse:</strong>
                To be provided

                <br><br>

                This information can help you communicate
                clearly with a healthcare professional.

                <br><br>

                ⚠️ This summary is for organization only and
                is not a medical diagnosis.

                <br><br>

                🤖 <strong>AI-assisted educational response</strong>
            `);
        }
    );
}


// ----------------------------------------
// General Demo Response
// ----------------------------------------

function generalResponse(question) {

    const text = question.toLowerCase();


    if (
        text.includes("headache") ||
        text.includes("head pain") ||
        text.includes("migraine")
    ) {

        headacheFlow();

        return true;
    }


    if (
        text.includes("fever") ||
        text.includes("temperature")
    ) {

        feverFlow();

        return true;
    }


    if (
        text.includes("cough") ||
        text.includes("cold") ||
        text.includes("sneeze")
    ) {

        coughFlow();

        return true;
    }


    if (
        text.includes("symptom summary") ||
        text.includes("summarize my symptoms")
    ) {

        symptomSummaryFlow();

        return true;
    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hii") ||
        text.includes("hey")
    ) {

        addAIMessage(`
            <strong>CareFlow AI</strong><br><br>

            👋 Hello! I'm CareFlow AI.

            <br><br>

            How can I help you today?

            <br><br>

            🩺 You can ask about a symptom,
            create a symptom summary, or explore
            healthcare FAQs.

            <br><br>

            🤖 <strong>AI-assisted educational response</strong>
        `);

        return true;
    }


    return false;
}


// ----------------------------------------
// Main Assistant Response
// ----------------------------------------

function showAssistantResponse(question) {

    addUserMessage(question);


    showThinking(() => {

        const handled =
            generalResponse(question);


        if (!handled) {

            addAIMessage(`
                <strong>CareFlow AI</strong><br><br>

                I can help you explore general healthcare
                information.

                <br><br>

                Try asking about:

                <br><br>

                🩺 Headache<br>
                🤒 Fever<br>
                🤧 Cough or cold<br>
                📝 Symptom summary<br>
                📚 Healthcare FAQs

                <br><br>

                ⚠️ CareFlow AI provides educational
                information and does not replace advice
                from a qualified healthcare professional.

                <br><br>

                🤖 <strong>AI-assisted educational response</strong>
            `);
        }

    });
}


// ----------------------------------------
// Feature Cards
// ----------------------------------------

function openFeature(feature) {

    const input =
        document.getElementById("heroInput");

    if (!input) return;


    if (feature === "Symptom Summary") {

        input.value =
            "Help me create a structured symptom summary.";

        startAssistant();

    }

    else if (feature === "Healthcare FAQ") {

        input.value =
            "What are some common healthcare questions?";

        startAssistant();

    }

    else if (feature === "Appointment Request") {

        alert(
            "Appointment Request\n\n" +
            "This demo feature helps organize basic " +
            "appointment details such as name, preferred " +
            "date, time, and reason for visit."
        );
    }
}


// ----------------------------------------
// Enter Key
// ----------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById("heroInput");

        if (!input) return;


        input.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendQuestion();

                }
            }
        );

    }
);

/* ========================================
   CAREFLOW AI - FEATURE PANELS
======================================== */

function openFeaturePanel(feature) {

    const modal = document.getElementById("featureModal");
    const content = document.getElementById("featurePanelContent");

    let html = "";

    /* AI HEALTH ASSISTANT */
    if (feature === "assistant") {

        html = `
            <div class="feature-panel">

                <div class="feature-panel-icon">🩺</div>

                <h2>AI Health Assistant</h2>

                <p>
                    An interactive assistant that guides users through
                    common health concerns using simple questions and
                    educational responses.
                </p>

                <div class="panel-box">
                    <h4>How it works</h4>

                    <p>
                        The assistant asks relevant follow-up questions,
                        understands the user's concern, and provides
                        general educational guidance.
                    </p>
                </div>

                <div class="panel-box">
                    <h4>Example</h4>

                    <p>
                        User → "I have a headache"<br>
                        Assistant → Asks severity and duration<br>
                        Assistant → Provides general guidance
                    </p>
                </div>

                <button class="panel-button"
                    onclick="closeFeaturePanel(); startAssistant();">
                    Start Assistant
                </button>

            </div>
        `;
    }


    /* SYMPTOM SUMMARY */
    else if (feature === "summary") {

        html = `
            <div class="feature-panel">

                <div class="feature-panel-icon">📝</div>

                <h2>Symptom Summary</h2>

                <p>
                    Create a structured summary of a user's health concern
                    to make communication with a healthcare professional
                    easier.
                </p>

                <div class="panel-box">

                    <h4>Information captured</h4>

                    <p>
                        • Main concern<br>
                        • Duration<br>
                        • Severity<br>
                        • Other symptoms<br>
                        • Factors that improve or worsen symptoms
                    </p>

                </div>

                <div class="panel-box">

                    <h4>Purpose</h4>

                    <p>
                        This feature organizes information for communication
                        and does not provide a medical diagnosis.
                    </p>

                </div>

                <button class="panel-button"
                    onclick="closeFeaturePanel(); symptomSummaryFlow();">
                    Create Summary
                </button>

            </div>
        `;
    }


    /* HEALTHCARE FAQ */
    else if (feature === "faq") {

        html = `
            <div class="feature-panel">

                <div class="feature-panel-icon">📚</div>

                <h2>Healthcare FAQ</h2>

                <p>
                    Quickly explore answers to common healthcare questions.
                </p>

                <div class="faq-item">

                    <button class="faq-question"
                        onclick="toggleFAQ(this)">
                        When should I seek urgent medical help?
                    </button>

                    <div class="faq-answer">
                        Seek urgent medical attention for severe or sudden
                        symptoms, difficulty breathing, loss of consciousness,
                        or other serious warning signs.
                    </div>

                </div>

                <div class="faq-item">

                    <button class="faq-question"
                        onclick="toggleFAQ(this)">
                        Can CareFlow AI diagnose a condition?
                    </button>

                    <div class="faq-answer">
                        No. CareFlow AI is designed for educational guidance
                        and information organization. It does not replace
                        professional medical evaluation.
                    </div>

                </div>

                <div class="faq-item">

                    <button class="faq-question"
                        onclick="toggleFAQ(this)">
                        Can I use it instead of a doctor?
                    </button>

                    <div class="faq-answer">
                        No. The assistant is a supportive information tool.
                        Users should consult a qualified healthcare professional
                        for diagnosis and treatment.
                    </div>

                </div>

            </div>
        `;
    }


    /* APPOINTMENT REQUEST */
    else if (feature === "appointment") {

        html = `
            <div class="feature-panel">

                <div class="feature-panel-icon">📅</div>

                <h2>Appointment Request</h2>

                <p>
                    Prepare basic appointment information before contacting
                    a healthcare professional.
                </p>

                <form class="appointment-form"
                    onsubmit="submitAppointment(event)">

                    <input
                        type="text"
                        id="patientName"
                        placeholder="Your name"
                        required>

                    <input
                        type="text"
                        id="appointmentConcern"
                        placeholder="Reason for appointment"
                        required>

                    <select id="appointmentType" required>

                        <option value="">
                            Select appointment type
                        </option>

                        <option>
                            General Consultation
                        </option>

                        <option>
                            Follow-up
                        </option>

                        <option>
                            Specialist Consultation
                        </option>

                    </select>

                    <button class="panel-button" type="submit">
                        Submit Request
                    </button>

                </form>

            </div>
        `;
    }


    content.innerHTML = html;

    modal.classList.add("active");
}


/* CLOSE MODAL */

function closeFeaturePanel() {

    const modal = document.getElementById("featureModal");

    modal.classList.remove("active");
}


/* FAQ TOGGLE */

function toggleFAQ(button) {

    const answer = button.nextElementSibling;

    answer.classList.toggle("show");
}


/* APPOINTMENT DEMO */

function submitAppointment(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value;
    const concern = document.getElementById("appointmentConcern").value;

    alert(
        `Appointment request prepared successfully!\n\n` +
        `Name: ${name}\n` +
        `Concern: ${concern}\n\n` +
        `Demo only — no real appointment has been booked.`
    );

    closeFeaturePanel();
}


/* Close modal when clicking outside */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("featureModal");

    if (event.target === modal) {
        closeFeaturePanel();
    }

});


/* Close modal with Escape */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeFeaturePanel();
    }

});