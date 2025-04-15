// --- Tooltip Data ---
// !! IMPORTANT !! Replace these placeholder explanations with the specific,
// detailed text from the "Further notes" columns in the Framework PDF for each question.
const questionTooltips = {
    "1.1": "Explanation: Assess if the app encourages positive health actions aligned with user well-being, considering specific goals if applicable. Document evidence like goal-setting features or alignment with public health guidance.",
    "1.2": "Explanation: Ensure the app's purpose, target users, benefits, and expected outcomes are clearly defined and understandable. Documentation should cover Population, Aim, Service/Setting, and Cost transparency.",
    "1.3": "Explanation: Consider if the app needs to address specific cultural sensitivities (Aboriginal/Torres Strait Islander, CALD, LGBTQIA+, disability, neurodiversity, trauma-informed approaches). Document how the app supports these groups if applicable, or confirm broad usability.",
    "1.4": "Explanation: Document how the app supports users in regional, rural, or remote areas. Consider offline functionality, 'catch-up' features, use of location/contextual info, and testing within these communities.",
    "1.5": "Explanation: Document how the app restricts access to potentially sensitive or harmful content (e.g., explicit images, age-restricted topics) using mechanisms like content warnings or age gates.",
    "2.1": "Explanation: Clearly state all limitations (age, internet needs, time commitment, user qualifications) and risks. If for consumer use, include a disclaimer that it doesn't replace professional advice. If for clinical use, state this clearly.",
    "2.2": "Explanation: Provide evidence of using 'safety-by-design' principles during development and operation. Document any ethical review processes undertaken regarding safety.",
    "2.3": "Explanation: If the app makes specific health claims (e.g., improves a condition), provide supporting evidence from authoritative sources (registrations, peer-reviewed studies, public health guidelines) accessible within the app or documentation. Note if evidence has been disputed.",
    "2.4": "Explanation: Ensure any health information displayed is current. Document how information is updated (e.g., continuous updates, real-time links) and confirm it has been reviewed/updated within the last 18 months.",
    "2.5": "Explanation: Document how safety/privacy breaches are managed and confirm compliance with relevant ethical codes. If AI is used, document compliance with Australian AI ethics principles.",
    "2.6": "Explanation: Document clear support channels for safety/operational issues, a process for handling safety breaches (minor/major), and conformance with relevant standards if integrating with health records (e.g., My Health Record).",
    "2.7": "Explanation: Disclose all costs (subscriptions, paywalled content, in-app purchases) upfront before requiring user commitment or sign-up.",
    "2.8": "Explanation: Transparently disclose app authorship, developer affiliations, credentials, commercial interests (investors, shareholders), conflicts of interest, and intellectual property.",
    "2.9": "Explanation: Clearly disclose any advertising or sponsorship relationships before download or upon first use. Distinguish advertising content from other app content and identify the source.",
    "3.1": "Explanation: For web apps, aim for WCAG 2.1 Level AA. Generally, ensure the app is designed for accessibility or leverages platform controls without restriction (e.g., font scaling, contrast, voice-over).",
    "3.2": "Explanation: Document evidence of usability testing with the intended target user groups and how feedback was used to improve language, navigation, and functionality relevant to that community.",
    "3.3": "Explanation: Document design considerations for users with low digital literacy or specific disability access needs (e.g., simple language, avoiding jargon, dataset bias checks if AI is used).",
    "3.4": "Explanation: Provide clear, easy-to-understand instructions. Use plain language, avoid jargon/acronyms, consider multi-language support/icons. Ensure the app alerts users to errors or out-of-range inputs.",
    "4.1": "Explanation: Document compliance with Australian Privacy Principles, including how health data is stored, where it's located, what is collected, how, and for what purpose.",
    "4.2": "Explanation: Clearly inform users how their data (device-derived or direct entry) is used in algorithms, decision-making, or automated actions affecting their health.",
    "4.3": "Explanation: Inform users about their control over data provided/accessed by the app. Document features allowing users to easily view, download, understand, and permanently erase their personal data from app records.",
    "4.4": "Explanation: Obtain explicit user consent *before* collecting personal data, especially if using it beyond the primary stated purpose (e.g., for AI model training). Document compliance with privacy/consumer laws regarding consent.",
    "4.5": "Explanation: Clearly disclose any third parties who might access/use personal info (including for AI training). Explain how users can terminate this usage if desired, and detail data retention/destruction processes.",
    "4.6": "Explanation: Document adherence to contemporary, secure standards for data storage, exchange, and messaging. Detail use of strong encryption (in transit and at rest) and conformance with standards for accessing major health records if applicable.",
    "4.7": "Explanation: If authentication is needed, document the secure methods used (e.g., MFA, passkeys, biometrics, strong passwords, session expiry) and evidence of security testing (penetration tests, scans, monitoring).",
    "5.1": "Explanation: Confirm the app is in a stable, operational state (not beta). Document compliance with relevant quality/reliability standards like ISO/TS 82304-2:2021.",
    "5.2": "Explanation: Document technical reliability across a reasonable range of platforms/devices (not just high-end). Explain how crashes/bugs are notified, reported by users, and resolved. Note any platform restrictions.",
    "5.3": "Explanation: If using AI/ML, document efforts to train models with unbiased data and specific testing carried out to detect biases relevant to potential user cultures or communities.",
    "5.4": "Explanation: If using AI/ML, document efforts to ensure its use is transparent, ethical, not harmful, compliant with consumer laws, and reviewed concerning potential unhealthy/unethical behaviour generation.",
    "5.5": "Explanation: Document evidence that the app is compatible with the range of devices, operating systems, and screen sizes expected within the target user community (e.g., via app store statements, website info).",
    "5.6": "Explanation: Document how users can obtain technical support for resolving issues and provide feedback on the product.",
    "5.7": "Explanation: Provide evidence of comprehensive, clear instructions and guides for both users and developers regarding app functionality, usage, and troubleshooting."
};

