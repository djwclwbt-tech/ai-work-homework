const STORAGE_KEY = 'dylan-ai-work-homework-v1';

const DRILLS = [
  {
    id: 'day-1-task-contract',
    day: 'Day 1',
    title: 'Control the AI with a task contract',
    focus: 'Turn vague work into a clear AI request.',
    scenario: 'Your manager says: “We need to figure out how our team should use AI this quarter. Can you put something together?”',
    dataPacket: `Fake work context:\n- Team: 12-person operations/sales support team\n- AI use is now mandatory\n- Adoption is uneven: 3 power users, 5 casual users, 4 avoiders\n- Main risks: bad client-facing answers, private data pasted into tools, wasted time from toy use cases\n- Deadline: first proposal due Friday\n- Political reality: leadership wants momentum but does not want a giant transformation project`,
    task: 'Write the AI task brief you would give an assistant to turn this into a useful proposal.',
    starterPrompt: `Goal:\nAudience:\nContext:\nConstraints:\nOutput format:\nRequired reasoning:\nVerification:`,
    idealAnswer: `Goal: Create a practical first AI adoption proposal for a 12-person ops/sales support team.\nAudience: My manager and team leadership.\nContext: AI is mandatory; adoption is uneven; risks include client-facing errors, private data exposure, and toy use cases. Proposal due Friday. Leadership wants momentum without a giant transformation project.\nConstraints: Keep it practical this week. Avoid fragile automation. Include privacy/safety guardrails.\nOutput format: 1-page proposal with 3 rollout options, recommendation, risks, first-week pilot, and success measures.\nRequired reasoning: Compare options by speed, risk, adoption likelihood, and management burden.\nVerification: List assumptions, missing data, privacy risks, and what I should confirm before sending. Red-team the proposal.`,
    rubric: ['Clear goal and audience', 'Specific context instead of vague “help me”', 'Names constraints and risks', 'Forces recommendation/tradeoffs', 'Asks for verification/red-team'],
    commonMisses: ['No audience', 'No deadline', 'No risk/privacy constraint', 'Asking only for a brainstorm', 'No verification request'],
    transferAction: 'Use this exact task-contract shape for one real work request today.'
  },
  {
    id: 'day-2-decision-memo',
    day: 'Day 2',
    title: 'Force decision-ready output',
    focus: 'Make AI compare options and recommend a path.',
    scenario: 'You need to recommend how the team should start using AI next week.',
    dataPacket: `Fake options:\nA) Open office hours for anyone with AI questions\nB) Require everyone to complete generic AI training\nC) Pick 3 high-value workflows and run guided practice reps\nConstraints:\n- You have one week\n- Team is busy\n- Leadership wants visible progress\n- Risk of generic training being ignored`,
    task: 'Create a decision memo recommendation.',
    starterPrompt: `Compare options A/B/C against speed, usefulness, adoption, risk, and maintenance. Recommend one. Explain what evidence would change the recommendation.`,
    idealAnswer: `Recommendation: Choose C — pick 3 high-value workflows and run guided practice reps.\nWhy: It creates visible progress in one week, avoids generic training fatigue, and ties AI to real work.\nTradeoffs: It is narrower than generic training, but that is a feature for week one.\nRisks: Picking the wrong workflows, weak facilitation, or no follow-up.\nEvidence that would change this: If compliance requires certified training, combine B with C. If no workflows are clear, run one office-hours discovery session first.\nNext step: Identify 3 recurring workflows with high time cost and low privacy risk.`,
    rubric: ['Has a clear recommendation', 'Compares against criteria', 'Explains tradeoffs', 'Names risks', 'States evidence that would change the answer'],
    commonMisses: ['Lists pros/cons but avoids deciding', 'Does not mention reversibility', 'No next step', 'No evidence threshold'],
    transferAction: 'For your next work decision, ask AI what evidence would change its recommendation.'
  },
  {
    id: 'day-3-red-team',
    day: 'Day 3',
    title: 'Verify before trust',
    focus: 'Catch polished-but-wrong AI output.',
    scenario: 'AI drafted a confident AI rollout plan that claims “productivity will improve 30% in the first month.”',
    dataPacket: `Draft claim:\n“Our team can expect a 30% productivity increase within one month by adopting AI for summaries, emails, and CRM updates.”\nKnown facts:\n- No baseline time study exists\n- Team workflows vary widely\n- Privacy policy is not finalized\n- Leadership likes numbers but hates being surprised later`,
    task: 'Red-team the claim before it goes to leadership.',
    starterPrompt: `Critique this as if it could embarrass me at work if wrong. Identify unsupported claims, hidden assumptions, missing evidence, likely objections, and safer wording.`,
    idealAnswer: `Unsupported claim: 30% productivity improvement has no baseline or source.\nHidden assumptions: everyone uses AI consistently, workflows are comparable, quality does not drop, privacy constraints do not slow adoption.\nMissing evidence: baseline time spent, pilot results, error rates, adoption data.\nLikely objections: “Where did 30% come from?” “Does this risk client data?” “How will we measure it?”\nSafer wording: “We expect measurable time savings in selected workflows, but the first month should establish baseline, adoption, quality, and risk controls before making productivity claims.”\nVerify: run a one-week pilot measuring time saved and error/quality checks on 2-3 workflows.`,
    rubric: ['Flags unsupported metric', 'Names hidden assumptions', 'Suggests safer wording', 'Defines measurement', 'Protects credibility'],
    commonMisses: ['Accepting the number', 'Only softening tone', 'No measurement plan', 'No stakeholder objection handling'],
    transferAction: 'Red-team one AI-generated claim before sending it at work.'
  },
  {
    id: 'day-4-meeting-notes',
    day: 'Day 4',
    title: 'Turn messy meetings into action',
    focus: 'Extract decisions, owners, risks, and follow-up.',
    scenario: 'You have messy notes from an AI adoption meeting.',
    dataPacket: `Meeting notes:\n- Sarah worried about client data in ChatGPT\n- Mike says CRM updates take forever and AI could help\n- Priya wants examples not theory\n- Boss said “show something useful by next Friday”\n- Someone mentioned legal review but no owner\n- Team agreed summaries and follow-up emails are probably safe first use cases\n- Need to avoid people making up policies`,
    task: 'Convert notes into decisions, owners, risks, and a follow-up message.',
    starterPrompt: `Turn these notes into decisions made, open questions, owners, deadlines, risks, and a concise follow-up. Flag anything ambiguous.`,
    idealAnswer: `Decisions: Start with low-risk AI use cases: meeting summaries and follow-up emails. Avoid client/private data until policy is clarified.\nOpen questions: Who owns legal/privacy review? What tools are approved? What examples should be used?\nOwners: Boss owns Friday outcome; legal/privacy owner unassigned; Mike can provide CRM pain example; Priya needs practical examples.\nDeadline: show useful pilot by next Friday.\nRisks: unofficial policy creation, client data exposure, vague training.\nFollow-up: “We agreed to focus first on low-risk AI use cases: summaries and follow-up emails. Before touching client data, we need an owner for legal/privacy guidance and confirmation of approved tools. Next step is to prepare practical examples by next Friday.”`,
    rubric: ['Separates decisions from open questions', 'Flags unassigned owners', 'Captures deadline', 'Names risks', 'Creates usable follow-up'],
    commonMisses: ['Treating unclear items as decisions', 'No owner for legal', 'Missing Friday deadline', 'No risk language'],
    transferAction: 'After your next meeting, use this format before sending follow-up.'
  },
  {
    id: 'day-5-project-gates',
    day: 'Day 5',
    title: 'Run AI projects through gates',
    focus: 'Prevent half-built, unverified AI work.',
    scenario: 'A teammate wants to build an AI tool that auto-drafts client responses from CRM notes.',
    dataPacket: `Known context:\n- Client-facing output has reputational risk\n- CRM notes may contain sensitive info\n- No one has defined approved sources\n- Team wants speed\n- Leadership wants “AI wins” this quarter`,
    task: 'Create a phase-gated plan before anyone builds.',
    starterPrompt: `Turn this into gated phases: truth, hypothesis, verification, design, local implementation, release approval. For each phase include artifact, exit criteria, and risk.`,
    idealAnswer: `Truth: Map data sources, privacy rules, and current response workflow. Exit: approved source/risk map.\nHypothesis: AI can draft internal-only response suggestions faster without reducing quality. Exit: measurable pilot hypothesis.\nVerification: Test on fake/historical sanitized examples. Exit: quality and risk review.\nDesign: Human-in-the-loop draft assistant, not auto-send. Exit: reviewed design with logging and disclaimers.\nLocal implementation: sandbox prototype with fake data. Exit: demo and test evidence.\nRelease approval: legal/privacy/manager approval before real client data. Exit: written approval and rollback plan.`,
    rubric: ['Uses phases', 'Blocks real data until approval', 'Defines artifacts', 'Defines exit criteria', 'Prevents auto-send risk'],
    commonMisses: ['Jumping straight to build', 'No privacy gate', 'No human-in-loop', 'No rollback/approval'],
    transferAction: 'Use gates when someone says “can AI just automate this?”'
  },
  {
    id: 'day-6-technical-review',
    day: 'Day 6',
    title: 'Supervise technical work safely',
    focus: 'Ask for proof, not vibes.',
    scenario: 'An AI/engineer says: “I fixed the bug and deployed the change.”',
    dataPacket: `Fake change summary:\n- Bug: settings were overwritten by old defaults on page load\n- Claimed fix: moved save call behind explicit Save button\n- Evidence provided: “tested locally”\n- Risk: hidden writes could corrupt user settings\n- Production has real user data`,
    task: 'Write the review questions before accepting the fix.',
    starterPrompt: `Review this as product/ops owner. What changed, what could break, what tests/proof are needed, is rollback clear, and is this safe to ship?`,
    idealAnswer: `Questions:\n1. Show the diff: where was automatic save removed?\n2. Show proof that page load/navigation makes zero write requests.\n3. Show proof explicit Save still writes correctly.\n4. Show regression test or browser/network evidence.\n5. What settings/data paths could be affected?\n6. What is the rollback plan?\n7. Was this deployed or only local? If production was touched, show deployment ID and logs.\nDecision: Not accepted until evidence shows no hidden write-on-view and Save still works.`,
    rubric: ['Demands diff/proof', 'Tests original failure mode', 'Separates local vs prod', 'Asks rollback', 'Does not accept vague “tested”'],
    commonMisses: ['Trusting “tested locally”', 'No original symptom check', 'No deploy boundary', 'No rollback'],
    transferAction: 'For any technical claim, ask “what proof tests the original failure?”'
  },
  {
    id: 'day-7-personal-ai-os',
    day: 'Day 7',
    title: 'Build your personal AI work OS',
    focus: 'Turn repeated AI wins into reusable systems.',
    scenario: 'You want your AI usage at work to compound instead of restarting from scratch every time.',
    dataPacket: `Fake recurring work:\n- Weekly stakeholder updates\n- Meeting prep and follow-up\n- Project risk reviews\n- AI adoption examples\n- Technical/vendor claims that need verification\n- Repeated explanations to the team`,
    task: 'Design a tiny personal AI operating system for this work.',
    starterPrompt: `Create a personal AI work OS with context packs, prompt library, decision log, weekly review, and automation candidate list. Keep it simple enough to actually maintain.`,
    idealAnswer: `Components:\n1. Context packs: one page per active project with goal, stakeholders, current state, decisions, risks.\n2. Prompt library: task brief, decision memo, meeting prep, red-team, technical review.\n3. Decision log: date, decision, rationale, evidence, revisit trigger.\n4. Weekly review: what AI helped with, what failed, what prompt should be reused, what needs verification.\n5. Automation candidate list: frequency, pain, risk, maintenance, first manual version.\nRule: do not automate until a manual workflow has worked repeatedly.`,
    rubric: ['Simple components', 'Reusable prompts', 'Context discipline', 'Decision log', 'Manual-before-automation rule'],
    commonMisses: ['Too many tools', 'No review loop', 'No source of truth', 'Automating too early'],
    transferAction: 'Create one context pack for the most important work project.'
  }
];

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { answers: {}, complete: {}, activeId: DRILLS[0].id };
  } catch (_error) {
    return { answers: {}, complete: {}, activeId: DRILLS[0].id };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

const el = {
  lessonMeta: document.getElementById('lessonMeta'),
  drillList: document.getElementById('drillList'),
  drillTitle: document.getElementById('drillTitle'),
  drillBody: document.getElementById('drillBody'),
  answerInput: document.getElementById('answerInput'),
  feedbackPanel: document.getElementById('feedbackPanel'),
  progressSummary: document.getElementById('progressSummary'),
  progressBar: document.getElementById('progressBar'),
  saveAnswerBtn: document.getElementById('saveAnswerBtn'),
  showFeedbackBtn: document.getElementById('showFeedbackBtn'),
  markCompleteBtn: document.getElementById('markCompleteBtn')
};

function activeDrill() {
  return DRILLS.find((drill) => drill.id === state.activeId) || DRILLS[0];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderDrillList() {
  el.drillList.innerHTML = DRILLS.map((drill) => {
    const classes = ['drill-button'];
    if (drill.id === state.activeId) classes.push('active');
    if (state.complete[drill.id]) classes.push('done');
    return `<button type="button" class="${classes.join(' ')}" data-drill-id="${drill.id}"><strong>${drill.day}</strong><br>${escapeHtml(drill.title)}</button>`;
  }).join('');

  el.drillList.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => renderDrill(button.dataset.drillId));
  });
}

