// --- Tooltip Data ---
// !! IMPORTANT !! Ensure these explanations are accurate and match the framework guidance.
const questionTooltips = {
    "1.1": `Explanation: If the App has ability to set goals that are specific, measurable and achievable with respect to positive health alignment or wellbeing the developer shall have documented evidence that the goals are specified/obvious within the App.

More generally the developer shall document evidence as to how the App will maintain or increase good health related behaviours for the expected users (e.g. by evidence from trials and/or alignment to relevant public health guidance).`, // Uses backticks `` ` ``

    "1.2": `Explanation: The developer shall have documented the Health App description and collected evidence or feedback that it is clear, comprehensive and designed to maintain or increase good health related behaviours e.g. through information about:

• Population: The intended users are clearly defined.
• Aim: The aim of the App, user benefit from the App, and the expected outcome are provided.
• Service/Setting: The App provides information about what services or functionalities it offers.
• Cost: The price of the App or services are presented appropriately. There is transparency around any costs (including in-App purchases, and “premium” product purchases).`, // Uses backticks `` ` ``

    "1.3": `Explanation: This general framework may not be suitable for considering Apps designed for specific cultures or groups. Nonetheless, developers shall consider and document whether their Apps involve any culturally relevant or culturally sensitive aspects in the context of the expected user audience.

As stated above, apps developed for, or expected to be used specifically by, Aboriginal and Torres Straits Islander communities should be assessed in alignment with appropriate cultural domain questions and any frameworks developed for those communities e.g. see footnote.

Where the intent of the App is for broad use, the developer shall still consider whether the audience might include specific communities, and if so, the developer shall document the evidence as to how the App is expected to be usable by, and if relevant, support such groups or communities.`, // Uses backticks `` ` ``

    "1.4": `Explanation: The developer shall document evidence on how the Health App will be usable by, and support the needs of regional, rural or remote areas of Australia including (for example) whether the App functions when offline, and if so whether it has a “catch-up” facility for when it is back online, and/or whether it uses location information or local contextual information to assist such communities and shall document whether it has been tested for use by such communities.`, // Backticks also work fine for single lines

    "1.5": `Explanation: The developer shall document evidence of how the App can restrict access to be sensitive including information or images of body parts or other aspects likely to be restricted by law to the viewing by minors or the non-intended recipient. For example, an App providing information on a health-related topic should not have images of body parts visible without being behind a content restriction mechanism and/or provided with suitable warnings.`, // Backticks also work fine for single lines
    "2.1": `Explanation: If the App is intended for the consumer without clinical supervision, the developer shall have documented evidence demonstrating that the App, or associated website, clearly declares that the information or services provided do not replace a recommendation, opinion or diagnosis made by a healthcare professional.
If the App is intended for use in consultation with a healthcare professional, the developer shall have documented evidence that the App clearly declares this: e.g., this app is intended for use in consultation with a healthcare professional.`,
    "2.2": `Explanation: The developer shall have documented evidence:
•	That the App has adopted safety-by-design principles for build and operation.
•	That the App has been subjected to an appropriate ethical review process with respect to safety.`,
    "2.3": `Explanation: Where the App purports to provide a specific health benefit, or make a specific health claim the developer shall have documented evidence of relevant authoritative sources within the App, or documentation available for the user including whether such evidentiary information has been subsequently withdrawn or disputed within the relevant scientific literature.`,
    "2.4": `Explanation: If health information is provided by the App the developer shall document evidence:
•	That the App has been continually updated with respect to sources of information, or that real-time links to authoritative sources are current and working.
•	That the information has been reviewed and (where necessary) updated in the last 18 months? (whether that information is behind paywalls or not)

“Not Applicable” indicates that the App does not display or make use of health information that would be expected to need to be current`,
    "2.5": `Explanation: The developer shall document evidence of how safety or privacy breaches are reported and managed and how it complies with any relevant code of ethics. Where AI is used within the App, or where any data is sent back to AI engines for training or other purposes, the developer is encouraged to document compliance with the voluntary Australian AI ethics principles available here: https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-principles/australias-ai-ethics-principles `,
    "2.6": `Explanation: The developer shall document evidence:
•	that it provides clear support channels and mechanisms for users or clinical advisors to report safety issues or operational problems. 
•	that safety breaches (minor or major) have a clear process for review, follow up and corrective action.
•	that if it requires integration with health records such as My Health Record or electronic medical records in clinical settings, then it shall be conformant with relevant health integration, terminology, imaging and/or exchange standards for Australian healthcare settings.`,
    "2.7": `Explanation: The developer shall document evidence that the App discloses up front all relevant required personal and/or sensitive information before requiring a user to commit to signing up to provision of such information or paying fees.`,
    "2.8": `Explanation: The developer shall document evidence of authorship, affiliations, credentials, and commercial interests that would be expected to be evident to a user.`,
    "2.9": `Explanation: The developer shall document evidence of advertising or sponsorship interests that would be expected to be evident to a user.`,
    "3.1": `Explanation: Where relevant to the purpose of the App the developer shall document evidence that:
1.	the App has been designed for accessibility, or can take appropriate advantage of the mobile platform’s accessibility controls and options without restriction imposed by the App.
2.	there are no restrictive aspects of the App that would reduce accessibility (such as being unable to enlarge fonts, increase contrast, or have voice over operation). 
3.	if relevant for the purpose of the App, evidence of options for the users to customise their experience, such as adjusting settings, usage preferences, or notification or communication elements to better suit their accessibility or personal needs. `,
    "3.2": `Explanation: The developer shall document evidence that the App has undergone usability testing with target user groups, with the results having been used to improve the App.  Evidence may include (and not be limited to) language, navigation and functionality that is clearly optimised and relevant to the target user community  `,
    "3.3": 'Explanation: The developer shall document evidence that :
•	the use of the App does not require a literacy, knowledge or technical hurdle that would disadvantage community members with low level of digital literacy (such as complicated language, biases in the datasets used to support or train the App.) ',
    "3.4": 'Explanation: The developer shall document evidence that:
•	shows the ease of installation and operation of the App including handling user data inputs and navigation. 
•	demonstrates use of multi-language support, use of plain non-technical simple language – free from jargon and acronyms, and / or use of icons.
•	shows that the reading age or readability  has been considered and / or a credible health literacy or readability checker tool has been used.`,
    "4.1": `Explanation: The developer shall document evidence that the Australian Privacy Principles are followed including adherence to storage of health data, what data is collected, how it is collected, and for what purposes it is used`,
    "4.2": `Explanation: The developer shall document evidence on how the user is informed if any user-derived data are used for specific healthcare purposes `,
    "4.3": `Explanation: The developer shall document evidence on how the user is informed about their control over data they provide to the App (or which accesses their data).
The developer shall document evidence of compliance with all privacy policies concerning personal data`,
    "4.4": `Explanation: •	The developer shall document evidence on how the user is informed for consent purposes with respect to collecting and using their personal data
•	The developer shall document evidence of compliance with privacy, consumer law and any other relevant laws with respect to collecting and sharing personal and sensitive data`,
    "4.5": `Explanation: The developer shall document evidence of compliance with privacy, consumer law and any other relevant laws with respect to collecting and sharing personal and sensitive data with third parties beyond primary use of the App.`,
    "4.6": `Explanation: The developer shall document evidence of compliance with privacy, consumer law and any other relevant laws and health data exchange standards with respect to collecting, storing and exchanging health and personal data. The developer shall document evidence of how breaches of the laws with respect to the user provided data are notified and remediated.`,
    "4.7": `Explanation: The developer shall document evidence of how privacy and security are assured (use of passkeys, enforcing strong password requirements, and ensuring the expiration of authentication sessions to enhance security) and tested (penetration testing, security scans and associated remediation) and monitored (general server and client (app) side issues around security flaws in underlying code bases, operating systems) `,
    "5.1": `Explanation: The developer shall document evidence that the App is in compliance with ISO/TS 82304-2:2021 Health software — Part 2: Health and wellness Apps — Quality and reliability standard or similar standard. `,
    "5.2": `Explanation: The developer shall document evidence of how the App notifies the developer of any crashes, how the user may inform the developer of issues, and how bugs are resolved.  
The developer shall document any platform restrictions that prohibit the App from being used on devices or operating systems that are outside of the latest update cycle.`,
    "5.3": 'Explanation: The developer shall document evidence of efforts to train the AI models with unbiased data and to test for biases appropriate to cultures or communities who may use the App`,
    "5.4": `Explanation: The developer shall document evidence of efforts to use AI in a manner that is transparent, ethical and not harmful to the user and in alignment with jurisdictional and Commonwealth laws.`,
    "5.5": `Explanation: The developer shall document evidence of compatible platforms that are supported (e.g. by statements on the App stores or websites).`,
    "5.6": `Explanation: The developer shall document evidence of how the user may obtain assistance for resolving issues and providing feedback on the product.`,
    "5.7": `Explanation: The developer shall document evidence of instructions and guides for users and developers regarding the App functionality, usage and trouble shooting `
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