// --- Setup Tooltips on Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Setting up tooltips...");
    const questionGroups = document.querySelectorAll('.question-group');
    questionGroups.forEach(qGroup => {
        const questionId = qGroup.getAttribute('data-question-id');
        const paragraph = qGroup.querySelector('p');
        if (paragraph && questionId) { // Ensure paragraph exists
            const tooltipText = questionTooltips[questionId];
            if (tooltipText) {
                paragraph.setAttribute('title', tooltipText);
            } else {
                 // Add a default title if specific text isn't found
                 paragraph.setAttribute('title', `Tooltip explanation needed for question ${questionId}`);
                 console.warn(`Missing tooltip text for question ID: ${questionId}`);
            }
        }
    });
    console.log("Tooltips setup complete.");
});


// --- Form Submission Handler ---
document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    try {
        console.log("Assessment calculation started...");

        // --- 1. Collect General App Information ---
        const appInfo = {
            appName: document.getElementById('appName').value,
            versionNumber: document.getElementById('versionNumber').value,
            updateDate: document.getElementById('updateDate').value,
            developerName: document.getElementById('developerName').value,
            developerEmail: document.getElementById('developerEmail').value,
            developerCountry: document.getElementById('developerCountry').value,
            developerTelephone: document.getElementById('developerTelephone').value,
            q0_4_englishAccess: document.querySelector('input[name="q0.4"]:checked')?.value,
            // ** MODIFIED TO COLLECT CHECKBOX VALUES **
            appAvailability: Array.from(document.querySelectorAll('input[name="appAvailability"]:checked')).map(cb => cb.value),
            majorFocus: document.getElementById('majorFocus').value,
            intendedUsers: document.getElementById('intendedUsers').value,
        };

        // ** MODIFIED VALIDATION **
        if (!appInfo.developerCountry) { alert("Please select a Contact Country."); document.getElementById('developerCountry').focus(); return; }
        if (!appInfo.majorFocus) { alert("Please describe the Major Health Focus."); document.getElementById('majorFocus').focus(); return; }
        if (!appInfo.intendedUsers) { alert("Please select the Intended Users."); document.getElementById('intendedUsers').focus(); return; }
        // Check if the appAvailability array is empty
        if (!appInfo.appAvailability || appInfo.appAvailability.length === 0) {
            alert("Please select at least one 'App available via' platform.");
            const firstCheckbox = document.querySelector('input[name="appAvailability"]');
            if(firstCheckbox) firstCheckbox.focus();
            return;
        }
        // ** END MODIFICATION **

        console.log("General info collected.");

        // --- 2. Define Domain Structure ---
        const domains = [
             { code: "acceptability", name: "Acceptability & Culture" },
             { code: "safety", name: "Safety & Trustworthiness" },
             { code: "usability", name: "Usability & Equity" },
             { code: "privacy", name: "Privacy & Security" },
             { code: "technical", name: "Technical & Quality" }
        ];

        // --- 3. Collect Responses & Validate ---
        console.log("Collecting domain responses...");
        const allResponses = {};
        let missingSelection = false;
        document.querySelectorAll('.question-group').forEach(el => el.style.border = '1px solid #eee'); // Reset border

        domains.forEach(domain => {
            allResponses[domain.code] = {};
            const fieldset = document.querySelector(`fieldset[data-domain-code="${domain.code}"]`);
            if (!fieldset) { throw new Error(`HTML structure error: Missing fieldset for ${domain.name}`); }
            const questions = fieldset.querySelectorAll('.question-group');

            questions.forEach(qGroup => {
                const questionId = qGroup.getAttribute('data-question-id');
                const selectedRadio = qGroup.querySelector(`input[name="q${questionId}"]:checked`);
                if (selectedRadio) {
                    allResponses[domain.code][`q${questionId}`] = selectedRadio.value;
                } else {
                    qGroup.style.border = "2px solid red"; missingSelection = true;
                    allResponses[domain.code][`q${questionId}`] = null;
                    console.warn(`No response selected for question ${questionId}`);
                }
            });
        });

        if (missingSelection) {
            alert("Please answer all required questions (highlighted in red).");
            const firstMissing = document.querySelector('.question-group[style*="border: 2px solid red"]');
            if (firstMissing) firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        console.log("Domain responses collected:", allResponses);

        // --- 4. Calculate Scores ---
console.log("Calculating scores..."); // <<< KEEP THIS
const domainScores = {};
domains.forEach(domain => {
    // <<< ADD LOG HERE >>>
    console.log(`Processing domain: ${domain.name}`);

    let yesCount = 0; let applicableCount = 0;
    const responsesForDomain = allResponses[domain.code];

    // <<< ADD LOG HERE >>>
    console.log(`  Raw responses for ${domain.name}:`, responsesForDomain);

    // Check if responses exist before iterating
    if (responsesForDomain) {
         for (const questionId in responsesForDomain) {
             // Ensure the property belongs to the object itself
             if (Object.hasOwnProperty.call(responsesForDomain, questionId)) {
                 const response = responsesForDomain[questionId];

                 // <<< ADD LOG HERE >>>
                 // console.log(`    Q:${questionId}, Response:${response}`); // Optional: uncomment for very detailed logging

                 if (response === 'yes' || response === 'no') {
                     applicableCount++;
                     if (response === 'yes') yesCount++;
                 }
             }
         }
    }
    // <<< ADD LOG HERE >>>
    console.log(`  Counts for ${domain.name}: Yes=${yesCount}, Applicable=${applicableCount}`);

    domainScores[domain.code] = (applicableCount > 0) ? (yesCount / applicableCount) * 100 : "N/A";
});
console.log("Scores calculated:", domainScores); // <<< KEEP THIS

        // --- 5. Display Scores in a Table ---
        console.log("Generating score table...");
        const tableContainer = document.getElementById('scoreTableContainer');
        if (!tableContainer) { throw new Error("HTML structure error: Cannot find scoreTableContainer div"); }
        tableContainer.innerHTML = ''; // Clear previous table
        const table = document.createElement('table');
        const thead = table.createTHead(); const headerRow = thead.insertRow();
        const th1 = document.createElement('th'); th1.textContent = 'Domain'; headerRow.appendChild(th1);
        const th2 = document.createElement('th'); th2.textContent = 'Score (%)'; headerRow.appendChild(th2);
        const tbody = table.createTBody();
        domains.forEach(domain => {
            const score = domainScores[domain.code];
            const scoreText = (typeof score === 'number') ? score.toFixed(1) + '%' : 'N/A';
            const row = tbody.insertRow();
            const cell1 = row.insertCell(); cell1.textContent = domain.name;
            const cell2 = row.insertCell(); cell2.textContent = scoreText;
        });
        tableContainer.appendChild(table);
        console.log("Score table generated.");

        // --- 6. Generate Radar Diagram (COMMENTED OUT) ---
        /* ... */

        // --- 7. Prepare & Display Data for Submission (Simulated Save) ---
        const assessmentRecord = {
            metadata: { timestamp: new Date().toISOString(), assessmentVersion: "V1.3-MultiSelect" }, // Updated version
            generalInfo: appInfo, // Now includes appAvailability array
            responses: allResponses,
            scores: domainScores
        };
        console.log("Assessment Record (Simulated Save):", JSON.stringify(assessmentRecord, null, 2));
        const jsonDataOutputEl = document.getElementById('jsonDataOutput');
        if(jsonDataOutputEl) {
             jsonDataOutputEl.textContent = JSON.stringify(assessmentRecord, null, 2);
        } else { console.error("HTML structure error: Cannot find jsonDataOutput pre element"); }

        // --- 8. Show Results Section ---
        const resultsEl = document.getElementById('results');
        if (!resultsEl) { throw new Error("HTML structure error: Cannot find results div"); }
        resultsEl.style.display = 'block';
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log("Results displayed.");

    } catch (error) {
        console.error("An error occurred during assessment processing:", error);
        alert(`An error occurred: ${error.message}. Please check the console (F12) for details.`);
        const resultsEl = document.getElementById('results');
        if (resultsEl) resultsEl.style.display = 'none';
    }
}); // End of event listener