function renderDrill(id = state.activeId) {
  state.activeId = id;
  saveState(state);
  const drill = activeDrill();

  el.lessonMeta.textContent = `${drill.day} · ${drill.focus}`;
  el.drillTitle.textContent = drill.title;
  el.drillBody.innerHTML = `
    <h3>Scenario</h3>
    <p>${escapeHtml(drill.scenario)}</p>
    <h3>Fake work data</h3>
    <div class="data-packet">${escapeHtml(drill.dataPacket)}</div>
    <h3>Your task</h3>
    <p>${escapeHtml(drill.task)}</p>
    <h3>Starter prompt</h3>
    <div class="prompt-box">${escapeHtml(drill.starterPrompt)}</div>
    <h3>Transfer to real work</h3>
    <p>${escapeHtml(drill.transferAction)}</p>
  `;
  el.answerInput.value = state.answers[drill.id] || '';
  el.feedbackPanel.hidden = true;
  el.feedbackPanel.innerHTML = '';
  renderDrillList();
  renderProgress();
}

function saveAnswer() {
  const drill = activeDrill();
  state.answers[drill.id] = el.answerInput.value;
  saveState(state);
  renderProgress();
}

function showFeedback() {
  saveAnswer();
  const drill = activeDrill();
  el.feedbackPanel.hidden = false;
  el.feedbackPanel.innerHTML = `
    <h3>Ideal answer</h3>
    <div class="ideal-answer">${escapeHtml(drill.idealAnswer)}</div>
    <h3>Rubric</h3>
    <div class="rubric-box"><ul>${drill.rubric.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
    <h3>Common misses</h3>
    <ul>${drill.commonMisses.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
  `;
}

function markComplete() {
  const drill = activeDrill();
  saveAnswer();
  state.complete[drill.id] = true;
  saveState(state);
  renderDrillList();
  renderProgress();
}

function renderProgress() {
  const completeCount = DRILLS.filter((drill) => state.complete[drill.id]).length;
  const answerCount = DRILLS.filter((drill) => (state.answers[drill.id] || '').trim()).length;
  const pct = Math.round((completeCount / DRILLS.length) * 100);
  el.progressSummary.textContent = `${completeCount}/${DRILLS.length} complete · ${answerCount}/${DRILLS.length} drafts saved`;
  el.progressBar.style.width = `${pct}%`;
}

el.saveAnswerBtn.addEventListener('click', saveAnswer);
el.showFeedbackBtn.addEventListener('click', showFeedback);
el.markCompleteBtn.addEventListener('click', markComplete);

renderDrill(state.activeId);
